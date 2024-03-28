const { readFile, mkdir, cp, writeFile } = require("fs/promises");
const { fetchServerOutside, fetchServerInsidePage } = require('./../templates/functions/fetch/server')
const { fetchClientImports, fetchClientFunctionSign, fetchClientInsidePage } = require('./../templates/functions/fetch/client')

const main = async () => {
  console.log("🔁 XT Config Updated. Building...");
  const config = JSON.parse(await readFile("./xt.config.json", "utf8"))
  config.pages.forEach(async (page) => {
    if (!page.lock) {
      const slug = page.slug || generateSlug(page.name)
      await mkdir(`./src/app/(site)`, { recursive: true });
      await mkdir(`./src/app/(site)/${slug}`, { recursive: true });
      await cp(`./src/xt/templates/blocks/${page.template}.tsx`,
        `./src/app/(site)/${slug}/page.tsx`, { recursive: true, force: true });
      if (page.loading) await addGenericToPage(slug, "generics", "loading");
      if (page.error) await addGenericToPage(slug, "generics", "error");
      if (page.fetchData === "client") await addFetchDataInClient(slug)
      if (page.fetchData === "server") await addFetchDataInServer(slug)
    }
  });
  console.log("✅ XT Done");
};
module.exports = main;

const addGenericToPage = async (_pageSlug, _folder, _template) => {
  return await cp(`./src/xt/templates/blocks/${_folder}/${_template}.tsx`,
    `./src/app/(site)/${_pageSlug}/${_template}.tsx`, { recursive: true, force: true });
};

const addFetchData = async (_pageSlug, fetchDataFunction, replacements) => {
  console.log(fetchDataFunction.name + ' in ' + (_pageSlug === '' ? 'all' : _pageSlug));
  const filePath = `./src/app/(site)/${_pageSlug}/page.tsx`;
  let pageContent = await readFile(filePath, 'utf8');

  for (const replacement of replacements) {
    const [pattern, replaceWith] = replacement;
    pageContent = pageContent.replace(pattern, replaceWith);
  }

  await writeFile(filePath, pageContent, 'utf8', { recursive: true, force: true });
};

const addFetchDataInServer = async (_pageSlug = '') => {
  const replacements = [
    ["\/\/@xt-use-client", ""],
    ["\/\/@xt-imports", ""],
    ["\/\/@xt-fetch-outside", fetchServerOutside],
    [/const\s+([\w\d]+)\s*=\s*\(\s*\)\s*=>\s*{/gim, 'const $1 = async () => {'],
    ["\/\/@xt-fetch-inside", fetchServerInsidePage]
  ];

  await addFetchData(_pageSlug, addFetchDataInServer, replacements);
};

const addFetchDataInClient = async (_pageSlug = '') => {
  const replacements = [
    ["\/\/@xt-use-client", "'use client'"],
    ["\/\/@xt-imports", fetchClientImports],
    ["\/\/@xt-fetch-outside", ''],
    [/const\s+Page\s*=\s*\(\s*\)\s*=>\s*{/gim, fetchClientFunctionSign],
    ["\/\/@xt-fetch-inside", fetchClientInsidePage]
  ];

  await addFetchData(_pageSlug, addFetchDataInClient, replacements);
};

function generateSlug(inputString) {
  const sanitizedString = removeAccents(inputString)
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Eliminar caracteres especiales excepto espacios y guiones
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .replace(/-+/g, '-'); // Eliminar duplicados de guiones
  return sanitizedString;
}
function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function desanitizeSlug(slug) {
  const stringWithSpaces = slug.replace(/-/g, ' ');
  const stringWithAccents = stringWithSpaces.normalize("NFC");
  return stringWithAccents;
}


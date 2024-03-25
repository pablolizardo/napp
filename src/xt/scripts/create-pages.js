const { readFile, mkdir, cp, writeFile } = require("fs/promises");
const { fetchServerOutside, fetchServerInsidePage, fetchServerFunctionSign } = require('./../templates/functions/fetch/server')
const { fetchClientImports, fetchClientFunctionSign, fetchClientInsidePage } = require('./../templates/functions/fetch/client')

const main = async () => {
  console.log("🔁 XT Config Updated. Building...");
  const config = JSON.parse(await readFile("./xt.config.json", "utf8"))
  config.pages.forEach(async (page) => {
    if (!page.lock) {
      const slug = page.slug || generateSlug(page.name)
      await mkdir(`./src/app/(site)`, { recursive: true });
      await mkdir(`./src/app/(site)/${slug}`, { recursive: true });
      await cp(`./src/xt/templates/pages/${page.template || "blank"}.tsx`, `./src/app/(site)/${slug}/page.tsx`, { recursive: true, force: true });
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
  return await cp(`./src/xt/templates/${_folder}/${_template}.tsx`, `./src/app/(site)/${_pageSlug}/${_template}.tsx`, { recursive: true, force: true });
};


const addFetchDataInServer = async (_pageSlug) => {
  console.log('fetch data in server')
  let pageContent = await readFile(`./src/app/(site)/${_pageSlug}/page.tsx`, 'utf8')
  pageContent = pageContent.replace("\/\/@xt-use-client", "");
  pageContent = pageContent.replace("\/\/@xt-imports", "");
  pageContent = pageContent.replace("\/\/@xt-fetch-outside", fetchServerOutside);
  pageContent = pageContent.replace("const Page = () => {", fetchServerFunctionSign);
  pageContent = pageContent.replace("\/\/@xt-fetch-inside", fetchServerInsidePage);
  await writeFile(`./src/app/(site)/${_pageSlug}/page.tsx`, pageContent, 'utf8', { recursive: true, force: true })
}

const addFetchDataInClient = async (_pageSlug) => {
  console.log('fetch data in client')
  let pageContent = await readFile(`./src/app/(site)/${_pageSlug}/page.tsx`, 'utf8')
  pageContent = pageContent.replace("\/\/@xt-use-client", "'use client'");
  pageContent = pageContent.replace("\/\/@xt-imports", fetchClientImports);
  pageContent = pageContent.replace("\/\/@xt-fetch-outside", '');
  pageContent = pageContent.replace("const Page = () => {", fetchClientFunctionSign);
  pageContent = pageContent.replace("\/\/@xt-fetch-inside", fetchClientInsidePage);
  await writeFile(`./src/app/(site)/${_pageSlug}/page.tsx`, pageContent, 'utf8', { recursive: true, force: true })
}


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


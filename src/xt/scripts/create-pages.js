const { readFile, mkdir, cp, writeFile } = require("fs/promises");
const { fetchServerOutside, fetchServerInsidePage, fetchServerFunctionSign } = require('./../templates/functions/fetch/server')

const main = async () => {
  console.log("🔁 XT Config Updated. Building...");
  const config = JSON.parse(await readFile("./xt.config.json", "utf8"));
  config.pages.forEach(async (page) => {
    await mkdir(`./src/app/(site)`, { recursive: true });
    await mkdir(`./src/app/(site)/${page.slug}`, { recursive: true });
    await cp(`./src/xt/templates/pages/${page.template || "blank"}.tsx`, `./src/app/(site)/${page.slug}/page.tsx`, { recursive: true, force: true });
    if (page.loading) await addGenericToPage(page.slug, "generics", "loading");
    if (page.error) await addGenericToPage(page.slug, "generics", "error");

    if (page.fetchData === "client") {
      //@xt-fetch-inside
    }
    if (page.fetchData === "server") {
      await addFetchDataInServer(page.slug)
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
  console.log('fetchServerOutside', fetchServerOutside)
  let pageContent = await readFile(`./src/app/(site)/${_pageSlug}/page.tsx`, 'utf8')
  console.log('pageContent', pageContent)
  pageContent = pageContent.replace("\/\/@xt-use-client", "");
  pageContent = pageContent.replace("\/\/@xt-imports", "");
  pageContent = pageContent.replace("\/\/@xt-fetch-outside", fetchServerOutside);
  pageContent = pageContent.replace("\/\/@xt-fetch-inside", fetchServerInsidePage);
  pageContent = pageContent.replace("const Page = () => {", fetchServerFunctionSign);
  console.log('pageContent', pageContent)
  await writeFile(`./src/app/(site)/${_pageSlug}/page.tsx`, pageContent, 'utf8', { recursive: true, force: true })

  // return pageContent
}
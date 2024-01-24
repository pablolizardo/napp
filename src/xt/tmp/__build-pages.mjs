// import { mkdir, readFile, writeFile } from "fs/promises";
// import { generateSlug } from ".";
import { readFile } from "fs/promises";
import {
  fetchClientFunctionSign,
  fetchClientImports,
  fetchClientInsidePage,
} from "../templates/functions/fetch/client.mjs";
import {
  fetchServerFunctionSign,
  fetchServerInsidePage,
  fetchServerOutside,
} from "../templates/functions/fetch/server.mjs";
// import xtConfig from "./../../../xt.config.json?type=json";
import { spawn } from "child_process";

const buildPages = async () => {
  const child = spawn(command, args);
  const config = await readFile("xt.config.json");
  console.log("config", config);
  await mkdir(`src/app/(site)/config`, { recursive: true });
  return config;
  const pages = xtConfig.pages;
  console.log("building", pages);
  pages.forEach(async (page) => {
    const sanitizedName = generateSlug(page.name);
    await mkdir(`src/app/(site)/${sanitizedName}`, { recursive: true });
    const templateName = page.template;
    let content = await readFile(
      `src/xt/templates/pages/${templateName}.tsx`,
      "utf8"
    );

    switch (page.fetchData) {
      case "server":
        content = content.replace("//@xt-use-client", "");
        content = content.replace("//@xt-imports", "");
        content = content.replace("//@xt-fetch-outside", fetchServerOutside);
        content = content.replace("//@xt-fetch-inside", fetchServerInsidePage);
        content = content.replace(
          "const Page = () => {",
          fetchServerFunctionSign
        );
        break;
      case "client":
        content = content.replace("//@xt-use-client", "'use client'");
        content = content.replace("//@xt-imports", fetchClientImports);
        content = content.replace("//@xt-fetch-outside", "");
        content = content.replace(
          "const Page = () => {",
          fetchClientFunctionSign
        );
        content = content.replace("//@xt-fetch-inside", fetchClientInsidePage);
        break;
      case "none":
        content = content.replace("//@xt-use-client", "");
        content = content.replace("//@xt-imports", "");
        content = content.replace("//@xt-fetch-outside", "");
        content = content.replace("//@xt-fetch-inside", "");
        break;
      default:
        content = content.replace("//@xt-use-client", "");
        content = content.replace("//@xt-imports", "");
        content = content.replace("//@xt-fetch-outside", "");
        content = content.replace("//@xt-fetch-inside", "");
        break;
    }

    writeFile(`src/app/(site)/${sanitizedName}/page.tsx`, content, "utf8");

    if (page.loading) {
      const loadingContent = await readFile(
        `src/xt/templates/generics/loading.tsx`,
        "utf8"
      );
      writeFile(
        `src/app/(site)/${sanitizedName}/loading.tsx`,
        loadingContent,
        "utf8"
      );
    }

    if (page.error) {
      const errorContent = await readFile(
        `src/xt/templates/generics/error.tsx`,
        "utf8"
      );
      writeFile(
        `src/app/(site)/${sanitizedName}/error.tsx`,
        errorContent,
        "utf8"
      );
    }
  });
};
export default buildPages;

export function generateSlug(inputString) {
  const sanitizedString = removeAccents(inputString)
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Eliminar caracteres especiales excepto espacios y guiones
    .replace(/\s+/g, "-") // Reemplazar espacios con guiones
    .replace(/-+/g, "-"); // Eliminar duplicados de guiones
  return sanitizedString;
}

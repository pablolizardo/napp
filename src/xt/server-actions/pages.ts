import { statSync, } from "fs";
import { mkdir, readFile, readdir, rm, rmdir, writeFile } from "fs/promises";
import path from "path";
import { generateSlug } from "../lib/utils";
import { fetchClientFunctionSign, fetchClientImports, fetchClientInsidePage } from "../templates/functions/fetch/client.mjs";
import { fetchServerFunctionSign, fetchServerInsidePage, fetchServerOutside } from "../templates/functions/fetch/server.mjs";
import { addPageToConfig, removeAllPagesFromConfig } from "./config";

export const handleAddPage = async (formData: FormData) => {
    'use server'
    const name = formData.get('name') as string
    const loading = formData.get('loading') as string
    const error = formData.get('error') as string
    const fetchDataIn = formData.get('fetchDataIn') as string
    const fetchDataFrom = formData.get('fetchDataFrom') as string

    const sanitizedName = generateSlug(name)
    await mkdir(`src/app/(site)/${sanitizedName}`, null)
    const templateName = formData.get('template')
    const content = await readFile(`src/xt/templates/pages/${templateName}.tsx`, 'utf8')
    let contentFile = content.replace('{/*@xt-app-name*/}', name)
    console.log('fetchDataIn', fetchDataIn)
    switch (fetchDataIn) {
        case "server":
            contentFile = contentFile.replace('//@xt-use-client', '')
            contentFile = contentFile.replace('//@xt-imports', '')
            contentFile = contentFile.replace('//@xt-fetch-outside', fetchServerOutside)
            contentFile = contentFile.replace('//@xt-fetch-inside', fetchServerInsidePage)
            contentFile = contentFile.replace('const Page = () => {', fetchServerFunctionSign)
            break;
        case "client":
            contentFile = contentFile.replace('//@xt-use-client', "'use client'")
            contentFile = contentFile.replace('//@xt-imports', fetchClientImports)
            contentFile = contentFile.replace('//@xt-fetch-outside', '')
            contentFile = contentFile.replace('const Page = () => {', fetchClientFunctionSign)
            contentFile = contentFile.replace('//@xt-fetch-inside', fetchClientInsidePage)
            break;
        case "none":
            contentFile = contentFile.replace('//@xt-use-client', '')
            contentFile = contentFile.replace('//@xt-imports', '')
            contentFile = contentFile.replace('//@xt-fetch-outside', '')
            contentFile = contentFile.replace('//@xt-fetch-inside', '')
            break;
        default:
            contentFile = contentFile.replace('//@xt-use-client', '')
            contentFile = contentFile.replace('//@xt-imports', '')
            contentFile = contentFile.replace('//@xt-fetch-outside', '')
            contentFile = contentFile.replace('//@xt-fetch-inside', '')
            break;
    }
    if (fetchDataFrom) {
        contentFile = contentFile.replace('https://jsonplaceholder.typicode.com/users', fetchDataFrom)
    }



    writeFile(`src/app/(site)/${sanitizedName}/page.tsx`, contentFile, 'utf8')




    if (loading) {
        const loadingContent = await readFile(`src/xt/templates/generics/loading.tsx`, 'utf8')
        writeFile(`src/app/(site)/${sanitizedName}/loading.tsx`, loadingContent, 'utf8')
    }
    if (error) {
        const errorContent = await readFile(`src/xt/templates/generics/error.tsx`, 'utf8')
        writeFile(`src/app/(site)/${sanitizedName}/error.tsx`, errorContent, 'utf8')
    }

    addPageToConfig({
        name,
        loading: true,
        error: true,
        fetchData: 'always',
        revalidatePattern: 'never',
        generateStaticPaths: 'never',
    })

}

export const getPagesInFolder = async (): Promise<string[]> => {
    'use server'
    const content = await readdir('src/app/(site)')
    const pages = content
        .filter(page => statSync(path.join('src/app/(site)', page))
            .isDirectory())
        .filter(page => !page.includes('('))
    return pages
}

export const handleRemoveAllPages = async () => {
    'use server'
    const content = await readdir('src/app/(site)')
    const pages = content
        .filter(page => statSync(path.join('src/app/(site)', page))
            .isDirectory())
        .filter(page => !page.includes('('))

    await Promise.all(pages.map(async page => {
        const dir = `src/app/(site)/${page}`
        const files = await readdir(dir);
        await Promise.all(files.map(async file => {
            const filePath = path.join(dir, file);
            await rm(filePath);
        }))
        return await rmdir(`src/app/(site)/${page}`)
    }))

    removeAllPagesFromConfig()

}
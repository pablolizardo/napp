import { generateSlug } from "@/xt/lib/url";
import { statSync, } from "fs";
import { mkdir, readFile, readdir, rm, rmdir, unlink, writeFile } from "fs/promises";
import path from "path";
import { addPageToConfig, removeAllPagesFromConfig, updateConfig } from "./config";

export const handleAddPage = async (formData: FormData) => {
    'use server'
    const name = formData.get('name') as string
    const sanitizedName = generateSlug(name)
    await mkdir(`src/app/(site)/${sanitizedName}`, null)
    const templateName = formData.get('template')
    const content = await readFile(`src/xt/templates/pages/${templateName}.tsx`, 'utf8')
    const contentFile = content.replace('$title', name)
    writeFile(`src/app/(site)/${sanitizedName}/page.tsx`, contentFile, 'utf8')

    const loadingContent = await readFile(`src/xt/templates/generics/loading.tsx`, 'utf8')
    writeFile(`src/app/(site)/${sanitizedName}/loading.tsx`, loadingContent, 'utf8')

    const errorContent = await readFile(`src/xt/templates/generics/error.tsx`, 'utf8')
    writeFile(`src/app/(site)/${sanitizedName}/loading.tsx`, errorContent, 'utf8')

    addPageToConfig({
        name,
        loading: true,
        error: true,
        fetchData: 'always',
        revalidatePattern: 'never',
        generateStaticPaths: 'never',
    })

}

export const getPagesInFolder = async () => {
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
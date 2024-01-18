import pageTemplate from "@/templates/page-template";
import { statSync, writeFile } from "fs";
import { readdir, mkdir } from "fs/promises";
import path from "path";

export const handleAddPage = async (formData: FormData) => {
    'use server'
    const name = formData.get('name') as String
    await mkdir(`src/app/${name}`, null)
    const template = pageTemplate.replace('$title', name)
    writeFile(`src/app/${name}/page.tsx`, template, 'utf8', (error) => {
        if (error) {
            console.error('Error al crear el archivo:', error);
        } else {
            console.log(`Archivo '${name}' creado exitosamente.`);
        }
    })
}

export const getPagesInFolder = async () => {
    'use server'
    const content = await readdir('src/app')
    const pages = content
        .filter(item => statSync(path.join('src/app', item))
            .isDirectory());
    return pages

}
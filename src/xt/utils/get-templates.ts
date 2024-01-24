import { statSync } from "fs"
import { readdir } from "fs/promises"
import path from "path"
import { XT_TEMPLATES_PATHNAME } from "../lib/constants"

export type PageTemplateInterface = {
    name: string;
    filename: string;
}
export type PagesTemplateInterface = PageTemplateInterface[]

export const getPagesTemplates = async (): Promise<PagesTemplateInterface> => {
    const files = await readdir(`${XT_TEMPLATES_PATHNAME}/pages/`, 'utf8')
    const response = await Promise.all(files
        .filter(file => file.includes('tsx'))
        .map(file => ({
            name: file.replace('.tsx', ''),
            filename: file,
        })))
    return response
}

export type ComponentInterface = {
    section: string;
    name: string;
    filename: string;
}
export type ComponentsInterface = ComponentInterface[]

export const getComponentsTemplates = async (): Promise<ComponentsInterface> => {
    'use server'
    const root = await readdir(`${XT_TEMPLATES_PATHNAME}/components`)
    const sections = root.filter(page => statSync(path.join(`${XT_TEMPLATES_PATHNAME}/components`, page)).isDirectory())
    const components = await Promise.all(sections.map(async section => {
        const root = await readdir(`${XT_TEMPLATES_PATHNAME}/components/${section}`)
        return root.map(file => ({
            section,
            name: file.replace('.tsx', ''),
            filename: file
        })
        )
    }))
    const flatten = components.flat()
    return flatten
}

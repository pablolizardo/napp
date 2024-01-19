'use server'
import xtConfig, { xtPage } from "@/xt/types/app.config";
import { readFile, writeFile } from "fs/promises";

const configFilename = 'xt.config.json'
const getConfig = async (): Promise<xtConfig> => {
    'use server'
    const configFileText = await readFile(configFilename, 'utf8')
    const configFile = JSON.parse(configFileText) as xtConfig
    return configFile
}
export const updateConfig = async (page?: xtPage) => {
    const config = await getConfig()
    config.appName = page?.name || 'no title'
    await writeFile(configFilename, JSON.stringify(config), 'utf8')
}

export const addPageToConfig = async (page: xtPage) => {
    const config = await getConfig()
    config.pages.push(page)
    await writeFile(configFilename, JSON.stringify(config, null, 2), 'utf8')
}

export const removeAllPagesFromConfig = async () => {
    const config = await getConfig()
    config.pages = []
    await writeFile(configFilename, JSON.stringify(config, null, 2), 'utf8')
}
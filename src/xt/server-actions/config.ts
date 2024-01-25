'use server'
import xtConfig, { xtPage } from "@/xt/types/___app.config";
import { readFile, writeFile } from "fs/promises";

const XT_CONFIG_PATHNAME = 'xt.config.json'

const getConfig = async (): Promise<xtConfig> => {
    'use server'
    const configFileText = await readFile(XT_CONFIG_PATHNAME, 'utf8')
    const configFile = JSON.parse(configFileText) as xtConfig
    return configFile
}
export const updateConfig = async (page?: xtPage) => {
    const config = await getConfig()
    config.appName = page?.name || 'no title'
    await writeFile(XT_CONFIG_PATHNAME, JSON.stringify(config), 'utf8')
}

export const addPageToConfig = async (page: xtPage) => {
    const config = await getConfig()
    config.pages.push(page)
    await writeFile(XT_CONFIG_PATHNAME, JSON.stringify(config, null, 2), 'utf8')
}

export const removeAllPagesFromConfig = async () => {
    const config = await getConfig()
    config.pages = []
    await writeFile(XT_CONFIG_PATHNAME, JSON.stringify(config, null, 2), 'utf8')
}
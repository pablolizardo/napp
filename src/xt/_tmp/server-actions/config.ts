'use server'

import { writeFile } from "fs/promises";
import xtConfig from "@/xt/lib/config";

const XT_CONFIG_PATHNAME = 'xt.config.json'


export const updateConfig = async (page) => {
    const config = xtConfig
    config.appName = page?.name || 'no title'
    await writeFile(XT_CONFIG_PATHNAME, JSON.stringify(config), 'utf8')
}

export const addPageToConfig = async (page) => {
    const config = xtConfig
    config.pages.push(page)
    await writeFile(XT_CONFIG_PATHNAME, JSON.stringify(config, null, 2), 'utf8')
}

export const removeAllPagesFromConfig = async () => {
    const config = xtConfig
    config.pages = []
    await writeFile(XT_CONFIG_PATHNAME, JSON.stringify(config, null, 2), 'utf8')
}
import { readFile } from "fs/promises"
import xtConfig from "../types/___app.config"
import { XT_CONFIG_PATHNAME } from "../lib/constants"

export const getConfig = async (): Promise<xtConfig> => {
    'use server'
    const config = await readFile(XT_CONFIG_PATHNAME, 'utf8')
    return JSON.parse(config)
}
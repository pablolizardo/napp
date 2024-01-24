import { readFile } from "fs/promises"
import { XT_CONFIG_PATHNAME } from "../lib/constants"

export const applyConfig = async (path: string, value: string) => {
    'use server'
    const config = await readFile(XT_CONFIG_PATHNAME, 'utf8')

    console.log(config)
}
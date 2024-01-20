import { writeFile } from "fs/promises"
import xtConfig from ".."

const XT_CONFIG_PATHNAME = 'xt.config.json'

export const handleUpdateFeatures = async (formData: FormData) => {
    'use server'
    const database = !!formData.get('database')
    const config = xtConfig
    if (config.features) {
        const feature = config.features.find(f => f.value === 'database');
        if (feature) {
            feature.active = database;
        }
    }
    await writeFile(XT_CONFIG_PATHNAME, JSON.stringify(config), 'utf8')

}
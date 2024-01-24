import { writeFile } from "fs/promises"
import xtConfig from ".."

const XT_CONFIG_PATHNAME = 'xt.config.json'

export const handleUpdateFeatures = async (formData: FormData) => {
    'use server'
    let config = xtConfig

    // const database = !!formData.get('database')
    const newValues = config.features.map((feature) => ({ [feature.name]: !!formData.get(feature.name) }))
    console.log('new values', newValues)

    config.features

    await writeFile(XT_CONFIG_PATHNAME, JSON.stringify(config), 'utf8')

}
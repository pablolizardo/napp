import { readdir } from "fs/promises";

export const getTemplates = async () => {
    const files = await readdir('src/xt/templates/pages/', 'utf8')
    // console.log(files)
    const response = await Promise.all(files
        .filter(file => file.includes('tsx'))
        .map(async file => {
            return {
                name: file.replace('.tsx', ''),
                filename: file,
            }
        }))
    return response
}

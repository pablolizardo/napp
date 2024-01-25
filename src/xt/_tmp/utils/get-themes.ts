import { readdir } from "fs/promises"
import { XT_TEMPLATES_PATHNAME } from "../../lib/constants"

export type ThemeInterface = {
    name: string;
    filename: string;
}
export type ThemesInterface = ThemeInterface[]

export const getThemes = async (): Promise<ThemesInterface> => {
    const files = await readdir(`${XT_TEMPLATES_PATHNAME}/themes/`, 'utf8')
    const response = await Promise.all(files
        .filter(file => file.includes('css'))
        .map(file => ({
            name: file.replace('.css', ''),
            filename: file,
        })))
    return response
}

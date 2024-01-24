'use server'

import { readFile, readdir, writeFile } from "fs/promises"
import { revalidatePath } from "next/cache"

export const getThemesNames = async (): Promise<string[]> => {
    'use server'
    const content = await readdir('src/xt/templates/themes')
    const themes = content.filter(page => page.includes('.css'))
        .map(page => page.replace('.css', ''))
    return themes
}

export const handleApplyTheme = async (themeName: string) => {
    'use server'
    const content = await readFile(`src/xt/templates/themes/${themeName}.css`, 'utf8')
    const appendContent = `
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        /* Generated with XT */
        /* ${themeName} Theme */

        ${content}

        @layer base {
        * {
            @apply border-border;
        }

        body {
            @apply antialiased leading-relaxed;
            @apply bg-background text-foreground;
            accent-color: hsl(var(--primary));
        }
        } `
    await writeFile(`src/xt/styles/globals.css`, appendContent, 'utf8')
    revalidatePath('/admin')
}


const applyStyleVariable = async (variable: string, value: string) => {
    const filePath = 'src/xt/styles/globals.css';
    const content = await readFile(filePath, 'utf8');
    const updatedContent = content.replace(new RegExp(`(${variable}:\\s*)[^;]+(;)`), `$1${value}$2`);
    await writeFile(filePath, updatedContent, 'utf8');
    revalidatePath('/admin');
};

export const handleApplyRounded = async (value: string) => {
    'use server'
    await applyStyleVariable('--radius', value);
};

export const handleApplySpacing = async (value: string) => {
    'use server'
    await applyStyleVariable('--space', value);
};
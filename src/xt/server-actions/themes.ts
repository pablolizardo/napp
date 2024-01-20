import { statSync } from "fs"
import { readFile, readdir, writeFile } from "fs/promises"
import path from "path"

export const getThemesNames = async (): Promise<string[]> => {
    'use server'
    const content = await readdir('src/xt/templates/themes')
    const themes = content.filter(page => page.includes('.css'))
        .map(page => page.replace('.css', ''))
    return themes
}

export const handleApplyTheme = async (formData: FormData) => {
    'use server'
    const themeName = formData.get('theme')
    const rounded = formData.get('rounded')
    const content = await readFile(`src/xt/templates/themes/${themeName}.css`, 'utf8')
    const appendContent =
        `
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
}

`
    const roundedApplied = appendContent.replace('--radius: 0.3rem', `--radius: ${rounded}`)
    await writeFile(`src/xt/styles/globals.css`, roundedApplied, 'utf8')
}
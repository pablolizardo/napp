
'use client'

import xtConfig from '@/xt'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
    import(`./../../templates/themes/${xtConfig.styling.theme}.css`)

    return <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
    >{children}</ThemeProvider>
}
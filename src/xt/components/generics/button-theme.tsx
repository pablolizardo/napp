"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/xt/components/ui/button"

const ButtonTheme = () => {
    const { theme, setTheme } = useTheme()
    const handleSetTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

    return <Button
        onClick={handleSetTheme}>
        {theme === 'dark' ? <Sun /> : <Moon />}
    </Button>

}

export default ButtonTheme
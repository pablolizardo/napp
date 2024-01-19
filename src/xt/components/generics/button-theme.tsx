'use client'
import { useTheme } from 'next-themes'
import { Button } from '../ui/button'

const ButtonTheme = () => {
    const { theme, setTheme } = useTheme()

    return (
        <div>
            {theme === 'dark' ? <Button onClick={() => setTheme('light')}>Light Mode</Button> :
                <Button onClick={() => setTheme('dark')}>Dark Mode</Button>}

        </div>
    )
}

export default ButtonTheme
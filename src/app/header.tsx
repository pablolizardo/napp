import { getPagesInFolder } from "@/xt/server-actions/pages"
import { desanitizeSlug } from "@/xt/lib/url"
import Link from "next/link"
import { Button } from "@/xt/components/ui/button"
import { Cog, Home } from "lucide-react"
import ButtonTheme from "@/xt/components/generics/button-theme"

const Header = async () => {
    const pages = await getPagesInFolder()
    return <header >
        <nav className="p-3 justify-center flex gap-2 flex-wrap" >
            <Link href={'/'}><Button><Home /></Button></Link>
            {pages.map(page => <Link href={page} key={page}>
                <Button className="capitalize">
                    {desanitizeSlug(page)}
                </Button>
            </Link>)}
            <Link href={'/create-pages'}><Button className="gap-3"><Cog /> Admin</Button></Link>
            <ButtonTheme />
        </nav>
    </header>
}

export default Header
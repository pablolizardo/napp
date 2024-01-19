import { getPagesInFolder } from "@/xt/server-actions/pages"
import { desanitizeSlug } from "@/xt/utils/url"
import Link from "next/link"

const Header = async () => {
    const pages = await getPagesInFolder()
    return <header >
        <nav className="p-3 justify-center flex gap-2 flex-wrap" >
            <Link href={'/'}><Button>/</Button></Link>
            {pages.map(page => <Link href={page} key={page}>
                <Button className="capitalize">
                    {desanitizeSlug(page)}
                </Button>
            </Link>)}
            <Link href={'/create-pages'}><Button>⚙︎</Button></Link>
        </nav>
    </header>
}

export default Header
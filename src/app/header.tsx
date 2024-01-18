import { getPagesInFolder } from "@/server-actions/pages"
import Link from "next/link"

const Header = async () => {
    const pages = await getPagesInFolder()
    return <header >
        <nav className="p-3 justify-center flex gap-2">
            <Link href={'/'}><button>Home</button></Link>
            {pages.map(page => <Link href={page} key={page}><button>{page}</button></Link>)}
        </nav>

    </header>
}

export default Header
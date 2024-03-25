import xtConfig from "@/xt/lib/config"
import { Button } from "@/xt/components/ui/button"
import { TypographyLarge, TypographySmall } from "@/xt/components/ui/typography"
import { xtGap } from "@/xt/lib/styling"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

const Footer = () => <footer className="flex justify-between  p-10 items-center" style={xtGap}>
    <aside className="">
        <TypographyLarge>{xtConfig.appName}</TypographyLarge>
        <TypographySmall className="text-muted-foreground">Copyright © 2024 - All right reserved</TypographySmall>
    </aside>
    <nav className="flex" style={xtGap}>
        <Button size={'icon'} variant={'ghost'}><a href="#"><Twitter /> </a></Button>
        <Button size={'icon'} variant={'ghost'}><a href="#"><Youtube /> </a></Button>
        <Button size={'icon'} variant={'ghost'}><a href="#"><Facebook /> </a></Button>
        <Button size={'icon'} variant={'ghost'}><a href="#"><Instagram /> </a></Button>

    </nav>
</footer>

export default Footer
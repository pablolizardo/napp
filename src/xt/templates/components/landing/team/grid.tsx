import { TypographyH2, TypographyLarge, TypographyMuted } from "@/xt/components/ui/typography"
import { xtGap, xtSectionGap } from "@/xt/lib/styling"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

/* eslint-disable @next/next/no-img-element */
const Team = () => {
    return <section id="team" style={xtSectionGap}>

        <TypographyH2>Our <strong>Team</strong></TypographyH2>
        <TypographyLarge className="mx-auto mb-10">Aliquip officia officia ad occaecat nostrud nostrud ad minim ipsum.</TypographyLarge>
        <div className="flex flex-wrap flex-row  justify-around">
            <div>
                <div className="relative overflow-hidden px-6">
                    <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png" className="max-w-full h-auto mx-auto rounded-full bg-muted-foreground grayscale" alt="title image" />
                </div>
                <div className="pt-6 text-center">
                    <p className="text-lg leading-normal font-bold mb-1">Joe Antonio</p>
                    <TypographyMuted>Founder CEO</TypographyMuted>

                    <div className="flex justify-center gap-2 py-3" >
                        <a className="hover:text-primary" aria-label="Twitter link" href="#"> <Twitter className="w-4 h-4" /> </a>
                        <a className="hover:text-primary" aria-label="Facebook link" href="#"> <Facebook className="w-4 h-4" /> </a>
                        <a className="hover:text-primary" aria-label="Instagram link" href="#"> <Instagram className="w-4 h-4" /> </a>
                        <a className="hover:text-primary" aria-label="Linkedin link" href="#"> <Linkedin className="w-4 h-4" /> </a>
                    </div>
                </div>
            </div>

            <div >
                <div className="relative overflow-hidden px-6">
                    <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar3.png" className="max-w-full h-auto mx-auto rounded-full bg-muted-foreground grayscale" alt="title image" />
                </div>
                <div className="pt-6 text-center">
                    <p className="text-lg leading-normal font-bold mb-1">Sarah Daeva</p>
                    <TypographyMuted>Marketing</TypographyMuted>

                    <div className="flex justify-center gap-2 py-3" >
                        <a className="hover:text-primary" aria-label="Twitter link" href="#"> <Twitter className="w-4 h-4" /> </a>
                        <a className="hover:text-primary" aria-label="Facebook link" href="#"> <Facebook className="w-4 h-4" /> </a>
                        <a className="hover:text-primary" aria-label="Instagram link" href="#"> <Instagram className="w-4 h-4" /> </a>
                        <a className="hover:text-primary" aria-label="Linkedin link" href="#"> <Linkedin className="w-4 h-4" /> </a>
                    </div>
                </div>
            </div>



            <div>
                <div className="relative overflow-hidden px-6">
                    <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar2.png" className="max-w-full h-auto mx-auto rounded-full bg-muted-foreground grayscale" alt="title image" />
                </div>
                <div className="pt-6 text-center">
                    <p className="text-lg leading-normal font-bold mb-1">Daniel Emo</p>
                    <TypographyMuted>Sales manager</TypographyMuted>

                    <div className="flex justify-center gap-2 py-3" >
                        <a className="hover:text-primary" aria-label="Twitter link" href="#"> <Twitter className="w-4 h-4" /> </a>
                        <a className="hover:text-primary" aria-label="Facebook link" href="#"> <Facebook className="w-4 h-4" /> </a>
                        <a className="hover:text-primary" aria-label="Instagram link" href="#"> <Instagram className="w-4 h-4" /> </a>
                        <a className="hover:text-primary" aria-label="Linkedin link" href="#"> <Linkedin className="w-4 h-4" /> </a>
                    </div>
                </div>
            </div>



            <div >
                <div className="relative overflow-hidden px-6">
                    <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar4.png" className="max-w-full h-auto mx-auto rounded-full bg-muted-foreground grayscale" alt="title image" />
                </div>
                <div className="pt-6 text-center">
                    <p className="text-lg leading-normal font-bold mb-1">Toni Lana</p>
                    <TypographyMuted>UI/UX Designer</TypographyMuted>

                    <div className="flex justify-center gap-2 py-3" >
                        <a className="hover:text-primary" aria-label="Twitter link" href="#"> <Twitter className="w-4 h-4" /> </a>
                        <a className="hover:text-primary" aria-label="Facebook link" href="#"> <Facebook className="w-4 h-4" /> </a>
                        <a className="hover:text-primary" aria-label="Instagram link" href="#"> <Instagram className="w-4 h-4" /> </a>
                        <a className="hover:text-primary" aria-label="Linkedin link" href="#"> <Linkedin className="w-4 h-4" /> </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default Team
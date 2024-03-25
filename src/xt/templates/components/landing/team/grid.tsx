import { TypographyH2, TypographyLarge, TypographyMuted } from "@/xt/components/ui/typography";
import xtConfig from "@/xt/lib/config";
import { xtGap } from "@/xt/lib/styling";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
const Team = () => {
    const socialLinks = [
        { url: '#', icon: <Twitter className="w-4 h-4" /> },
        { url: '#', icon: <Facebook className="w-4 h-4" /> },
        { url: '#', icon: <Instagram className="w-4 h-4" /> },
        { url: '#', icon: <Linkedin className="w-4 h-4" /> },
    ];
    return <section id="team" style={xtGap}>

        <TypographyH2>Our <strong>Team</strong></TypographyH2>
        <TypographyLarge className="mx-auto mb-10">Aliquip officia officia ad occaecat nostrud nostrud ad minim ipsum.</TypographyLarge>
        <div className="flex flex-wrap flex-row  justify-around" style={xtGap}>
            {xtConfig.content.team.map((member, index) => (
                <div key={member.name}>
                    <div className="relative overflow-hidden aspect-square bg-primary/60 rounded-full">
                        <img src={member.avatar} className="max-w-full h-auto mx-auto rounded-full  grayscale" alt={`${member.name}'s avatar`} />
                    </div>
                    <div className="pt-6 text-center">
                        <p className="text-lg leading-normal font-bold mb-1">{member.name}</p>
                        <TypographyMuted className="text-primary">{member.role}</TypographyMuted>

                        <div className="flex justify-center gap-2 py-3">
                            {socialLinks.map((link, index) => (
                                <a key={index} className="hover:text-primary" aria-label={`${member.name}'s social link`} href={link.url}>
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>))}
        </div>
    </section>
}
export default Team
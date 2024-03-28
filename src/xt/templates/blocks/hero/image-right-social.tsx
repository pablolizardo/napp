import { Button } from "@/xt/components/ui/button";
import { TypographyH1, TypographyLarge } from "@/xt/components/ui/typography";
import xtConfig from "@/xt/lib/config";
import { xtGap, xtRounded } from "@/xt/lib/styling";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import SocialLinks from "../../components/common/social-links";

/* eslint-disable @next/next/no-img-element */
const Hero = () => {
  return (
    <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
      <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24" style={xtGap}>
        <TypographyLarge className="text-primary">{xtConfig.appName}</TypographyLarge>

        <TypographyH1>{xtConfig.appDescription}</TypographyH1>

        <div className="flex justify-start" style={xtGap}>
          <Button size={"lg"} variant={"default"}>
            {xtConfig.appCTAlabel}
          </Button>
          <Button size={"lg"} variant={"secondary"}>
            Take tour
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4 lg:justify-start mt-32">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/60 sm:text-base">Social</span>
          <span className="h-px w-12 bg-muted"></span>

          <div className="flex gap-4 text-muted-foreground/60">
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className="h-48 overflow-hidden  bg-gray-100 shadow-lg lg:h-auto xl:w-5/12" style={xtRounded}>
        <img
          src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000"
          loading="lazy"
          alt="Photo by Fakurian Design"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default Hero;

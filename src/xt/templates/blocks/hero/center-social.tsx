import { Button } from "@/xt/components/ui/button";
import { TypographyH1, TypographyLarge } from "@/xt/components/ui/typography";
import xtConfig from "@/xt/lib/config";
import { xtGap } from "@/xt/lib/styling";
import { Github, Instagram, Linkedin, Package, Twitter } from "lucide-react";
import SocialLinks from "../../components/common/social-links";

/* eslint-disable @next/next/no-img-element */
const Hero = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="flex max-w-xl flex-col items-center pb-16 pt-8 text-center lg:pb-48 lg:pt-32" style={xtGap}>
        <TypographyLarge className="text-primary">{xtConfig.appName}</TypographyLarge>

        <TypographyH1>{xtConfig.appDescription}</TypographyH1>

        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <Button size={"lg"} variant={"default"}>
            {xtConfig.appCTAlabel}
          </Button>
          <Button size={"lg"} variant={"secondary"}>
            Take tour
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 lg:justify-start">
        <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/60 sm:text-base">Social</span>
        <span className="h-px w-12 bg-muted"></span>

        <div className="flex gap-4 text-muted-foreground/60">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Hero;

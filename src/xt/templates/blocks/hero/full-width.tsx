import { Button } from "@/xt/components/ui/button";
import { TypographyH1, TypographyLarge } from "@/xt/components/ui/typography";
import xtConfig from "@/xt/lib/config";
import { xtGap, xtRounded } from "@/xt/lib/styling";

/* eslint-disable @next/next/no-img-element */
const Hero = () => {
  return (
    <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden  bg-muted py-16 shadow-lg md:py-20 xl:py-48 w-full" style={xtRounded}>
      <img
        src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500"
        loading="lazy"
        alt="Photo by Fakurian Design"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-primary mix-blend-multiply"></div>

      <div className="relative flex flex-col items-center p-4 sm:max-w-xl" style={xtGap}>
        <TypographyLarge className="text-background">{xtConfig.appDescription}</TypographyLarge>
        <TypographyH1>{xtConfig.appName}</TypographyH1>

        <div className="flex w-full flex-col sm:flex-row sm:justify-center" style={xtGap}>
          <Button size={"lg"} variant={"default"}>
            {xtConfig.appCTAlabel}
          </Button>
          <Button size={"lg"} variant={"secondary"}>
            Take tour
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

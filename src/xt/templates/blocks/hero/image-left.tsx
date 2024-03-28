import { Button } from "@/xt/components/ui/button";
import { TypographyH1, TypographyLarge } from "@/xt/components/ui/typography";
import xtConfig from "@/xt/lib/config";
import { xtGap } from "@/xt/lib/styling";

/* eslint-disable @next/next/no-img-element */
const Hero = () => {
  return (
    <div className="  container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
        <img className="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000" loading="lazy" />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center" style={xtGap}>
        <TypographyH1>{xtConfig.appName} </TypographyH1>
        <TypographyLarge>{xtConfig.appDescription}</TypographyLarge>
        <div className="flex justify-center" style={xtGap}>
          <Button size={"lg"} variant={"default"}>
            {xtConfig.appCTAlabel}
          </Button>
          <Button size={"lg"} variant={"secondary"}>
            Take tour
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

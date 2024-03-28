import { Button } from "@/xt/components/ui/button";
import { TypographyH1, TypographyLarge } from "@/xt/components/ui/typography";
import xtConfig from "@/xt/lib/config";
import { xtGap, xtRounded } from "@/xt/lib/styling";

/* eslint-disable @next/next/no-img-element */
const Hero = () => {
  return (
    <section className="container mx-auto flex px-5 py-24 items-center justify-center flex-col text-center">
      <img
        className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center "
        src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000"
        loading="lazy"
        alt="Photo by Fakurian Design"
        style={xtRounded}
      />
      <div className="text-center lg:w-2/3 w-full flex flex-col items-center" style={xtGap}>
        {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{xtConfig.appName}</h1> */}
        {/* <p className="leading-relaxed mb-8">{xtConfig.appDescription}</p> */}
        <TypographyLarge>{xtConfig.appDescription}</TypographyLarge>
        <TypographyH1 className="text-primary ">{xtConfig.appName}</TypographyH1>

        <div className="flex justify-center" style={xtGap}>
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

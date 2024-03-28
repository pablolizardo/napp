import { Button } from "@/xt/components/ui/button";
import { TypographyH1, TypographyLarge } from "@/xt/components/ui/typography";
import xtConfig from "@/xt/lib/config";
import { xtGap } from "@/xt/lib/styling";

const Hero = () => {
  return (
    <div className=" mx-auto text-center flex flex-col items-center" style={xtGap}>
      <TypographyH1 className="text-4xl font-bold mb-4">{xtConfig.appName}</TypographyH1>
      <TypographyLarge>{xtConfig.appDescription}</TypographyLarge>
      <Button variant={"default"} size={"lg"}>
        {xtConfig.appCTAlabel}
      </Button>
    </div>
  );
};

export default Hero;

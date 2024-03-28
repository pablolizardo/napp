//@xt-use-client

import { Badge } from "@/xt/components/ui/badge";
import { Button } from "@/xt/components/ui/button";
import { TypographyH1, TypographyLarge } from "@/xt/components/ui/typography";
import xtConfig from "@/xt/lib/config";
import { xtGap } from "@/xt/lib/styling";
import { Github } from "lucide-react";
//@xt-imports

//@xt-fetch-outside

const Page = () => {
  //@xt-fetch-inside

  return (
    <section className="mx-auto flex max-w-[980px] flex-col items-center  gap-2" style={xtGap}>
      <Badge className="text-sm font-medium gap-2" variant={"secondary"}>
        🎉
        <span className="sm:hidden">New components and more.</span>
        <span className="hidden sm:inline"> New components, cli updates and more. </span>→
      </Badge>
      <TypographyH1>{xtConfig.appName}</TypographyH1>
      <TypographyLarge>{xtConfig.appDescription}</TypographyLarge>

      <div className="flex w-full items-center justify-center  py-4 md:pb-10" style={xtGap}>
        <Button asChild variant={"default"} size={"lg"}>
          <a href="/docs"> {xtConfig.appCTAlabel} </a>
        </Button>
        <Button asChild variant={"outline"} size={"lg"} className="font-medium ">
          <a href="/docs">
            <Github className="w-4 h-4" /> GitHub
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Page;

import { Button } from "@/xt/components/ui/button";
import { TypographyH4, TypographyP } from "@/xt/components/ui/typography";
import xtConfig from "@/xt/lib/config";
import { xtGap } from "@/xt/lib/styling";
import { ArrowRight, CircleCheck } from "lucide-react";

const Features = () => {
  return (
    <section className="container px-5 py-24 mx-auto">
      {xtConfig.content.features.slice(0, 3).map((feature, index) => {
        return (
          <div
            className={`flex items-center lg:w-3/5 mx-auto last-of-type:border-none border-b pb-10 mb-10 border-muted `}
            style={{
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              gap: xtGap.gap,
            }}
            key={feature.title}
          >
            <div className="hidden sm:w-32 sm:h-32 h-20 w-20  sm:inline-flex items-center justify-center rounded-full bg-primary/20 text-primary flex-shrink-0">
              <CircleCheck className="sm:w-16 sm:h-16 w-10 h-10" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <TypographyH4>{feature.title}</TypographyH4>
              <TypographyP className="text-muted-foreground text-pretty">{feature.content}</TypographyP>
              <Button variant={"link"}>
                Learn More
                <ArrowRight className="ml-2 w-4" />
              </Button>
            </div>
          </div>
        );
      })}

      <Button asChild variant={"outline"}>
        <a href="/docs"> {xtConfig.appCTAlabel} </a>
      </Button>
    </section>
  );
};

export default Features;

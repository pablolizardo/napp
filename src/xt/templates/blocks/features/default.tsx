import { TypographyH2, TypographyLarge, TypographyP } from "@/xt/components/ui/typography";
import xtConfig from "@/xt/lib/config";
import { CircleCheck, Trash } from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-left">
      <div className="max-w-screen-md mb-8 lg:mb-16 text-center  mx-auto">
        <TypographyH2 className="tracking-tight ">Features</TypographyH2>
        <TypographyLarge>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</TypographyLarge>
      </div>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        {xtConfig.content.features.map((feature) => {
          return (
            <div key={feature.title}>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <CircleCheck className="w-10 h-10 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold ">{feature.title}</h3>
              <p className="text-muted-foreground ">{feature.content}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;

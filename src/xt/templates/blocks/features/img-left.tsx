import xtConfig from "@/xt/lib/config";
import { xtGap, xtRounded } from "@/xt/lib/styling";
import { CircleCheck } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
const Features = () => {
  return (
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full mb-10 lg:mb-0  overflow-hidden" style={xtRounded}>
        <img alt="feature" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000" loading="lazy" />
      </div>
      <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center" style={xtGap}>
        {xtConfig.content.features.slice(0, 3).map((feature) => {
          return (
            <div key={feature.title}>
              <div className="flex justify-center bg-primary/10 items-center mb-4 w-10 h-10 rounded-full  lg:h-12 lg:w-12 dark:bg-primary-900">
                <CircleCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold ">{feature.title}</h3>
              <p className="text-muted-foreground ">{feature.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;

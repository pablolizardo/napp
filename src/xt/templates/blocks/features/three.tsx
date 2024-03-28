import { Button } from "@/xt/components/ui/button";
import { TypographyH2, TypographyH4, TypographyP } from "@/xt/components/ui/typography";
import { ArrowRight } from "lucide-react";

const Features = () => {
  return (
    <div className="container px-5 py-24 mx-auto">
      <TypographyH2 className="mb-10">Features</TypographyH2>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 text-left">
        <div className="p-4 md:w-1/3 flex">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mb-4 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow pl-6">
            <TypographyH4>Shooting Stars</TypographyH4>
            <TypographyP className="mb-4">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.
            </TypographyP>
            <Button variant={"link"}>
              Learn More
              <ArrowRight className="ml-2 w-4" />
            </Button>
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mb-4 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
          <div className="flex-grow pl-6">
            <TypographyH4>The Catalyzer</TypographyH4>
            <TypographyP className="mb-4">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.
            </TypographyP>
            <Button variant={"link"}>
              Learn More
              <ArrowRight className="ml-2 w-4" />
            </Button>
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mb-4 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow pl-6">
            <TypographyH4>Neptune</TypographyH4>
            <TypographyP className="mb-4">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.
            </TypographyP>
            <Button variant={"link"}>
              Learn More
              <ArrowRight className="ml-2 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

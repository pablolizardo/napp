import { Button } from "@/xt/components/ui/button";
import { TypographyH2, TypographyH4, TypographyP } from "@/xt/components/ui/typography";
import { ArrowRight } from "lucide-react";

const Features = () => {
    return (<div className="container px-5 py-24 mx-auto flex flex-wrap text-left">
        <TypographyH2 className="mb-10">Features</TypographyH2>

        <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2 md:w-full">
                <div className="flex border-2 rounded-lg border-primary/20 p-8 sm:flex-row flex-col">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>
                    <div className="flex-grow">
                        <TypographyH4>Neptune</TypographyH4>
                        <TypographyP className="mb-4">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</TypographyP>

                        <Button variant={'link'}>Learn More
                            <ArrowRight className="ml-2 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="p-4 lg:w-1/2 md:w-full">
                <div className="flex border-2 rounded-lg border-primary/20 p-8 sm:flex-row flex-col">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <div className="flex-grow">
                        <TypographyH4>Neptune</TypographyH4>
                        <TypographyP className="mb-4">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</TypographyP>

                        <Button variant={'link'}>Learn More
                            <ArrowRight className="ml-2 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Features;
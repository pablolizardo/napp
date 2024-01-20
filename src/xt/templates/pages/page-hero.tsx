import { Badge } from "@/xt/components/ui/badge";
import { Button } from "@/xt/components/ui/button";
import { TypographyH1, TypographyLarge } from "@/xt/components/ui/typography";
import { Github } from "lucide-react";

const Page = () => {
    return (
        <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
            <Badge className="text-sm font-medium gap-2" variant={'secondary'}>
                🎉
                <span className="sm:hidden">New components and more.</span>
                <span className="hidden sm:inline">
                    New components, cli updates and more.
                </span>
                →
            </Badge>
            <TypographyH1>
                Get smarter with $title
            </TypographyH1>
            <TypographyLarge className="text-center">
                Beautifully designed components that you can copy and paste into your
                apps. Accessible. Customizable. Open Source.

            </TypographyLarge>

            <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
                <Button asChild variant={'default'} size={"sm"} >
                    <a href="/docs" > Get Started </a>
                </Button>
                <Button asChild variant={'outline'} size={"sm"} className="font-medium gap-2" >
                    <a href="/docs" > <Github className="w-4 h-4" /> GitHub </a>
                </Button>

            </div>
        </section>
    );
};

export default Page;

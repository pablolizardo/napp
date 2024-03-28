import { Button } from "@/xt/components/ui/button";
import { TypographyH2, TypographyLarge } from "@/xt/components/ui/typography";
import { xtGap } from "@/xt/lib/styling";
import { CheckCircle } from "lucide-react";

const Featues = () => {
    return (<div className="container px-5 py-24 mx-auto flex flex-col items-center" style={xtGap}>
        <div className="text-center flex items-center flex-col w-full">
            <TypographyH2>Features</TypographyH2>
            <TypographyLarge>Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</TypographyLarge>
        </div>
        <div className="flex flex-wrap w-full  my-10">
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <h2 className="font-medium title-font tracking-widest  mb-4 text-sm text-center sm:text-left">SHOOTING STARS</h2>
                <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2 [&>a]:flex [&>*>svg]:w-5 [&>*>svg]:mr-2 [&>*>svg]:text-primary">
                    <a> <CheckCircle /> First Link </a>
                    <a> <CheckCircle /> Second Link </a>
                    <a> <CheckCircle /> Third Link </a>
                    <a> <CheckCircle /> Fourth Link </a>
                    <a> <CheckCircle /> Fifth Link </a>
                </nav>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <h2 className="font-medium title-font tracking-widest  mb-4 text-sm text-center sm:text-left">THE 400 BLOWS</h2>
                <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2 [&>a]:flex [&>*>svg]:w-5 [&>*>svg]:mr-2 [&>*>svg]:text-primary">
                    <a> <CheckCircle /> First Link </a>
                    <a> <CheckCircle /> Second Link </a>
                    <a> <CheckCircle /> Third Link </a>
                    <a> <CheckCircle /> Fourth Link </a>
                    <a> <CheckCircle /> Fifth Link </a>
                </nav>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <h2 className="font-medium title-font tracking-widest  mb-4 text-sm text-center sm:text-left">THE CATALYZER</h2>
                <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2 [&>a]:flex [&>*>svg]:w-5 [&>*>svg]:mr-2 [&>*>svg]:text-primary">
                    <a> <CheckCircle /> First Link </a>
                    <a> <CheckCircle /> Second Link </a>
                    <a> <CheckCircle /> Third Link </a>
                    <a> <CheckCircle /> Fourth Link </a>
                    <a> <CheckCircle /> Fifth Link </a>
                </nav>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <h2 className="font-medium title-font tracking-widest  mb-4 text-sm text-center sm:text-left">NEPTUNE</h2>
                <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2 [&>a]:flex [&>*>svg]:w-5 [&>*>svg]:mr-2 [&>*>svg]:text-primary">
                    <a> <CheckCircle /> First Link </a>
                    <a> <CheckCircle /> Second Link </a>
                    <a> <CheckCircle /> Third Link </a>
                    <a> <CheckCircle /> Fourth Link </a>
                    <a> <CheckCircle /> Fifth Link </a>
                </nav>
            </div>
        </div>
        <Button asChild variant={'default'} size={"lg"} >
            <a href="/docs" > Get Started </a>
        </Button>
    </div>
    );
}

export default Featues;
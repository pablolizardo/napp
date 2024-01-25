import { Avatar, AvatarFallback, AvatarImage } from "@/xt/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/xt/components/ui/card";
import { TypographyH2, TypographyLarge } from "@/xt/components/ui/typography";
import xtConfig from "@/xt/lib/config";
import { xtGap, xtSectionGap } from "@/xt/lib/styling";

/* eslint-disable @next/next/no-img-element */
const Testimonials = () => {

    return (
        <section className="w-full max-w-6xl mx-auto" style={xtSectionGap}>
            <div>
                <TypographyH2 > What people are saying. </TypographyH2>
                <TypographyLarge className="mx-auto"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </TypographyLarge>
                <div className="text-center my-10 flex  justify-center" style={xtGap}>
                    <span className="inline-block w-1 h-1 rounded-full bg-primary ml-1"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-primary ml-1"></span>
                    <span className="inline-block w-40 h-1 rounded-full bg-primary"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-primary ml-1"></span>
                    <span className="inline-block w-1 h-1 rounded-full bg-primary ml-1"></span>
                </div>
            </div>
            <div className="grid md:grid-cols-3 " style={xtGap}>
                <div className="grid " style={xtGap}>
                    {xtConfig.content.testimonials
                        .slice(0, 2)
                        .map(testimonial => <CardComponent key={testimonial.name} name={testimonial.name} image={testimonial.image} description={testimonial.description} />)}
                </div>
                <div className="grid gap-3">
                    {xtConfig.content.testimonials
                        .slice(2, 4)
                        .map(testimonial => <CardComponent key={testimonial.name} name={testimonial.name} image={testimonial.image} description={testimonial.description} />)}
                </div>
                <div className="grid gap-3">
                    {xtConfig.content.testimonials
                        .slice(4, 6)
                        .map(testimonial => <CardComponent key={testimonial.name} name={testimonial.name} image={testimonial.image} description={testimonial.description} />)}
                </div >
            </div >
        </section >
    );
};

export default Testimonials

const CardComponent = ({ name, image, description }: any) => (
    <Card>
        <CardHeader className="flex items-center justify-start" style={xtGap}>
            <CardTitle>
                <Avatar>
                    <AvatarFallback>XT</AvatarFallback>
                    <AvatarImage src={image} alt={name} />
                </Avatar>
            </CardTitle>
            <CardDescription>{name}</CardDescription>
        </CardHeader>
        <CardContent>{description}</CardContent>
    </Card>
);
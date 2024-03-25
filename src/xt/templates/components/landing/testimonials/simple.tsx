import { TypographyH2, TypographyLarge, TypographyMuted } from "@/xt/components/ui/typography";
import xtConfig from "@/xt/lib/config";
import { xtGap } from "@/xt/lib/styling";

const Testimonials = () => {

    return <section className="grid justify-center " style={xtGap}>
        <TypographyH2>Testimonials</TypographyH2>
        <TypographyLarge>Nulla nisi enim tempor proident do laborum cupidatat mollit nulla nisi.</TypographyLarge>

        <div style={xtGap} className="grid md:grid-cols-2 max-w-2xl mx-auto my-10">
            {xtConfig.content.testimonials
                .slice(0, 2)
                .map(testimonial => <>
                    <article className="" key={testimonial.name} >
                        <q>
                            {testimonial.description}
                        </q>
                        <TypographyMuted>- {testimonial.name}</TypographyMuted>
                    </article>
                </>)}
        </div>

    </section>;
}
export default Testimonials

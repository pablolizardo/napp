import { TypographyH2, TypographyLarge, TypographyMuted } from "@/xt/components/ui/typography";
import { xtGap } from "@/xt/lib/styling";

const Testimonials = () => {

    return <section className="grid justify-center " style={xtGap}>
        <TypographyH2>Testimonials</TypographyH2>
        <TypographyLarge>Nulla nisi enim tempor proident do laborum cupidatat mollit nulla nisi.</TypographyLarge>

        <div style={xtGap} className="grid md:grid-cols-2 max-w-2xl mx-auto my-10">
            <article className="">
                <q>
                    I had an amazing experience with this service. The team was incredibly helpful and responsive.
                </q>
                <TypographyMuted>- John Doe</TypographyMuted>
            </article>

            <article>
                <q>
                    The product exceeded my expectations. I highly recommend it to anyone looking for quality solutions.
                </q>
                <TypographyMuted>- Jane Smith</TypographyMuted>
            </article>


        </div>

    </section>;
}
export default Testimonials

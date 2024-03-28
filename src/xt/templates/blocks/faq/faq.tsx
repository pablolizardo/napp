//@xt-use-client
//@xt-imports
//@xt-fetch-outside

import { TypographyH2, TypographyH3, TypographyLead, TypographyP, TypographySmall } from "@/xt/components/ui/typography";


const Page = () => {
    //@xt-fetch-inside
    return <div>
        <TypographyH3>Frequently Asked Questions (FAQ)</TypographyH3>

        <section className="flex flex-col gap-3 mt-10" >
            <TypographyP className="text-muted-foreground">How do I create an account?</TypographyP>
            <TypographySmall>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod eu justo a commodo.</TypographySmall>
            <TypographyP className="text-muted-foreground">What payment methods do you accept?</TypographyP>
            <TypographySmall>Our platform currently accepts credit cards, PayPal, and bank transfers as payment methods.</TypographySmall>
            <TypographyP className="text-muted-foreground">Can I cancel my subscription at any time?</TypographyP>
            <TypographySmall>Yes, you can cancel your subscription at any time from your account settings.</TypographySmall>


        </section>
    </div>;
}
export default Page



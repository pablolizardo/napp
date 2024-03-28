
//@xt-use-client
//@xt-imports
//@xt-fetch-outside

import { Button } from "@/xt/components/ui/button";
import { Input } from "@/xt/components/ui/input";
import { Textarea } from "@/xt/components/ui/textarea";
import { TypographyH1, TypographyLarge } from "@/xt/components/ui/typography";
import xtConfig from "@/xt/lib/config";
import { xtGap } from "@/xt/lib/styling";

const Page = () => {
    //@xt-fetch-inside
    return <section className="p-3 mx-auto max-w-6xl flex flex-col ">
        <TypographyH1>Contact Us</TypographyH1>
        <TypographyLarge>
            {xtConfig.appDescription}
        </TypographyLarge>

        <form action="#" method="post" className="grid grid-cols-[max-content_1fr] " style={xtGap}>
            <label htmlFor="name">Name</label>
            <Input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <Input type="email" id="email" name="email" required />

            <label htmlFor="message">Message </label>
            <Textarea id="message" name="message" rows={4} required />

            <Button variant={'default'} className="col-span-2">Submit</Button>

        </form>

        <section id="contact-info">
            <h2>Contact Information</h2>
            <p>Email: info@example.com</p>
            <p>Phone: +1 123-456-7890</p>
            <p>Address: 123 Main Street, Cityville</p>
        </section>

    </section>;
}
export default Page
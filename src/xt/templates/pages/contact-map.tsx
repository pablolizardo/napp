import { Button } from "@/xt/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/xt/components/ui/card"
import { Input } from "@/xt/components/ui/input"
import { Textarea } from "@/xt/components/ui/textarea"
import { TypographySmall } from "@/xt/components/ui/typography"

const Contact = () => {
    return <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="absolute inset-0 bg-gray-900">
            <iframe title="map" width="100%" height="100%" style={{ filter: `grayscale(1) contrast(1.2) opacity(0.16)` }} frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex ">
            <Card className="lg:w-1/3 md:w-1/2 md:ml-auto w-full mt-10 md:mt-0 relative z-10">
                <CardHeader>

                    <CardTitle >Feedback</CardTitle>

                    <CardDescription >Post-ironic portland shabby chic echo park, banjo fashion axe</CardDescription>
                </CardHeader>
                <CardContent>

                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                        <Input type="email" id="email" name="email" placeholder="Email" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
                        <Textarea id="message" name="message" ></Textarea>
                    </div>
                </CardContent>
                <CardFooter className="flex-col">

                    <Button className="w-full" variant={'default'}>Button</Button>
                    <TypographySmall className="text-muted-foreground text-center mt-6 text-xs">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</TypographySmall>
                </CardFooter>
            </Card>
        </div>
    </section>
}

export default Contact
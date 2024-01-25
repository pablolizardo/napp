

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest 'error.js' Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


import xtConfig from "@/xt/lib/config";
import { Button } from "@/xt/components/ui/button";
import { TypographyH1, TypographyH2, TypographyLarge, TypographyMuted } from "@/xt/components/ui/typography";
import { xtGap } from "@/xt/lib/styling";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/xt/components/ui/card";
import { Check } from "lucide-react";

const Page = async () => {
  const data = await getData()
  return (
    <div className="p-3 mx-auto max-w-6xl flex flex-col " style={xtGap}>
      <header>
        <TypographyH1>Pricing</TypographyH1>
        <TypographyLarge>{xtConfig.appDescription}</TypographyLarge>
      </header>

      <section className="grid md:grid-cols-3 " style={xtGap}>
        {xtConfig.content.pricing.map((plan) => {
          return (
            <Card key={plan.title} className="justify-between flex flex-col">
              <CardHeader>
                <CardTitle>{plan.title}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="items-center flex flex-col mt-auto">
                <TypographyH2 className="">${plan.price} </TypographyH2>
                <TypographyMuted>/${plan.subscription}</TypographyMuted>
              </CardContent>
              <CardFooter>
                <Button className="w-full " variant={'default'}><Check /> Pick</Button>
              </CardFooter>
            </Card>
          );
        })}
      </section>
    </div>
  );
};
export default Page;

//@xt-use-client
//@xt-imports
//@xt-fetch-outside

import xtConfig from "@/xt/lib/config";
import { Button } from "@/xt/components/ui/button";
import { TypographyH1, TypographyH2, TypographyLarge, TypographyMuted } from "@/xt/components/ui/typography";
import { xtGap } from "@/xt/lib/styling";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/xt/components/ui/card";
import { Check } from "lucide-react";

const Page = () => {
  //@xt-fetch-inside
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

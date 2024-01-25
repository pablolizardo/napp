//@xt-use-client
//@xt-imports
//@xt-fetch-outside

import xtConfig from "@/xt/lib/config";
import { Button } from "@/xt/components/ui/button";
import { TypographyH1, TypographyLarge } from "@/xt/components/ui/typography";

const Page = () => {
  //@xt-fetch-inside
  return (
    <div>
      <header>
        <TypographyH1>Pricing</TypographyH1>
        <TypographyLarge>{xtConfig.appDescription}</TypographyLarge>
      </header>

      <section>
        {xtConfig.content.pricing.map((plan) => {
          return (
            <div key={plan.title} className="pricing-plan">
              <h2>{plan.title}</h2>
              <p>{plan.description}</p>
              <p>
                Precio: ${plan.price}/${plan.subscription}
              </p>
              <Button>Seleccionar</Button>
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default Page;

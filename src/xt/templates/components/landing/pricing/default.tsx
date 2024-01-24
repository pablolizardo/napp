import { Button } from "@/xt/components/ui/button";
import {
  TypographyH2,
  TypographyLarge,
  TypographySmall,
} from "@/xt/components/ui/typography";
import { xtSectionGap } from "@/xt/lib/styling";
import { Check } from "lucide-react";

const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];

export default function Example() {
  return (
    <div style={xtSectionGap}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <TypographyH2>Simple no-tricks pricing</TypographyH2>
          <TypographyLarge>
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
          </TypographyLarge>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl border-4 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-muted-foreground">
              Lifetime membership
            </h3>
            <p className="mt-6 text-base leading-7 text-muted-foreground">
              Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque
              amet indis perferendis blanditiis repellendus etur quidem
              assumenda.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-primary">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-primary" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-muted-foreground sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <Check
                    className="h-6 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-card py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8 grid gap-2">
                <p className="text-base font-semibold text-primary">
                  Pay once, own it forever
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight ">
                    $349
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                    USD
                  </span>
                </p>
                <Button variant={"default"}> Get access </Button>

                <TypographySmall className="text-muted-foreground leading-snug">
                  Invoices and receipts available for easy company reimbursement
                </TypographySmall>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

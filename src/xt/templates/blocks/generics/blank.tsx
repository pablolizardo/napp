//@xt-use-client

import { TypographyH1, TypographyLarge } from "@/xt/components/ui/typography";
import xtConfig from "@/xt/lib/config";

//@xt-imports
//@xt-fetch-outside

const Page = () => {
    //@xt-fetch-inside

    return <section className="mx-auto max-w-7xl p-3 flex flex-col gap-3">
        <TypographyH1>
            {xtConfig.appName}
        </TypographyH1>
        <TypographyLarge>
            {xtConfig.appDescription}
        </TypographyLarge>
    </section>;
}
export default Page

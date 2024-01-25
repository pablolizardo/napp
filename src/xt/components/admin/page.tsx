import { getConfig } from "@/xt/utils/get-config";
import { getComponentsTemplates, getPagesTemplates } from "@/xt/utils/get-templates";
import { getThemes } from "@/xt/utils/get-themes";
import CardFeatures from "./card-features";
import CardLanding from "./card-landing";
import CardPages from "./card-pages";
import CardTheme from "./card-theme";
import CardTools from "./card-tools";
export default async function Home() {

  const config = await getConfig()
  const templates = await getPagesTemplates()
  const components = await getComponentsTemplates()
  const themes = await getThemes()
  console.log('templates', templates)
  console.log('components', components)
  console.log('themes', themes)
  return (
    <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl" >
      <div className=" items-start justify-center gap-6 rounded-lg p-8 grid sm:grid-cols-2 lg:grid-cols-3">
        <div className="grid gap-3">
          <CardPages config={config} templates={templates} />
          <CardLanding landingComponents={components} />
        </div>
        <div className="grid gap-3">
          {/* <CardTheme themes={themes} /> */}
          <CardFeatures />
        </div>
        <CardTools />
      </div>
    </div>
  );
}

import { getComponentsTemplates, getPagesTemplates } from "@/xt/_tmp/utils/get-templates";
import { getThemes } from "@/xt/_tmp/utils/get-themes";
import CardFeatures from "./card-features";
import CardLanding from "./card-landing";
import CardPages from "./card-pages";
import CardTools from "./card-tools";
export default async function Home() {

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
          <CardPages templates={templates} />
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

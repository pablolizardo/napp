import { getThemesNames } from "@/xt/server-actions/themes";
import { getTemplates } from "@/xt/templates/pages";
import CardPages from "./card-pages";
import CardTheme from "./card-theme";
import CardTools from "./card-tools";
import CardFeatures from "./card-features";

export default async function Home() {
  const templates = await getTemplates()
  const themes = await getThemesNames()
  return (
    <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl" >
      <div className=" items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
        <CardPages templates={templates} />
        <div className="grid gap-3">
          <CardTheme themes={themes} />
          <CardFeatures />
        </div>
        <CardTools />
      </div>
    </div>
  );
}

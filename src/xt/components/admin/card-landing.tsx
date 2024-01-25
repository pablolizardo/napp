import { Button } from "@/xt/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/xt/components/ui/card"
import { Label } from "@/xt/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/xt/components/ui/select"
import { handleSetLandingComponent } from "@/xt/_tmp/server-actions/landing"

const CardLanding = ({ landingComponents }: {
  landingComponents: {
    section: string;
    name: string;
  }[]
}) => {
  //@ts-ignore
  const sections = [...new Set(landingComponents.map(({ section }) => section))]

  // console.log(landingComponents)
  return <Card>
    <CardHeader>
      <CardTitle>Landing Components</CardTitle>
      <CardDescription>Choose which components should be visible in the landing page</CardDescription>
    </CardHeader>
    <CardContent >
      <form action={handleSetLandingComponent} className="grid gap-4 ">
        {sections.map(section => {
          return <div className="grid w-full items-center gap-1.5" key={section}>
            <Label className="capitalize" key={section}>{section}</Label>
            <input
              name="section" value={section} />
            <Select name="component">
              <SelectTrigger >
                <SelectValue placeholder='Componente' />
              </SelectTrigger>
              <SelectContent>
                {landingComponents
                  .filter(component => component.section === section)
                  .map(component =>
                    <SelectItem value={component.name} key={component.name}> {component.name}</SelectItem>
                  )}
              </SelectContent>
            </Select>
          </div>
        })}
        <Button >Apply</Button>
      </form>
    </CardContent>
  </Card>
}

export default CardLanding
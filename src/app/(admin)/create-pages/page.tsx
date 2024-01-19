import { Button } from "@/xt/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/xt/components/ui/card";
import { Input } from "@/xt/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/xt/components/ui/select";
import { handleAddPage, handleRemoveAllPages } from "@/xt/server-actions/pages";
import { getThemesNames, handleApplyTheme } from "@/xt/server-actions/themes";
import { getTemplates } from "@/xt/templates/pages";
import { Palette, Plus, Trash } from "lucide-react";

export default async function Home() {
  const templates = await getTemplates()
  const themeNames = await getThemesNames()
  return (
    <main className=" grid grid-cols-3  gap-10 p-10 ">
      <Card>
        <CardHeader>
          <CardTitle>New Page</CardTitle>
        </CardHeader>
        <CardContent >
          <form action={handleAddPage} className="grid gap-3">
            <Input name='name' placeholder="Page Name" />
            <Select name='template'>
              <SelectTrigger> <SelectValue placeholder='Template' /> </SelectTrigger>
              <SelectContent>
                {templates.map((name) => <SelectItem value={name.name} key={name.name}>{name.name}</SelectItem>)}
              </SelectContent>
            </Select>
            <div className="flex items-center space-x-2">
              <input name='loading' type="checkbox" id="loading" />
              <label htmlFor="loading" className="text-sm" > Loading State Page </label>
            </div>
            <div className="flex items-center space-x-2">
              <input name='error' type="checkbox" id="error" />
              <label htmlFor="error" className="text-sm" > Error Handling Page </label>
            </div>
            <Button variant={'default'} className="gap-3"><Plus /> Add Page</Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Theme</CardTitle>
        </CardHeader>
        <CardContent>

          <form action={handleApplyTheme} className="grid gap-3 justify-self-start">
            <Select name='theme'>
              <SelectTrigger> <SelectValue placeholder='Theme' /> </SelectTrigger>
              <SelectContent>
                {themeNames.map((name) => <SelectItem value={name} key={name}>{name}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select name='rounded'>
              <SelectTrigger> <SelectValue placeholder='Rounded' /> </SelectTrigger>
              <SelectContent>
                {[
                  { label: 'xl', value: '1rem' },
                  { label: 'md', value: '.75rem' },
                  { label: 'sm', value: '.5rem' },
                  { label: 'xs', value: '.25rem' },
                  { label: 'xxs', value: '.125rem' },
                  { label: 'none', value: '0rem' },
                ].map((rounded) => <SelectItem value={rounded.value} key={rounded.value}>{rounded.label}</SelectItem>)}
              </SelectContent>
            </Select>
            <Button className="gap-3" ><Palette /> Apply Theme</Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Utils</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={handleRemoveAllPages}>
            <Button variant={'destructive'} className="gap-3"><Trash /> All Pages</Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}

import { Button } from "@/xt/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/xt/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/xt/components/ui/select";
import { handleApplyTheme } from "@/xt/server-actions/themes";
import { Check, Palette } from "lucide-react";
const CardTheme = ({ themes }: { themes: string[] }) => {
    return <Card >
        <CardHeader>
            <CardTitle>Theme</CardTitle>
        </CardHeader>
        <CardContent>

            <form action={handleApplyTheme} className="grid gap-3 justify-self-start">
                <Select name='theme'>
                    <SelectTrigger> <SelectValue placeholder='Theme' /> </SelectTrigger>
                    <SelectContent>
                        {themes.map((name) => <SelectItem value={name} key={name}>{name}</SelectItem>)}
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
                <Button className="w-full"><Check className="w-4 h-4" /> Apply Theme</Button>
            </form>
        </CardContent>
    </Card>
}
export default CardTheme
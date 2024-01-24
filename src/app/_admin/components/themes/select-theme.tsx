'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/xt/components/ui/select";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import { handleApplyRounded, handleApplyTheme } from "@/xt/server-actions/themes";
import { Label } from "@/xt/components/ui/label";
import { TypographyMuted } from "@/xt/components/ui/typography";

const SelectTheme = ({ themes }: { themes: string[] }) => {
    return <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="Spacing">Theme</Label>

        <Select name='theme' onValueChange={handleApplyTheme}  >
            <SelectTrigger>
                <SelectValue placeholder='Theme' />
            </SelectTrigger>
            <SelectContent>
                {themes.map((name) => <SelectItem value={name} key={name}>{name}</SelectItem>)}
            </SelectContent>
        </Select>
        <TypographyMuted>This value will affect margins, paddings, spacing and gaps</TypographyMuted>
    </div>
}
export default SelectTheme
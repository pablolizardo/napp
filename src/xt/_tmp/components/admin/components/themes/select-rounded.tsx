'use client'

import { Label } from "@/xt/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/xt/components/ui/select";
import { TypographyMuted } from "@/xt/components/ui/typography";
import { handleApplyRounded } from "@/xt/_tmp/server-actions/themes";

const SelectRounded = () => {
    return <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="Spacing">Rounded</Label>
        <Select name='rounded' onValueChange={handleApplyRounded} >
            <SelectTrigger> <SelectValue placeholder='Rounded' /> </SelectTrigger>
            <SelectContent>
                {[
                    { label: 'xxl', value: '1.25rem' },
                    { label: 'xl', value: '1rem' },
                    { label: 'md', value: '.75rem' },
                    { label: 'sm', value: '.5rem' },
                    { label: 'xs', value: '.25rem' },
                    { label: 'xxs', value: '.125rem' },
                    { label: 'none', value: '0rem' },
                ].map((rounded) => <SelectItem value={rounded.value} key={rounded.value}>{rounded.label}</SelectItem>)}
            </SelectContent>
        </Select>
        <TypographyMuted>This value will affect margins, paddings, spacing and gaps</TypographyMuted>
    </div>
}
export default SelectRounded
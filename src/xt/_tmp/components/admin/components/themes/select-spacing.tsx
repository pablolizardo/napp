'use client'

import { Label } from "@/xt/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/xt/components/ui/select";
import { TypographyMuted } from "@/xt/components/ui/typography";
import { handleApplySpacing } from "@/xt/_tmp/server-actions/themes";

const SelectSpacing = () => {
    return <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="Spacing">Spacing</Label>
        <Select name='Spacing' onValueChange={handleApplySpacing} >
            <SelectTrigger> <SelectValue placeholder='Spacing' /> </SelectTrigger>
            <SelectContent>
                {[
                    { label: 'xxl', value: '1.25rem' },
                    { label: 'xl', value: '1rem' },
                    { label: 'md', value: '.75rem' },
                    { label: 'sm', value: '.5rem' },
                    { label: 'xs', value: '.25rem' },
                    { label: 'xxs', value: '.125rem' },
                    { label: 'none', value: '0rem' },
                ].map((item) => <SelectItem value={item.value} key={item.value}>{item.label}</SelectItem>)}
            </SelectContent>
        </Select>
        <TypographyMuted>Spacing scale is inherited by the padding, margin, width, minWidth, maxWidth, height, minHeight, maxHeight, gap, inset, space, translate, scrollMargin, and scrollPadding core plugins.</TypographyMuted>
    </div>
}
export default SelectSpacing
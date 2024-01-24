import { Card, CardContent, CardHeader, CardTitle } from "@/xt/components/ui/card";
import { PaletteIcon } from "lucide-react";
import SelectRounded from "./components/themes/select-rounded";
import SelectSpacing from "./components/themes/select-spacing";
import SelectTheme from "./components/themes/select-theme";
const CardTheme = ({ themes }: { themes: string[] }) => {
    return <Card >
        <CardHeader>
            <CardTitle className="flex gap-2"><PaletteIcon /> Appareance</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">

            <SelectTheme themes={themes} />
            <SelectRounded />
            <SelectSpacing />

        </CardContent>
    </Card>
}
export default CardTheme
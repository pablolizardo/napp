import xtConfig from "@/xt"
import { Button } from "@/xt/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/xt/components/ui/card"
import { Checkbox } from "@/xt/components/ui/checkbox"
import { Label } from "@/xt/components/ui/label"
import { handleUpdateFeatures } from "@/xt/server-actions/features"
import { Check } from "lucide-react"

const fetchXTConfig = async () => {
    return xtConfig
}

const CardFeatures = async () => {
    const config = await fetchXTConfig()
    return <form action={handleUpdateFeatures}>
        <Card>
            <CardHeader>
                <CardTitle>Features</CardTitle>
                <CardDescription>Add or remove key features for your app</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-[min-content_1fr_min-content_1fr] items-center gap-3">
                    {config.features.map(feature =>
                        <>
                            <Checkbox id={feature.name} defaultChecked={feature.active} name={feature.name} />
                            <Label htmlFor={feature.name}> {feature.label}</Label>
                        </>
                    )}

                </div>

            </CardContent>
            <CardFooter>
                <Button className="w-full"><Check className="w-4 h-4" /> Apply Features</Button>
            </CardFooter>
        </Card>
    </form>

}
export default CardFeatures
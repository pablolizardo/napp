
import { Button } from "@/xt/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/xt/components/ui/card";
import { applyConfig } from "@/xt/utils/apply-config";
import { handleRemoveAllPages } from "@/xt/server-actions/pages";
import { Check, Trash } from "lucide-react";

const CardTools = () => {
    return <Card>
        <CardHeader>
            <CardTitle>Tools</CardTitle>
        </CardHeader>
        <CardContent>
            <form action={handleRemoveAllPages}>
                <Button variant={'destructive'} className="gap-3"><Trash /> All Pages</Button>
            </form>
            <form action={applyConfig}>
                <Button className="gap-3"><Check /> Apply Config</Button>
            </form>
        </CardContent>
    </Card>
}

export default CardTools
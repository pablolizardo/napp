
import { Button } from "@/xt/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/xt/components/ui/card";
import { handleRemoveAllPages } from "@/xt/server-actions/pages";
import { Trash } from "lucide-react";

const CardTools = () => {
    return <Card>
        <CardHeader>
            <CardTitle>Utils</CardTitle>
        </CardHeader>
        <CardContent>
            <form action={handleRemoveAllPages}>
                <Button variant={'destructive'} className="gap-3"><Trash /> All Pages</Button>
            </form>
        </CardContent>
    </Card>
}

export default CardTools
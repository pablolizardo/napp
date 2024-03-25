import { Button } from "@/xt/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/xt/components/ui/card";
import { Input } from "@/xt/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/xt/components/ui/select";
import { handleAddPage } from "@/xt/_tmp/pages";
import { Plus } from "lucide-react";
import xtConfig from "@/xt/lib/config";

const CardPages = ({
  templates,
}: {
  templates: {
    name: string;
    filename: string;
  }[];
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>New Page</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={handleAddPage} className="grid gap-3">
          <Input name="name" placeholder={xtConfig.appName} required />
          <Select name="template" required defaultValue={"page-blank"}>
            <SelectTrigger>
              {" "}
              <SelectValue placeholder="Template" />{" "}
            </SelectTrigger>
            <SelectContent>
              {templates.map((name) => (
                <SelectItem value={name.name} key={name.name}>
                  {name.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex items-center space-x-2">
            <input name="loading" type="checkbox" id="loading" />
            <label htmlFor="loading" className="text-sm">
              {" "}
              Loading State Page{" "}
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input name="error" type="checkbox" id="error" />
            <label htmlFor="error" className="text-sm">
              {" "}
              Error Handling Page{" "}
            </label>
          </div>
          <Select name="fetchDataIn" required defaultValue={"server"}>
            <SelectTrigger>
              {" "}
              <SelectValue placeholder="Fetch data in" />{" "}
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"server"}>Server</SelectItem>
              <SelectItem value={"client"}>Client</SelectItem>
              <SelectItem value={"none"}>None</SelectItem>
            </SelectContent>
          </Select>
          <Input name="fetchDataFrom" placeholder="Fetch Data API" />
          <Button variant={"default"} className="gap-3">
            <Plus /> Add Page
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CardPages;

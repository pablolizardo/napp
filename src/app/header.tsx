import ThemeSwitcher from "@/xt/components/generics/theme-switcher";
import { Button } from "@/xt/components/ui/button";
import xtConfig from "@/xt/lib/config";
import { xtGap } from "@/xt/lib/styling";
import { generateSlug } from "@/xt/lib/utils";
import { Cog } from "lucide-react";
import Link from "next/link";

const Header = async () => {
  return (
    <header>
      <div className="p-3 justify-between flex flex-wrap" style={xtGap}>
        <Link href={"/"}>
          <Button variant={"ghost"} className=" text-md text-primary">
            {xtConfig.appName}
          </Button>
        </Link>
        <nav className="flex flex-wrap" style={xtGap}>
          {xtConfig.pages
            .filter((page) => !page.hidden)
            .map((page) => (
              <Link href={page.slug || generateSlug(page.name)} key={page.name}>
                <Button variant={"ghost"} className="capitalize">
                  {page.name}
                </Button>
              </Link>
            ))}
        </nav>
        <div className="flex flex-wrap" style={xtGap}>
          <ThemeSwitcher />
          <Link href={"/admin"}>
            <Button variant={"ghost"} size={'icon'}>
              <Cog />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

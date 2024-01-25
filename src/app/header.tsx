import xtConfig from "@/xt";
import ThemeSwitcher from "@/xt/components/generics/theme-switcher";
import { Button } from "@/xt/components/ui/button";
import { xtGap } from "@/xt/lib/styling";
import { xtPage } from "@/xt/types/___app.config";
import { Code, Cog } from "lucide-react";
import Link from "next/link";

const Header = async () => {
  return (
    <header>
      <div className="p-3 justify-between flex flex-wrap" style={xtGap}>
        <Link href={"/"}>
          <Button variant={"ghost"} className="font-black text-md text-primary">
            <Code />
            {xtConfig.appName}
          </Button>
        </Link>
        <nav className="flex flex-wrap" style={xtGap}>
          {xtConfig.pages
            .filter((page) => page.showInMenu)
            .map((page) => (
              <Link href={page.slug} key={page.name}>
                <Button variant={"ghost"} className="capitalize">
                  {page.name}
                </Button>
              </Link>
            ))}
        </nav>
        <div className="flex flex-wrap" style={xtGap}>
          <ThemeSwitcher />
          <Link href={"/admin"}>
            <Button variant={"ghost"}>
              <Cog className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

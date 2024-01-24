import xtConfig from "@/xt";
import ThemeSwitcher from "@/xt/components/generics/theme-switcher";
import { Button } from "@/xt/components/ui/button";
import { desanitizeSlug } from "@/xt/lib/utils";
import { Home } from "lucide-react";
import Link from "next/link";

const Header = async () => {
  return (
    <header>
      <div className="p-3 justify-center flex gap-2 flex-wrap">
        <Link href={"/"}>
          <Button>
            <Home />
          </Button>
        </Link>
        {xtConfig.pages.map((page) => (
          <Link href={page.name} key={page.name} prefetch={false}>
            <Button className="capitalize">{desanitizeSlug(page.name)}</Button>
          </Link>
        ))}
        {/* <Link href={'/admin'}><Button className="gap-3"><Cog /> Admin</Button></Link> */}
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;

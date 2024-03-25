import { Button } from "@/xt/components/ui/button";
import xtConfig from "@/xt/lib/config";
import { xtGap } from "@/xt/lib/styling";
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
                menubar
            </div>
        </header>
    );
};

export default Header;

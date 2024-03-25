import { Button } from '@/xt/components/ui/button';
import { TypographyH1, TypographyLarge } from '@/xt/components/ui/typography';
import xtConfig from '@/xt/lib/config';
import { xtGap } from '@/xt/lib/styling';

const Hero = () => {
    return (
        <div className=" mx-auto text-center flex flex-col " style={xtGap}>
            <TypographyH1 className="text-4xl font-bold mb-4">{xtConfig.appName}</TypographyH1>
            <TypographyLarge>Descubre todo lo que tenemos para ofrecerte.</TypographyLarge>
            <Button variant={'default'}>
                ⚡️ Start Building
            </Button>
        </div>
    );
};

export default Hero;

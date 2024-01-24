// Hero.js
import xtConfig from '@/xt';
import { Button } from '@/xt/components/ui/button';
import { xtSectionGap } from '@/xt/lib/styling';
import React from 'react';

const Hero = () => {
    return (
        <div className="bg-background text-foreground " style={xtSectionGap}>
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">{xtConfig.appName}</h1>
                <p className="text-lg mb-8">Descubre todo lo que tenemos para ofrecerte.</p>
                <Button>
                    Empezar
                </Button>
            </div>
        </div>
    );
};

export default Hero;

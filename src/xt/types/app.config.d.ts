export default interface xtConfig {
    appName: string;
    modules: xtModules;
    styling: xtStyling;
    features: xtFeatures;
    pages: xtPage[];
}

export interface xtPage {
    name: string;
    loading: boolean;
    error: boolean;
    fetchData: string;
    revalidatePattern: string;
    generateStaticPaths: string;
}

export interface xtFeatures {
    Paywall: boolean;
    Mail: boolean;
    Database: boolean;
    Auth: boolean;
    SEO: boolean;
    Blog: boolean;
    'Shadcn/ui': boolean;
    'OG Images': boolean;
}

export interface xtStyling {
    colorTheme: string;
    components: string;
    framework: string;
}

export interface xtModules {
    footer: string;
    navbar: string;
    landing: xtLanding;
}

export interface xtLanding {
    hero: boolean;
    testimonials: boolean;
    FAQ: boolean;
    features: boolean;
    contact: boolean;
    map: boolean;
}
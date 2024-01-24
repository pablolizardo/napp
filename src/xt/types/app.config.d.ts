export default interface xtConfig {
    appName: string;
    appDescription?: string;
    styling: xtStyling;
    features: xtFeatures;
    components: xtComponents;
    pages: xtPage[];
}

export interface xtPage {
    name: string;
    loading: boolean;
    error: boolean;
    fetchData: string;
    revalidatePattern: string;
    generateStaticPaths: string;
    template: string;
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

export interface xtComponents {
    footer: string;
    navbar: string;
    landing: xtLanding;
}

export interface xtLanding {
    hero: string | null;
    testimonials: string | null;
    FAQ: string | null;
    features: string | null;
    contact: string | null;
    team: string | null;
    pricing: string | null;
    map: string | null;

}
import "@/app/globals.css";
import { Providers } from "@/xt/components/generics/providers";
import xtConfig from "@/xt/lib/config";
import { xtGlobalStyles } from "@/xt/lib/styling";
import { root } from "@/xt/seo/metadata";
import { GeistSans } from "geist/font/sans";
import { Viewport } from "next";
import React from "react";

export const metadata = root
export const viewport: Viewport = { themeColor: 'hsl(var(--secondary))' }

const RootLayout = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
  const Header = React.lazy(() => import(`@/xt/templates/components/header/${xtConfig.components.header}.tsx`))
  const Footer = React.lazy(() => import(`@/xt/templates/components/footer/${xtConfig.components.footer}.tsx`))

  return (
    <html lang="en" className={`${GeistSans.className} `}
      suppressHydrationWarning style={xtGlobalStyles}>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout
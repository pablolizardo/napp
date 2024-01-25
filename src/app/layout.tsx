import "@/app/globals.css";
import { Providers } from "@/xt/components/generics/providers";
import { xtGlobalStyles } from "@/xt/lib/styling";
import { root } from "@/xt/seo/metadata";
import { GeistSans } from "geist/font/sans";
import React from "react";
import Header from "./header";
import xtConfig from "@/xt/lib/config";

export const metadata = root

const RootLayout = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
  const Footer = React.lazy(() => import(`@/xt/templates/components/footer/${xtConfig.components.footer}.tsx`))

  return (
    <html lang="en" className={`${GeistSans.className} `} suppressHydrationWarning style={xtGlobalStyles}>
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
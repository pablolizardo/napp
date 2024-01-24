import "@/app/globals.css";
import { Providers } from "@/xt/components/generics/providers";
import { xtGlobalStyles } from "@/xt/lib/styling";
import { root } from "@/xt/seo/metadata";
import { GeistSans } from "geist/font/sans";
import React from "react";
import Header from "./header";

export const metadata = root

const RootLayout = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <html lang="en" className={`${GeistSans.className} `} suppressHydrationWarning style={xtGlobalStyles}>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout
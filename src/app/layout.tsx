import { root } from "@/xt/seo/metadata";
import Header from "./header";
import { GeistSans } from "geist/font/sans";

import "@/xt/styles/globals.css";
import { Providers } from "@/xt/components/generics/providers";

export const metadata = root

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={`${GeistSans.className}`} suppressHydrationWarning>
      <body className="p-3" >
        <Providers>
          <>
            <Header />
            {children}
          </>
        </Providers>
      </body>
    </html>
  );
}

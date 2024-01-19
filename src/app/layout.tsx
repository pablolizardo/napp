import Header from "./header";
import { root } from "@/xt/seo/metadata";
import { Inter } from 'next/font/google'
import "@/xt/styles/globals.css";
// import "@/xt/styles/theme.css";
// import "@/xt/styles/components.css";
import { Providers } from "@/xt/components/generics/providers";

export const metadata = root

const interFont = Inter({ display: "swap", subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={`${interFont.className}`} suppressHydrationWarning>
      <body className="p-5" >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}

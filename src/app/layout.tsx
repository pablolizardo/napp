import Header from "./header";
import "@/xt/styles/globals.css";
import { root } from "@/xt/seo/metadata";
import { Inter } from 'next/font/google'
export const metadata = root

const interFont = Inter({ display: "swap", subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={`${interFont.className} `}>
      <body className="p-5" >
        <Header />
        {children}
      </body>
    </html>
  );
}

import "@/styles/globals.css";
import Header from "./header";
import { root } from "@/seo/metadata";

export const metadata = root

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-5" >
        <Header />
        {children}
      </body>
    </html>
  );
}

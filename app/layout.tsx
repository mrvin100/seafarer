import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Footer, Header } from "@/components/global";
import { Toaster } from "@/components/ui/sonner";
import { Cormorant_Garamond, Cormorant_Upright, Inconsolata, Roboto } from "next/font/google";

const cormorant_garamond = Cormorant_Garamond({
  variable: "--font-cormorant-garamont",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});
const cormorant_upright = Cormorant_Upright({
  variable: "--font-cormorant-upright",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '600', '700']
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
  weight: [ '200', "300", "400", "500", '600', "700"],
});

export const metadata: Metadata = {
  title: "Dark Home - Seafarer",
  description: "Explore the Lake, rent a yacht.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning={true}>
      <body
        className={`${roboto.variable} font-extralight ${cormorant_garamond.variable}  ${cormorant_upright.variable}   ${inconsolata.className} antialiased tracking-wider`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Toaster richColors closeButton position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}

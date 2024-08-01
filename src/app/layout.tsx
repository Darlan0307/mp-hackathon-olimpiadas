import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import AsideComponent from "@/components/aside-component";
import HeaderComponent from "@/components/header-component";
import Providers from "../providers/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Olímpiadas | Dashboard",
  description: "dashboard with data analysis from the Olympics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <TooltipProvider delayDuration={100}>
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
              <AsideComponent />
              <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <HeaderComponent />

                {children}
              </div>
            </div>
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}

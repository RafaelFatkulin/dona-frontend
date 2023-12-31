import { Providers } from "@/redux/provider";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import {Header} from '@/components/Header'

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "DONA",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}

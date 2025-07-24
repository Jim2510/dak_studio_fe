import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import {ReactNode} from "react";

export const metadata: Metadata = {
  title: "Dak Studio",
  description: "Studio di registrazione, milano",
};

export default function RootLayout({children}: Readonly<{ children: ReactNode}>) {
  return (
      <html lang="en">
        <body className='bg-[#A586C4]'>
          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
  );
}
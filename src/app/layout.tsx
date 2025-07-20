import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dak Studio",
  description: "Studio di registrazione, milano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-[#A586C4] overflow-hidden'>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "./globals.css";

const geologicaSans = Geologica({
  variable: "--font-geologica-sans",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patterson Wealth Partners",
  description: "Patterson Wealth Partners",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geologicaSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

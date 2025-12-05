import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const arrayFont = localFont({
  src: [
    {
      path: "../../public/fonts/Array/Array-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Array/Array-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Array/Array-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Array/Array-Wide.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Array/Array-SemiboldWide.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Array/Array-BoldWide.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-array",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beans",
  description: "Beans is a portfolio website for Baziotabeans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${arrayFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import localFont from "next/font/local";
import LiquidEther from "@/components/LiquidEther";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
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
        className={`${manrope.variable} ${inter.variable} ${arrayFont.variable} antialiased`}
      >
        <div style={{ width: "100%", height: 600, position: "relative" }}>
          <LiquidEther
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
        {children}
      </body>
    </html>
  );
}

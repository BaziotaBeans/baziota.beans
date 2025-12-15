import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import LightRays from "@/components/BackgroundAnimations/LightRays";
import { Header } from "@/components/Header";
import { Loading } from "@/components/Loading";

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
        <Loading />
        <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
          <LightRays
            raysOrigin="top-center"
            raysColor="#5dfeca"
            raysSpeed={0.5}
            lightSpread={0.9}
            rayLength={1.4}
            followMouse={true}
            mouseInfluence={0.05}
            noiseAmount={0.3}
            distortion={0.01}
          />
        </div>
        <main className="flex min-h-screen flex-col items-center relative">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}

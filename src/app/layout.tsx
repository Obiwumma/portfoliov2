import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "P. OBIWUMMA // SYSTEMS ARCHITECT",
  description: "Architecting Scalable Systems & High-Performance Interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geist.variable} ${jetbrainsMono.variable} bg-background text-on-surface antialiased min-h-screen flex flex-col relative`}
      >
        {/* Background Grid Isolated to background layer */}
        <div className="fixed inset-0 z-0 bg-cyber-grid pointer-events-none"></div>
        
        <Header />
        <main className="grow relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
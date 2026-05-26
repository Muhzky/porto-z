import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
// import { Providers } from "./providers";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elkiboi's Portfolio",
  description: "Portfolio showcasing projects, studies, and certificates of Elkiboi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        {/* <Providers>
          {children}
        </Providers> */}
      </body>
    </html>
  );
}
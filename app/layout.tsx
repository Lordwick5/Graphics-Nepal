import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Graphics Nepal",
  description: "Trusted printing & graphics shop since 2000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      {" "}
      //antialiased means to make text look smoother on screen
      <body className="min-h-full flex flex-col">
        //navbar goes here because we want it in every page.
        <nav>
          <a href="/">Graphics Nepal</a>
          <div>
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

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
      <body className="min-h-full flex flex-col">
        <nav className="flex justify-between items-center px-10 py-4 bg-[#0a1628]">
          <a href="/" className="text-[#c9a84c] text-xl font-bold">
            Graphics Nepal
          </a>
          <div className="flex gap-8">
            <a href="/" className="text-slate-300 hover:text-[#c9a84c]">
              Home
            </a>
            <a href="/products" className="text-slate-300 hover:text-[#c9a84c]">
              Products
            </a>
            <a href="/about" className="text-slate-300 hover:text-[#c9a84c]">
              About
            </a>
            <a href="/contact" className="text-slate-300 hover:text-[#c9a84c]">
              Contact
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

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
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <footer className="bg-[#0a1628] text-slate-400 text-center text-sm mt-auto footer">
          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="https://www.facebook.com/profile.php?id=61589712207794"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c9a84c] transition"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/graphics_nepal58"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c9a84c] transition"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@graphics.nepal4k?_r=1&_t=ZS-96IdvWw7zCG"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c9a84c] transition"
            >
              TikTok
            </a>
          </div>

          <p>© 2026 Graphics Nepal · Trusted since 2000 · Tripureshwor, Kathmandu, Nepal</p>
        </footer>
      </body>
    </html>
  );
}

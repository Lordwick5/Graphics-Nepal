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
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="flex justify-between items-center px-10 py-4 bg-[#0a1628]">
          <a href="/" className="text-[#c9a84c] text-xl font-bold">
            Graphics Nepal
          </a>
          {/* Desktop links */}
          <div className="hidden md:flex gap-8">
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

          {/* Mobile menu button */}
          <button className="md:hidden text-slate-300 text-2xl" id="menu-btn">
            ☰
          </button>

          {/* Mobile dropdown menu */}
          <div className="hidden bg-[#0a1628] flex-col px-6 pb-4 gap-4" id="mobile-menu">
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

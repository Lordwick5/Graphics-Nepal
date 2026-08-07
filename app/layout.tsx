import type { Metadata, Viewport } from "next";
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

const SITE_URL = "https://graphicsnepal.com.np";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Graphics Nepal | Printing & Graphics Shop in Kathmandu, Nepal",
    template: "%s | Graphics Nepal",
  },
  description:
    "Graphics Nepal (formerly Nepal Art) has been Kathmandu's trusted printing & graphics shop since 2000 — business cards, banners, stamps, ID cards, stickers, and more from our Tripureshwor store.",
  keywords: [
    "printing Kathmandu",
    "graphics Nepal",
    "Tripureshwor printing",
    "business card printing Nepal",
    "banner printing Kathmandu",
    "stamp making Nepal",
    "ID card printing Nepal",
    "sticker printing Nepal",
  ],
  authors: [{ name: "Graphics Nepal" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Graphics Nepal",
    title: "Graphics Nepal | Printing & Graphics Shop in Kathmandu, Nepal",
    description:
      "Trusted printing & graphics partner in Kathmandu since 2000. Business cards, banners, stamps, ID cards, stickers, and more.",
    images: [
      {
        url: "/visiting_card.jpg",
        width: 1000,
        height: 800,
        alt: "Graphics Nepal printing samples",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphics Nepal | Printing & Graphics Shop in Kathmandu, Nepal",
    description: "Trusted printing & graphics partner in Kathmandu since 2000.",
    images: ["/visiting_card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  // Paste the content value from Google Search Console's HTML-tag verification
  // method here once you verify the property, e.g. verification: { google: "abc123" }
};

export const viewport: Viewport = {
  themeColor: "#0a1628",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Graphics Nepal",
  alternateName: "Nepal Art",
  image: `${SITE_URL}/visiting_card.jpg`,
  url: SITE_URL,
  telephone: ["+977-9851093692", "+977-9808254089"],
  email: "Graphics4kprint@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tripureshwor",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 27.692807514800776,
    longitude: 85.31053598150675,
  },
  hasMap: "https://maps.google.com/?cid=11866930849564822849",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  priceRange: "$$",
  foundingDate: "2000",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61589712207794",
    "https://www.instagram.com/graphics_nepal58",
    "https://www.tiktok.com/@graphics.nepal4k",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
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

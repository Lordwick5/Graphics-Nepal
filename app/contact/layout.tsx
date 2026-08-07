import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Graphics Nepal in Tripureshwor, Kathmandu. Call +977-9851093692, email us, or visit our store for printing & graphics services.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

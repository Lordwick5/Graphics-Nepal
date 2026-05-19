"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0a1628]">
      {/* Main navbar row*/}
      <div className="flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-[#c9a84c] text-xl font-bold">
          Graphics Nepal
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-slate-300 hover:text-[#c9a84c]">
            Home
          </Link>
          <Link href="/products" className="text-slate-300 hover:text-[#c9a84c]">
            Products
          </Link>
          <Link href="/about" className="text-slate-300 hover:text-[#c9a84c]">
            About
          </Link>
          <Link href="/contact" className="text-slate-300 hover:text-[#c9a84c]">
            Contact
          </Link>
        </div>

        {/* Hamburger button - only on mobile */}
        <button className="md:hidden text-slate-300 text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "X" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col px-6 pb-4 gap-4">
          <Link
            href="/"
            className="text-slate-300 hover:text-[#c9a84c]"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-slate-300 hover:text-[#c9a84c]"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/about"
            className="text-slate-300 hover:text-[#c9a84c]"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-slate-300 hover:text-[#c9a84c]"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

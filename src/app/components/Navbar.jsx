"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="bg-white text-black shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          Neoland
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <Link href="/templates" className="hover:text-primary transition">Templates</Link>
          <Link href="/about" className="hover:text-primary transition">About</Link>
          <Link href="/contact" className="hover:text-primary transition">Contact</Link>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-black focus:outline-none"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-white border-t border-gray-200 px-6 py-4 space-y-3">
          <Link
            href="/"
            className="hover:text-primary transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/templates"
            className="hover:text-primary transition"
            onClick={() => setMenuOpen(false)}
          >
            Templates
          </Link>
          <Link
            href="/about"
            className="hover:text-primary transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

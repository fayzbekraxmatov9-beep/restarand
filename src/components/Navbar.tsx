"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { UtensilsCrossed, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Bosh Sahifa" },
  { href: "/haqimizda", label: "Biz Haqimizda" },
  { href: "/menyu", label: "Menyu" },
  { href: "/afzalliklar", label: "Afzalliklar" },
  { href: "/fikrlar", label: "Fikrlar" },
  { href: "/boglanish", label: "Bog'lanish" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-stone-950/85 border-b border-stone-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-stone-950 font-bold shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <UtensilsCrossed className="w-5 h-5 text-stone-950" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
              ZIYO &amp; TA&apos;M
            </span>
            <span className="block text-xs uppercase tracking-widest text-amber-500/90 font-medium">
              Premium Restoran
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 ${
                  isActive
                    ? "text-amber-400 font-semibold border-b-2 border-amber-400"
                    : "text-stone-300 hover:text-amber-400"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/joy-band-qilish"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-semibold text-sm hover:from-amber-400 hover:to-amber-500 transition-all shadow-md shadow-amber-600/25 hover:shadow-amber-500/40 hover:-translate-y-0.5"
          >
            Joy Band Qilish
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition"
          aria-label="Menyu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-800 bg-stone-900/95 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 font-medium ${
                pathname === link.href
                  ? "text-amber-400 font-bold"
                  : "text-stone-300 hover:text-amber-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/joy-band-qilish"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center mt-3 py-2.5 rounded-xl bg-amber-500 text-stone-950 font-bold"
          >
            Joy Band Qilish
          </Link>
        </div>
      )}
    </header>
  );
}

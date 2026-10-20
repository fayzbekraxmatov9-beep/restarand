"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuCard from "@/components/MenuCard";
import { menuItems } from "@/data/restaurant";
import { ChevronRight, Sparkles, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "milliy" | "kabob" | "desert" | "ichimlik">("all");

  const filteredMenu = activeCategory === "all"
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Banner */}
        <section className="relative py-20 bg-stone-900/60 border-b border-stone-800 text-center overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <span className="text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Shirin &amp; Lazzatli
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-6">
              Bizning Taomlar Menyusi
            </h1>
            <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              O&apos;zbekistonning eng sara go&apos;shtlari, yangi sabzavotlari va tabiiy tog&apos; giyohlari bilan tayyorlangan taomlar.
            </p>

            {/* Category tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
              {[
                { label: "Barchasi", key: "all" },
                { label: "Milliy Taomlar", key: "milliy" },
                { label: "Kaboblar", key: "kabob" },
                { label: "Desertlar", key: "desert" },
                { label: "Ichimliklar", key: "ichimlik" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveCategory(tab.key as any)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === tab.key
                      ? "bg-amber-500 text-stone-950 font-bold shadow-lg shadow-amber-500/20 scale-105"
                      : "bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredMenu.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>

            {/* Bottom Callout */}
            <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-stone-900 to-stone-950 border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Maxsus tadbir yoki katta oilaviy buyurtmami?
                </h3>
                <p className="text-stone-400 text-sm">
                  Biz bilan bog&apos;laning, siz uchun maxsus to&apos;y oshi yoki bayramona taomnoma tayyorlab beramiz.
                </p>
              </div>
              <Link
                href="/boglanish"
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm whitespace-nowrap transition shadow-lg shadow-amber-500/20"
              >
                Administrator bilan bog&apos;lanish
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

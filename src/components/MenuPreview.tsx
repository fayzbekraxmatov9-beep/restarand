"use client";

import { useState } from "react";
import Link from "next/link";
import { menuItems } from "@/data/restaurant";
import MenuCard from "./MenuCard";
import { ArrowRight } from "lucide-react";

export default function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState<"all" | "milliy" | "kabob" | "desert" | "ichimlik">("all");

  const filteredMenu = activeCategory === "all"
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">
            Bizning Menyu
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 mb-4">
            Eng Sara Taomlar To&apos;plami
          </h2>
          <p className="text-stone-400 text-base">
            Qadimiy retseptlar asosida pishirilgan betakror milliy taomlar va xushxo&apos;r shirinliklar.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
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
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === tab.key
                    ? "bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-500/20"
                    : "bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Food cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMenu.slice(0, 4).map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/menyu"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-sm border border-stone-700 transition"
          >
            <span>Barcha Taomlarni Ko&apos;rish (Menyu sahifasi)</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}

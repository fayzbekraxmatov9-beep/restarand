import Link from "next/link";
import { Sparkles, ArrowRight, ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 filter brightness-40 transition-transform duration-1000"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1800&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md text-amber-300 text-xs sm:text-sm font-medium mb-6 animate-pulse">
          <Sparkles className="w-4 h-4 text-amber-400" />
          Toshkentning eng shinam va xushbo&apos;y go&apos;shasi
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight sm:leading-none mb-6">
          Sharqona mehmondo&apos;stlik va <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
            betakror ta&apos;mlar uyg&apos;unligi
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-stone-300 mb-10 leading-relaxed">
          Biz sizga an&apos;anaviy o&apos;zbek taomlarining asl mazasini zamonaviy qulaylik va yuqori darajadagi servis bilan taqdim etamiz.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/joy-band-qilish"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-base transition-all shadow-lg shadow-amber-500/30 hover:scale-105 flex items-center justify-center gap-2"
          >
            <span>Joy Band Qilish</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/menyu"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-white font-semibold text-base border border-stone-700 backdrop-blur transition-all flex items-center justify-center gap-2"
          >
            <span>To&apos;liq Menyuni Ko&apos;rish</span>
            <ChevronRight className="w-4 h-4 text-stone-400" />
          </Link>
        </div>

        {/* Mini stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-stone-800/80 max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl bg-stone-900/40 backdrop-blur border border-stone-800/60">
            <div className="text-2xl sm:text-3xl font-bold text-amber-400">12+</div>
            <div className="text-xs sm:text-sm text-stone-400">Yillik Tajriba</div>
          </div>
          <div className="p-4 rounded-2xl bg-stone-900/40 backdrop-blur border border-stone-800/60">
            <div className="text-2xl sm:text-3xl font-bold text-amber-400">50+</div>
            <div className="text-xs sm:text-sm text-stone-400">Turfa Taomlar</div>
          </div>
          <div className="p-4 rounded-2xl bg-stone-900/40 backdrop-blur border border-stone-800/60">
            <div className="text-2xl sm:text-3xl font-bold text-amber-400">100%</div>
            <div className="text-xs sm:text-sm text-stone-400">Halol Masalliqlar</div>
          </div>
          <div className="p-4 rounded-2xl bg-stone-900/40 backdrop-blur border border-stone-800/60">
            <div className="text-2xl sm:text-3xl font-bold text-amber-400">4.9 ★</div>
            <div className="text-xs sm:text-sm text-stone-400">Mehmonlar Bahosi</div>
          </div>
        </div>
      </div>
    </section>
  );
}

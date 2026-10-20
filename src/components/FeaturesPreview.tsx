import Link from "next/link";
import { Sparkles, HeartHandshake, Clock, ChevronRight } from "lucide-react";

export default function FeaturesPreview() {
  return (
    <section className="py-20 bg-stone-900/40 border-y border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">
            Nega Aynan Biz?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Sizga Taqdim Etiladigan Qulayliklar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-stone-900 border border-stone-800 hover:border-amber-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Mohir Oshpazlar</h3>
            <p className="text-stone-400 text-sm leading-relaxed mb-4">
              Taomlarimiz ko&apos;p yillik tajribaga ega bo&apos;lgan ustalarning maxsus retseptlari va uslublarida tayyorlanadi.
            </p>
            <Link
              href="/afzalliklar"
              className="text-xs text-amber-400 hover:underline inline-flex items-center gap-1 font-medium"
            >
              Batafsil <ChevronRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="p-8 rounded-3xl bg-stone-900 border border-stone-800 hover:border-amber-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Shinam va Hashamatli Muhit</h3>
            <p className="text-stone-400 text-sm leading-relaxed mb-4">
              Oilaviy tadbirlar, do&apos;stlar davrasi yoki romantik kechki ovqatlar uchun maxsus bezatilgan xonalar va terrasa.
            </p>
            <Link
              href="/afzalliklar"
              className="text-xs text-amber-400 hover:underline inline-flex items-center gap-1 font-medium"
            >
              Batafsil <ChevronRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="p-8 rounded-3xl bg-stone-900 border border-stone-800 hover:border-amber-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Tez va Sifatli Yetkazish</h3>
            <p className="text-stone-400 text-sm leading-relaxed mb-4">
              Issiq taomlar va shirinliklarni shahar bo&apos;ylab 40 daqiqa ichida issiqligini yo&apos;qotmagan holda yetkazib beramiz.
            </p>
            <Link
              href="/afzalliklar"
              className="text-xs text-amber-400 hover:underline inline-flex items-center gap-1 font-medium"
            >
              Batafsil <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

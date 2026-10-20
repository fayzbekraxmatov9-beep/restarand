import Link from "next/link";
import { Award, CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-stone-900/50 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-96 sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-stone-800">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop"
                alt="Restoran interyeri"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block p-6 rounded-2xl bg-stone-900 border border-amber-500/30 shadow-xl max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-8 h-8 text-amber-400" />
                <span className="font-bold text-white leading-tight">
                  Yilning Eng Yaxshi Milliy Restorani
                </span>
              </div>
              <p className="text-xs text-stone-400">
                Sifat va xizmat ko&apos;rsatish bo&apos;yicha e&apos;tirof etilgan mukofot sohibi.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">
              Restoran Haqida
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Har Bir Taom — San&apos;at Asari Va Buyuk Meros
            </h2>
            <p className="text-stone-300 leading-relaxed">
              &ldquo;Ziyo &amp; Ta&apos;m&rdquo; restorani shunchaki ovqatlanish maskani emas. Bu qadimiy o&apos;zbek mehmondo&apos;stlik an&apos;analari, xushfe&apos;l xizmat ko&apos;rsatish va unutilmas shinamlik maskanidir.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white text-sm">Barra va Yangi Masalliqlar</h4>
                  <p className="text-xs text-stone-400">Har kuni saralangan mahsulotlar</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white text-sm">Oila Uchun Qulay Sharoit</h4>
                  <p className="text-xs text-stone-400">Alohida xonalar va bolalar burchagi</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/haqimizda"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition group"
              >
                <span>Batafsil ma&apos;lumot olish</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

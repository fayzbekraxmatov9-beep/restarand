import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, CheckCircle2, Clock, Users, ShieldCheck, Heart } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Biz Haqimizda | Ziyo & Ta'm Restorani",
  description: "Ziyo & Ta'm restoranining tarixi, qadriyatlari va jamoasi bilan tanishing.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Banner */}
        <section className="relative py-20 bg-stone-900/60 border-b border-stone-800 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <span className="text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Bizning Tarix Va Falsafa
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-6">
              Biz Haqimizda
            </h1>
            <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Biz o&apos;zbek milliy oshxonasining ko&apos;p asrlik an&apos;analarini zamonaviy gastronomiya san&apos;ati bilan birlashtirib, mehmonlarimizga unutilmas taassurot ulashamiz.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div className="space-y-6">
                <span className="text-amber-500 text-sm font-semibold uppercase tracking-wider">
                  Mehmondo&apos;stlik an&apos;analari
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  12 Yildan Buyon Eng Yaxshi Ta&apos;mlarni Sizga Ulashmoqdamiz
                </h2>
                <p className="text-stone-300 leading-relaxed">
                  2012-yilda tashkil topgan &ldquo;Ziyo &amp; Ta&apos;m&rdquo; restorani bugungi kunda poytaxtimizning eng sevimli oilaviy va do&apos;stona dam olish maskanlaridan biriga aylandi.
                </p>
                <p className="text-stone-400 leading-relaxed text-sm">
                  Biz har bir taomni san&apos;at darajasiga ko&apos;taramiz. Oshpazlarimiz har kuni tong sahardan yangi so&apos;yilgan go&apos;sht, saralangan guruch va xushbo&apos;y tog&apos; ziravorlaridan foydalanib, an&apos;anaviy o&apos;choqlarda taomlar tayyorlaydi.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="p-5 rounded-2xl bg-stone-900 border border-stone-800">
                    <div className="text-3xl font-extrabold text-amber-400 mb-1">100%</div>
                    <div className="text-xs text-stone-400 font-medium">Halol va Sertifikatlangan Mahsulotlar</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-stone-900 border border-stone-800">
                    <div className="text-3xl font-extrabold text-amber-400 mb-1">150+</div>
                    <div className="text-xs text-stone-400 font-medium">O&apos;rinli Keng va Shinam Zal</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-96 sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-stone-800">
                  <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop"
                    alt="Restoran zali"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values / Principles */}
        <section className="py-20 bg-stone-900/40 border-t border-stone-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Bizning Qadriyatlarimiz</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
                Nima Uchun Mehmonlar Bizni Tanlashadi?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-stone-900 border border-stone-800">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Tozalik va Gigiyena</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Oshxona va barcha xizmat ko&apos;rsatish hududlarimiz xalqaro sanitariya talablariga to&apos;liq javob beradi.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-stone-900 border border-stone-800">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Mehr Bilan Tayyorlangan</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Har bir taom o&apos;ziga xos e&apos;tibor, xushfe&apos;llik va oshpazlarimizning samimiy muhabbati bilan pishiriladi.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-stone-900 border border-stone-800">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Professional Jamoa</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Ofitsiantlarimiz va xodimlarimiz har doim mehmonlarga yuqori darajadagi g&apos;amxo&apos;rlik ko&apos;rsatishga shay.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <Link
                href="/menyu"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-base transition-all shadow-lg shadow-amber-500/20"
              >
                Bizning Menyuni Ko&apos;rish
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

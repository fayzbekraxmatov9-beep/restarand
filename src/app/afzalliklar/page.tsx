import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, HeartHandshake, Clock, ShieldCheck, Music, Car, Wifi, Utensils } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Afzalliklar | Ziyo & Ta'm Restorani",
  description: "Ziyo & Ta'm restoranining mehmonlarga taqdim etadigan barcha imtiyoz va afzalliklari.",
};

const features = [
  {
    icon: Sparkles,
    title: "Mohir Oshpazlar",
    desc: "15 yildan ortiq tajribaga ega milliy va sharq oshxonasi ustalari har bir taomni professional darajada tayyorlaydi."
  },
  {
    icon: ShieldCheck,
    title: "100% Halol Standart",
    desc: "Barcha go'sht va ziravorlar faqat tekshirilgan va ishonchli manbalardan qabul qilinadi."
  },
  {
    icon: Clock,
    title: "Tezkor Xizmat & Yetkazish",
    desc: "Restoran ichida buyurtmangiz 15-20 daqiqada tayyor bo'ladi. Yetkazib berish xizmati esa issiq holatda 40 daqiqada yetadi."
  },
  {
    icon: HeartHandshake,
    title: "Shinam Muhit & VIP Xonalar",
    desc: "Muzokaralar, biznes tushliklar yoki oilaviy shodiyonalar uchun akustikasi mukammal bo'lgan alohida xonalar mavjud."
  },
  {
    icon: Music,
    title: "Jonli Milliy Musiqa",
    desc: "Har oqshom mayin va yoqimli dutor, tanbur va zamonaviy akustik ijrolar mehmondorchilikka o'zgacha fayz bag'ishlaydi."
  },
  {
    icon: Car,
    title: "Katta va Qulay Avtoturargoh",
    desc: "Mehmonlarimiz uchun 50+ o'rinli video kuzatuv ostidagi bepul avtoturargoh va qulay kirish yo'laklari mavjud."
  },
  {
    icon: Wifi,
    title: "Bepul Yuqori Tezlikdagi Wi-Fi",
    desc: "Biznes uchrashuvlar va doimiy aloqa uchun butun restoran hududida barqaror va tezkor internet mavjud."
  },
  {
    icon: Utensils,
    title: "Maxsus Banketlar va Tadbirlar",
    desc: "Tug'ilgan kunlar, yubileylar va korporativ kechalar uchun maxsus shaxsiy menyu va stol bezatish xizmati."
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Banner */}
        <section className="relative py-20 bg-stone-900/60 border-b border-stone-800 text-center overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <span className="text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Bizning Imkoniyatlar
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-6">
              Nega Aynan Ziyo &amp; Ta&apos;m?
            </h1>
            <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Mehmonlarimiz qulayligi va ularning har bir daqiqasi quvonchli o&apos;tishi uchun barcha sharoitlarni yaratdik.
            </p>
          </div>
        </section>

        {/* Features List */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-3xl bg-stone-900 border border-stone-800 hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-stone-400 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Reservation CTA Box */}
            <div className="mt-20 p-10 rounded-3xl bg-stone-900/80 border border-stone-800 text-center max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Ushbu Qulayliklardan Foydalaning
              </h3>
              <p className="text-stone-300 text-sm mb-8 leading-relaxed">
                Stolni hoziroq oldindan band qiling va yaqinlaringiz bilan birga eng yaxshi xizmatdan bahramand bo&apos;ling.
              </p>
              <Link
                href="/joy-band-qilish"
                className="inline-block px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm transition shadow-lg shadow-amber-500/20"
              >
                Stol Band Qilish
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

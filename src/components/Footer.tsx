import Link from "next/link";
import { UtensilsCrossed, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-stone-950 border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-stone-950 font-bold">
                <UtensilsCrossed className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                ZIYO &amp; TA&apos;M
              </span>
            </Link>
            <p className="text-stone-400 text-xs leading-relaxed">
              Haqiqiy sharqona taomlar va unutilmas xotiralar maskani. Har doim sizning xizmatingizdamiz.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Tezkor Sahifalar</h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><Link href="/haqimizda" className="hover:text-amber-400 transition">Biz Haqimizda</Link></li>
              <li><Link href="/menyu" className="hover:text-amber-400 transition">Taomlar Menyusi</Link></li>
              <li><Link href="/joy-band-qilish" className="hover:text-amber-400 transition">Joy Band Qilish</Link></li>
              <li><Link href="/afzalliklar" className="hover:text-amber-400 transition">Afzalliklarimiz</Link></li>
              <li><Link href="/fikrlar" className="hover:text-amber-400 transition">Mijozlar Fikrlari</Link></li>
              <li><Link href="/boglanish" className="hover:text-amber-400 transition">Bog&apos;lanish</Link></li>
              <li><Link href="/admin" className="text-amber-400/80 hover:text-amber-400 transition font-medium">Admin Panel</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Ish Tartibi</h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>Dushanba - Juma: 10:00 - 23:00</li>
              <li>Shanba - Yakshanba: 10:00 - 00:00</li>
              <li className="text-amber-400 font-medium">Yetkazib berish: 24/7</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Manzilimiz</h4>
            <div className="space-y-3 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Toshkent shahri, Amir Temur shoh ko&apos;chasi, 45-uy</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+998 71 200 00 00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-900 text-center text-xs text-stone-500">
          &copy; 2026 Ziyo &amp; Ta&apos;m Restorani. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
}

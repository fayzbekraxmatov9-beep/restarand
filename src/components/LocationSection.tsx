import { MapPin, Navigation, Compass, ExternalLink } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-20 bg-stone-900/40 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-amber-500 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Xaritada Manzilimiz
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Bizni Oson Toping
          </h2>
          <p className="text-stone-400 text-sm mt-3 leading-relaxed">
            Restoranimiz Toshkent shahrining markazida, asosiy yo&apos;llarga yaqin va qulay lokatsiyada joylashgan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Info cards (1 col) */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="p-6 rounded-3xl bg-stone-900 border border-stone-800 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Aniq Manzil</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Toshkent shahri, Yunusobod tumani, Amir Temur shoh ko&apos;chasi, 45-uy.
              </p>
              <div className="text-xs text-amber-400 font-medium pt-1">
                Mo&apos;ljal: &ldquo;Oloy bozori&rdquo; va &ldquo;Abdulla Qodiriy&rdquo; metro bekati yaqinida.
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-stone-900 border border-stone-800 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Navigation className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Qatnov &amp; Transport</h3>
              <p className="text-stone-300 text-xs leading-relaxed">
                🚇 Metro: &ldquo;Abdulla Qodiriy&rdquo; bekatidan 3 daqiqalik piyoda yo&apos;l.<br />
                🚗 Avto: Bepul va qo&apos;riqlanadigan 50+ o&apos;rinli avtoturargoh mavjud.
              </p>
            </div>

            {/* Direct Map Links */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/15 via-stone-900 to-stone-900 border border-amber-500/30 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Compass className="w-4 h-4" /> Navigatorda ochish:
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://yandex.com/maps/?text=Amir+Temur+avenue+45+Tashkent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition"
                >
                  <span>Yandex Xarita</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
                <a
                  href="https://maps.google.com/?q=Amir+Temur+avenue+45+Tashkent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition shadow-md shadow-amber-500/20"
                >
                  <span>Google Xarita</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Map (2 cols) */}
          <div className="lg:col-span-2 rounded-3xl overflow-hidden border border-stone-800 shadow-2xl relative min-h-[380px] lg:min-h-full">
            <iframe
              title="Restoran Lokatsiyasi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.8837136015504!2d69.27855687652758!3d41.31133980069795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2931f41001%3A0xf0b86a073f1d5334!2sAmir%20Temur%20Square!5e0!3m2!1sen!2suz!4v1718000000000!5m2!1sen!2suz"
              className="w-full h-full min-h-[400px] border-0 filter contrast-105 opacity-90 hover:opacity-100 transition-opacity"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

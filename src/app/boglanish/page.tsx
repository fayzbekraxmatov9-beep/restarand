"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Clock, Send, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setSent(true);
        setForm({ name: "", phone: "", message: "" });
      } else {
        setErrorMsg(data.error || "Xatolik yuz berdi");
      }
    } catch {
      setErrorMsg("Server bilan bog'lanishda xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Banner */}
        <section className="relative py-20 bg-stone-900/60 border-b border-stone-800 text-center overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <span className="text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Biz Bilan Aloqa
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-6">
              Bog&apos;lanish
            </h1>
            <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Savollaringiz bormi yoki takliflar bildirmoqchimisiz? Biz bilan istalgan qulay usulda bog&apos;laning.
            </p>
          </div>
        </section>

        {/* Contact info and Form */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-extrabold text-white mb-4">
                    Biz Har Doim Sizning Xizmatingizdamiz
                  </h2>
                  <p className="text-stone-400 leading-relaxed text-sm">
                    Restoranimiz poytaxt markazida qulay joylashgan. Mehmonlarimiz uchun keng avtoturargoh va barcha qulayliklar mavjud.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-stone-900 border border-stone-800">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base mb-1">Manzil</h4>
                      <p className="text-stone-400 text-sm">Toshkent shahri, Amir Temur shoh ko&apos;chasi, 45-uy</p>
                      <span className="text-xs text-amber-400 mt-1 block">Mo&apos;ljal: &ldquo;Oloy&rdquo; bozori yaqinida</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-stone-900 border border-stone-800">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base mb-1">Telefon Raqamlar</h4>
                      <p className="text-stone-300 text-sm font-semibold">+998 71 200 00 00</p>
                      <p className="text-stone-300 text-sm font-semibold">+998 90 999 88 77</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-stone-900 border border-stone-800">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base mb-1">Ish Vaqti</h4>
                      <p className="text-stone-400 text-sm">Dushanba - Juma: 10:00 — 23:00</p>
                      <p className="text-stone-400 text-sm">Shanba - Yakshanba: 10:00 — 00:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <div className="p-8 sm:p-10 rounded-3xl bg-stone-900 border border-stone-800">
                <h3 className="text-2xl font-bold text-white mb-2">Xabar Yuboring</h3>
                <p className="text-xs text-stone-400 mb-6">
                  Quyidagi shaklni to&apos;ldiring, mutaxassislarimiz 15 daqiqa ichida siz bilan bog&apos;lanishadi.
                </p>

                {sent ? (
                  <div className="py-10 text-center space-y-4">
                    <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Xabaringiz Qabul Qilindi!</h4>
                    <p className="text-stone-400 text-sm">
                      Ma&apos;lumotlar bazaga muvaffaqiyatli saqlandi. Tez orada operatorimiz siz bilan bog&apos;lanadi.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="px-6 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-sm font-medium text-white transition"
                    >
                      Yana xabar yuborish
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMsg && (
                      <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                        {errorMsg}
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-medium text-stone-400 mb-1">Ismingiz *</label>
                      <input
                        type="text"
                        required
                        placeholder="Masalan: Jamshid"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 focus:outline-none focus:border-amber-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-400 mb-1">Telefon Raqamingiz *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+998 90 123 45 67"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 focus:outline-none focus:border-amber-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-400 mb-1">Xabaringiz yoki Savolingiz</label>
                      <textarea
                        rows={4}
                        placeholder="Savolingiz yoki xabaringizni yozing..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 focus:outline-none focus:border-amber-500 text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-stone-950 font-bold text-sm transition shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
                    >
                      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                      <Send className="w-4 h-4" />
                      <span>{loading ? "Yuborilmoqda..." : "Xabarni Yuborish"}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Interactive Map */}
            <div className="mt-16 rounded-3xl overflow-hidden border border-stone-800 shadow-2xl relative">
              <iframe
                title="Restoran Lokatsiyasi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.8837136015504!2d69.27855687652758!3d41.31133980069795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2931f41001%3A0xf0b86a073f1d5334!2sAmir%20Temur%20Square!5e0!3m2!1sen!2suz!4v1718000000000!5m2!1sen!2suz"
                className="w-full h-[400px] border-0 filter contrast-105"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

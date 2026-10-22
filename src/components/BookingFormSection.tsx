"use client";

import { useState } from "react";
import { Phone, Clock, Users, Calendar, CheckCircle2, Loader2 } from "lucide-react";

export default function BookingFormSection() {
  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    guests: "2",
    date: "",
    time: "19:00",
    comment: "",
  });
  const [loading, setLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!booking.name || !booking.phone || !booking.date) return;

    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking),
      });

      const data = await res.json();
      if (data.success) {
        setBookingSuccess(true);
      } else {
        setErrorMessage(data.error || "Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.");
      }
    } catch {
      setErrorMessage("Server bilan bog'lanishda xatolik yuz berdi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-stone-900 via-stone-900/90 to-stone-950 border border-stone-800 p-8 sm:p-12 lg:p-16 relative shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">
                Bron Qilish
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 mb-6">
                Oldindan Stol Band Qiling
              </h2>
              <p className="text-stone-300 text-base mb-8 leading-relaxed">
                Dam olish kunlari yoki maxsus sana uchun stolni oldindan band qilib, kutishlarsiz ajoyib oqshomni o&apos;tkazing.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-stone-300">
                  <div className="w-10 h-10 rounded-xl bg-stone-800 flex items-center justify-center text-amber-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-400">Tezkor Aloqa</div>
                    <div className="text-white font-semibold">+998 71 200 00 00</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-stone-300">
                  <div className="w-10 h-10 rounded-xl bg-stone-800 flex items-center justify-center text-amber-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-400">Ish Vaqti</div>
                    <div className="text-white font-semibold">Har kuni: 10:00 — 23:00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-stone-950/80 p-8 rounded-2xl border border-stone-800 backdrop-blur shadow-xl">
              {bookingSuccess ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Stol Muvaffaqiyatli Band Qilindi!</h3>
                  <p className="text-stone-400 text-sm">
                    Hurmatli <span className="text-amber-400 font-semibold">{booking.name}</span>, sizning so&apos;rovingiz bazaga saqlandi. Tez orada operatorimiz siz bilan bog&apos;lanadi.
                  </p>
                  <button
                    onClick={() => {
                      setBookingSuccess(false);
                      setBooking({ name: "", phone: "", guests: "2", date: "", time: "19:00", comment: "" });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-sm font-medium text-white transition"
                  >
                    Yangi bron qilish
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBooking} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-stone-400 mb-1">Ismingiz *</label>
                    <input
                      type="text"
                      required
                      placeholder="Masalan: Sardor Aliyev"
                      value={booking.name}
                      onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white placeholder-stone-600 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-400 mb-1">Telefon Raqamingiz *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+998 90 123 45 67"
                      value={booking.phone}
                      onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white placeholder-stone-600 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-400 mb-1">Mehmonlar Soni</label>
                      <div className="relative">
                        <Users className="w-4 h-4 text-stone-500 absolute left-3 top-3.5" />
                        <select
                          value={booking.guests}
                          onChange={(e) => setBooking({ ...booking, guests: e.target.value })}
                          className="w-full pl-9 pr-3 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white focus:outline-none focus:border-amber-500 text-sm"
                        >
                          <option value="1">1 kishi</option>
                          <option value="2">2 kishi</option>
                          <option value="4">3-4 kishi</option>
                          <option value="6">5-6 kishi</option>
                          <option value="10">10+ kishi</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-400 mb-1">Sana *</label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-stone-500 absolute left-3 top-3.5" />
                        <input
                          type="date"
                          required
                          value={booking.date}
                          onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                          className="w-full pl-9 pr-3 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white focus:outline-none focus:border-amber-500 text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-400 mb-1">Qo&apos;shimcha Istaklar (Ixtiyoriy)</label>
                    <textarea
                      rows={3}
                      placeholder="Masalan: Deraza yonidagi tinch stol..."
                      value={booking.comment}
                      onChange={(e) => setBooking({ ...booking, comment: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-900 border border-stone-800 text-white placeholder-stone-600 focus:outline-none focus:border-amber-500 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-stone-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/25 mt-2 flex items-center justify-center gap-2"
                  >
                    {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                    <span>{loading ? "Yuborilmoqda..." : "Bron Qilishni Tasdiqlash"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

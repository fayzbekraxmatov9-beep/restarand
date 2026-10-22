"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Clock, Users, Calendar, CheckCircle2, ShieldCheck, Sparkles, Loader2 } from "lucide-react";

export default function BookingPage() {
  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    guests: "2",
    date: "",
    time: "19:00",
    roomType: "oddiy",
    comment: ""
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
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Banner */}
        <section className="relative py-20 bg-stone-900/60 border-b border-stone-800 text-center overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <span className="text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Onlayn Rezervatsiya
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-6">
              Joy Band Qilish
            </h1>
            <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Kechki ovqat, oilaviy tadbir yoki do&apos;stlar davrasi uchun qulay stolni oldindan buyurtma qiling.
            </p>
          </div>
        </section>

        {/* Booking Form and Info */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column - Benefits & Info */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                    Stolni Oldindan Band Qilishning Afzalliklari
                  </h2>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    Dam olish kunlari va kechki soatlarda mehmonlarimiz ko&apos;p bo&apos;lganligi sababli oldindan bron qilish sizga navbatsiz va eng qulay joyni kafolatlaydi.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-stone-900 border border-stone-800">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Eng Yaxshi O&apos;rinlar</h4>
                      <p className="text-xs text-stone-400 mt-0.5">Deraza oldi, terrasa yoki VIP xonalar siz uchun oldindan tayyorlanadi.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-stone-900 border border-stone-800">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Kutishlarsiz Xizmat</h4>
                      <p className="text-xs text-stone-400 mt-0.5">Siz kelishingiz bilan dasturxon va kutib olish to&apos;liq shay bo&apos;ladi.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-stone-900 border border-stone-800">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Bepul Bron Qilish</h4>
                      <p className="text-xs text-stone-400 mt-0.5">Stol band qilish mutlaqo bepul, to&apos;lov faqat buyurtma qilingan taomlar uchun olinadi.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                  <h4 className="font-bold text-amber-400 text-sm mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Telefon orqali tezkor bron:
                  </h4>
                  <p className="text-xs text-stone-300">
                    Agar zudlik bilan stol kerak bo&apos;lsa yoki 10 dan ortiq mehmon bo&apos;lsa, to&apos;g&apos;ridan-to&apos;g&apos;ri qo&apos;ng&apos;iroq qiling:
                  </p>
                  <p className="text-lg font-bold text-white mt-1">+998 71 200 00 00</p>
                </div>
              </div>

              {/* Right Column - Booking Form */}
              <div className="lg:col-span-7 bg-stone-900 border border-stone-800 p-8 sm:p-10 rounded-3xl shadow-xl">
                {bookingSuccess ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-20 h-20 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Stol Muvaffaqiyatli Band Qilindi!</h3>
                    <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed">
                      Hurmatli <span className="text-amber-400 font-semibold">{booking.name}</span>, sizning rezervatsiya so&apos;rovingiz bazaga saqlandi. Tez orada operatorimiz siz bilan bog&apos;lanadi.
                    </p>
                    <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 max-w-sm mx-auto text-left text-xs text-stone-400 space-y-1 mt-4">
                      <div><strong className="text-stone-200">Sana:</strong> {booking.date}</div>
                      <div><strong className="text-stone-200">Vaqt:</strong> {booking.time}</div>
                      <div><strong className="text-stone-200">Mehmonlar soni:</strong> {booking.guests} kishi</div>
                    </div>
                    <button
                      onClick={() => {
                        setBookingSuccess(false);
                        setBooking({ name: "", phone: "", guests: "2", date: "", time: "19:00", roomType: "oddiy", comment: "" });
                      }}
                      className="mt-6 px-6 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-sm font-semibold text-white transition"
                    >
                      Yana yangi bron qilish
                    </button>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Rezervatsiya Shakli</h3>
                    <p className="text-xs text-stone-400 mb-6">
                      Iltimos, ma&apos;lumotlarni to&apos;ldiring. Administratorimiz tasdiqlash uchun tez orada bog&apos;lanadi.
                    </p>

                    {errorMessage && (
                      <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                        {errorMessage}
                      </div>
                    )}

                    <form onSubmit={handleBooking} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-stone-400 mb-1">Ism va Familiyangiz *</label>
                          <input
                            type="text"
                            required
                            placeholder="Masalan: Azizbek Rahimov"
                            value={booking.name}
                            onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 focus:outline-none focus:border-amber-500 text-sm"
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
                            className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 focus:outline-none focus:border-amber-500 text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-stone-400 mb-1">Mehmonlar Soni</label>
                          <div className="relative">
                            <Users className="w-4 h-4 text-stone-500 absolute left-3 top-3.5" />
                            <select
                              value={booking.guests}
                              onChange={(e) => setBooking({ ...booking, guests: e.target.value })}
                              className="w-full pl-9 pr-3 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white focus:outline-none focus:border-amber-500 text-sm"
                            >
                              <option value="1">1 kishi</option>
                              <option value="2">2 kishi</option>
                              <option value="3-4">3-4 kishi</option>
                              <option value="5-6">5-6 kishi</option>
                              <option value="7-10">7-10 kishi</option>
                              <option value="10+">10+ kishi (Banket)</option>
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
                              className="w-full pl-9 pr-3 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white focus:outline-none focus:border-amber-500 text-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-stone-400 mb-1">Vaqt</label>
                          <div className="relative">
                            <Clock className="w-4 h-4 text-stone-500 absolute left-3 top-3.5" />
                            <select
                              value={booking.time}
                              onChange={(e) => setBooking({ ...booking, time: e.target.value })}
                              className="w-full pl-9 pr-3 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white focus:outline-none focus:border-amber-500 text-sm"
                            >
                              <option value="12:00">12:00 (Tushlik)</option>
                              <option value="13:00">13:00</option>
                              <option value="14:00">14:00</option>
                              <option value="18:00">18:00 (Kechki)</option>
                              <option value="19:00">19:00</option>
                              <option value="20:00">20:00</option>
                              <option value="21:00">21:00</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-400 mb-1">Joy Tanlovi</label>
                        <select
                          value={booking.roomType}
                          onChange={(e) => setBooking({ ...booking, roomType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white focus:outline-none focus:border-amber-500 text-sm"
                        >
                          <option value="oddiy">Asosiy zal (Shinam va jonli muhit)</option>
                          <option value="terrasa">Ochiq terrasa (Toza havo va manzara)</option>
                          <option value="vip">VIP xona (Alohida tinch muhit)</option>
                          <option value="oilaviy">Oilaviy burchak (Bolalar bilan)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-400 mb-1">Qo&apos;shimcha Istaklar (Ixtiyoriy)</label>
                        <textarea
                          rows={3}
                          placeholder="Masalan: Tug'ilgan kun bayrami uchun maxsus bezak yoki deraza yonidagi tinch stol..."
                          value={booking.comment}
                          onChange={(e) => setBooking({ ...booking, comment: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 focus:outline-none focus:border-amber-500 text-sm resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-stone-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/25 mt-2 flex items-center justify-center gap-2"
                      >
                        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                        <span>{loading ? "Yuborilmoqda..." : "Bron Qilishni Tasdiqlash"}</span>
                      </button>
                    </form>
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

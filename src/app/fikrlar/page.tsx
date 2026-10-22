"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { reviewsData, ReviewItem } from "@/data/restaurant";
import { Star, CheckCircle2, MessageSquarePlus, Loader2 } from "lucide-react";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<ReviewItem[]>(reviewsData);
  const [form, setForm] = useState({ name: "", role: "Mehmon", comment: "", rating: 5 });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Load reviews from Backend on mount
  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data && data.data.length > 0) {
          setReviews(data.data);
        }
      })
      .catch(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.comment) return;

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setReviews([
          {
            id: data.reviewId || Date.now(),
            name: form.name,
            role: form.role || "Mehmon",
            comment: form.comment,
            rating: Number(form.rating)
          },
          ...reviews
        ]);
        setSubmitted(true);
        setForm({ name: "", role: "Mehmon", comment: "", rating: 5 });
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
              Mehmonlarimiz So&apos;zlari
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-6">
              Mijozlarimiz Fikrlari
            </h1>
            <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Restoranimizga tashrif buyurgan aziz mehmonlarimiz qoldirgan haqiqiy xolis baholar va taassurotlar.
            </p>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="p-8 rounded-3xl bg-stone-900 border border-stone-800 flex flex-col justify-between hover:border-amber-500/30 transition-all"
                >
                  <div>
                    <div className="flex gap-1 text-amber-400 mb-4">
                      {[...Array(review.rating || 5)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-stone-300 text-sm italic leading-relaxed mb-6">
                      &ldquo;{review.comment}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-stone-800">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center">
                      {review.name ? review.name[0] : "M"}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{review.name}</h4>
                      <span className="text-xs text-stone-500">{review.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Leave a review form */}
            <div className="mt-20 max-w-2xl mx-auto p-8 rounded-3xl bg-stone-900 border border-stone-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <MessageSquarePlus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">O&apos;z Fikringizni Qoldiring</h3>
                  <p className="text-xs text-stone-400">Sizning fikringiz ma&apos;lumotlar bazasiga saqlanadi</p>
                </div>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-3 text-amber-300 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>Katta rahmat! Sizning fikringiz muvaffaqiyatli saqlandi.</span>
                </div>
              )}

              {errorMsg && (
                <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-400 mb-1">Ismingiz *</label>
                    <input
                      type="text"
                      required
                      placeholder="Masalan: Azizbek"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-400 mb-1">Baholang</label>
                    <select
                      value={form.rating}
                      onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white focus:outline-none focus:border-amber-500 text-sm"
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ (5 - A&apos;lo)</option>
                      <option value={4}>⭐⭐⭐⭐ (4 - Yaxshi)</option>
                      <option value={3}>⭐⭐⭐ (3 - Qoniqarli)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-400 mb-1">Fikringiz va Taassurotlaringiz *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Restoran, xizmat ko'rsatish yoki taomlar haqidagi taassurotlaringiz..."
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 focus:outline-none focus:border-amber-500 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-stone-950 font-bold text-sm transition shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
                >
                  {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                  <span>{loading ? "Yuborilmoqda..." : "Fikrni Yuborish"}</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

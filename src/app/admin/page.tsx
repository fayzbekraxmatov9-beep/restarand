"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MessageSquare, Mail, RefreshCw, CheckCircle, Clock } from "lucide-react";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"bookings" | "messages" | "reviews">("bookings");
  const [bookings, setBookings] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [resB, resM, resR] = await Promise.all([
        fetch("/api/bookings").then((r) => r.json()),
        fetch("/api/messages").then((r) => r.json()),
        fetch("/api/reviews").then((r) => r.json()),
      ]);

      if (resB.success) setBookings(resB.data || []);
      if (resM.success) setMessages(resM.data || []);
      if (resR.success) setReviews(resR.data || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-stone-800">
          <div>
            <span className="text-amber-500 text-xs font-semibold tracking-wider uppercase">Restoran Boshqaruvi</span>
            <h1 className="text-3xl font-extrabold text-white mt-1">Admin Panel</h1>
          </div>

          <button
            onClick={fetchData}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 border border-stone-800 hover:border-amber-500/40 text-stone-300 text-sm font-medium transition"
          >
            <RefreshCw className={`w-4 h-4 text-amber-400 ${loading ? "animate-spin" : ""}`} />
            <span>Yangilash</span>
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
          <div 
            onClick={() => setActiveTab("bookings")}
            className={`p-6 rounded-2xl border cursor-pointer transition ${
              activeTab === "bookings" 
                ? "bg-amber-500/10 border-amber-500" 
                : "bg-stone-900 border-stone-800 hover:border-stone-700"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase text-stone-400">Band qilingan stollar</span>
              <Calendar className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-3xl font-extrabold text-white">{bookings.length}</div>
          </div>

          <div 
            onClick={() => setActiveTab("messages")}
            className={`p-6 rounded-2xl border cursor-pointer transition ${
              activeTab === "messages" 
                ? "bg-amber-500/10 border-amber-500" 
                : "bg-stone-900 border-stone-800 hover:border-stone-700"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase text-stone-400">Kelgan Xabarlar</span>
              <Mail className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-3xl font-extrabold text-white">{messages.length}</div>
          </div>

          <div 
            onClick={() => setActiveTab("reviews")}
            className={`p-6 rounded-2xl border cursor-pointer transition ${
              activeTab === "reviews" 
                ? "bg-amber-500/10 border-amber-500" 
                : "bg-stone-900 border-stone-800 hover:border-stone-700"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase text-stone-400">Mijozlar Fikrlari</span>
              <MessageSquare className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-3xl font-extrabold text-white">{reviews.length}</div>
          </div>
        </div>

        {/* Content Table / Cards */}
        <div className="bg-stone-900 rounded-3xl border border-stone-800 p-6 sm:p-8">
          
          {/* 1. Bookings Tab */}
          {activeTab === "bookings" && (
            <div>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-400" />
                <span>Stol Band Qilish So&apos;rovlari</span>
              </h2>

              {bookings.length === 0 ? (
                <div className="text-center py-12 text-stone-500 text-sm">Hozircha hech qanday rezervatsiya mavjud emas.</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-stone-300">
                    <thead className="text-xs uppercase bg-stone-950/60 text-stone-400 border-b border-stone-800">
                      <tr>
                        <th className="px-4 py-3">ID</th>
                        <th className="px-4 py-3">Mijoz</th>
                        <th className="px-4 py-3">Telefon</th>
                        <th className="px-4 py-3">Sana / Vaqt</th>
                        <th className="px-4 py-3">Mehmonlar</th>
                        <th className="px-4 py-3">Joy turi</th>
                        <th className="px-4 py-3">Izoh</th>
                        <th className="px-4 py-3">Vaqti</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-800">
                      {bookings.map((item) => (
                        <tr key={item.id} className="hover:bg-stone-800/40 transition">
                          <td className="px-4 py-3.5 font-mono text-amber-400 font-semibold">#{item.id}</td>
                          <td className="px-4 py-3.5 font-bold text-white">{item.name}</td>
                          <td className="px-4 py-3.5 text-stone-300">{item.phone}</td>
                          <td className="px-4 py-3.5 text-stone-300">
                            <span className="font-semibold text-white">{item.date}</span> ({item.time})
                          </td>
                          <td className="px-4 py-3.5">{item.guests} kishi</td>
                          <td className="px-4 py-3.5">
                            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                              {item.room_type || "oddiy"}
                            </span>
                          </td>
                          <td className="px-4 py-3.5 text-xs text-stone-400 max-w-xs truncate">{item.comment || "—"}</td>
                          <td className="px-4 py-3.5 text-xs text-stone-500">{item.created_at}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* 2. Messages Tab */}
          {activeTab === "messages" && (
            <div>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5 text-amber-400" />
                <span>Bog&apos;lanish orqali kelgan xabarlar</span>
              </h2>

              {messages.length === 0 ? (
                <div className="text-center py-12 text-stone-500 text-sm">Hozircha xabarlar yo&apos;q.</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {messages.map((item) => (
                    <div key={item.id} className="p-5 rounded-2xl bg-stone-950 border border-stone-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-base">{item.name}</span>
                        <span className="text-xs text-amber-400 font-mono">{item.phone}</span>
                      </div>
                      <p className="text-sm text-stone-300 leading-relaxed bg-stone-900/60 p-3 rounded-xl border border-stone-800/80">
                        {item.message || "Xabar matni yo'q"}
                      </p>
                      <div className="text-xs text-stone-500 text-right">{item.created_at}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 3. Reviews Tab */}
          {activeTab === "reviews" && (
            <div>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-amber-400" />
                <span>Mijozlar Fikr-Mulohazalari</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {reviews.map((item) => (
                  <div key={item.id} className="p-5 rounded-2xl bg-stone-950 border border-stone-800 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-white">{item.name}</span>
                        <span className="text-xs text-amber-400">{"⭐".repeat(item.rating || 5)}</span>
                      </div>
                      <p className="text-xs text-stone-400 mb-2">{item.role || "Mehmon"}</p>
                      <p className="text-sm text-stone-300 italic">&ldquo;{item.comment}&rdquo;</p>
                    </div>
                    <div className="text-xs text-stone-500 text-right pt-4">{item.created_at}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}

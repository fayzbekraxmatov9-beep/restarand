import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { reviewsData } from "@/data/restaurant";

export default function ReviewsPreview() {
  return (
    <section className="py-20 bg-stone-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">
            Fikr-Mulohazalar
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Mehmonlarimiz Nima Deyishadi?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsData.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-3xl bg-stone-900 border border-stone-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-stone-300 text-sm italic leading-relaxed mb-6">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-stone-800">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">{review.name}</h4>
                  <span className="text-xs text-stone-500">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/fikrlar"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-sm border border-stone-700 transition"
          >
            <span>Barcha Fikrlarni O&apos;qish &amp; Fikr Qoldirish</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}

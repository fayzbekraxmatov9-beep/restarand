import Link from "next/link";
import { MenuItem } from "@/data/restaurant";
import { ChevronRight } from "lucide-react";

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="group rounded-2xl bg-stone-900 border border-stone-800/80 overflow-hidden hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {item.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500 text-stone-950 shadow-md">
            {item.badge}
          </span>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
            {item.name}
          </h3>
          <p className="text-stone-400 text-xs mt-2 line-clamp-2 leading-relaxed">
            {item.desc}
          </p>
        </div>
        <div className="pt-4 mt-4 border-t border-stone-800 flex items-center justify-between">
          <span className="text-amber-400 font-bold text-base">
            {item.price}
          </span>
          <Link
            href="/joy-band-qilish"
            className="text-xs font-medium text-stone-300 hover:text-amber-400 flex items-center gap-1 transition-colors"
          >
            Buyurtma <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

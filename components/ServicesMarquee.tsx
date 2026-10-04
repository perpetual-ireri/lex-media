'use client'
import { services } from '@/lib/data'

export default function ServicesMarquee() {
  const items = [...services, ...services]
  return (
    <div className="bg-amber-400 py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((s, i) => (
          <span key={i} className="mx-8 text-black font-bold text-lg uppercase tracking-wider">
            {s.title} <span className="mx-4">•</span>
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 30s linear infinite; }
      `}</style>
    </div>
  )
}
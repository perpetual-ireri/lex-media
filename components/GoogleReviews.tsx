'use client'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '@/lib/data'

export default function GoogleReviews() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-4">Google Reviews ★★★★★</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">What Our Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-neutral-950 border border-white/10"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} className="fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-white/80 italic mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-400 text-black font-bold flex items-center justify-center">{t.initial}</div>
                <div className="text-white font-medium">{t.author}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
'use client'
import { motion } from 'framer-motion'
import { industries } from '@/lib/data'

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-neutral-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-4">Industries</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Expertise Across Sectors</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-black border border-white/10"
            >
              <h3 className="text-2xl font-bold text-amber-400 mb-4">{ind.title}</h3>
              <p className="text-white/70 mb-6 leading-relaxed">{ind.description}</p>
              <ul className="space-y-2">
                {ind.features.map(f => (
                  <li key={f} className="text-white/60 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
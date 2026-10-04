'use client'
import { motion } from 'framer-motion'
import { services } from '@/lib/data'

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-4">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Full-Spectrum Media Solutions</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-8 rounded-2xl bg-neutral-950 border border-white/10 hover:border-amber-400/50 transition"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <div className="text-amber-400 text-sm font-mono mb-2">{s.id}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition">{s.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
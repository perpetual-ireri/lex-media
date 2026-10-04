'use client'
import { motion } from 'framer-motion'
import { process } from '@/lib/data'

export default function ProcessTimeline() {
  return (
    <section id="process" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-4">How We Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">From Vision to Stunning Reality</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {process.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-6"
            >
              <div className="text-6xl font-bold text-amber-400/20 mb-4">{p.step}</div>
              <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
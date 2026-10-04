'use client'
import { motion } from 'framer-motion'

const stats = [
  { value: '8+', label: 'Years of Excellence' },
  { value: '250+', label: 'Projects Delivered' },
  { value: '120+', label: 'Happy Clients' },
  { value: '15+', label: 'Industries Served' },
]

export default function StatsSection() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">{s.value}</div>
            <div className="text-white/60 text-sm uppercase tracking-wider">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
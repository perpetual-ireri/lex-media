'use client'
import { motion } from 'framer-motion'

const clients = ['SafariCo', 'Nairobi Estates', 'Kenya Brands', 'EastAfrica Corp', 'Mombasa Tourism', 'Savannah Group']

export default function ClientsLogos() {
  return (
    <section className="bg-neutral-950 py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-white/40 uppercase tracking-[0.3em] text-xs mb-10">Trusted By Many</p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
          {clients.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-center text-white/40 font-semibold hover:text-amber-400 transition"
            >
              {c}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
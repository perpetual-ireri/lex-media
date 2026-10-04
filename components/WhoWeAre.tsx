'use client'
import { motion } from 'framer-motion'

export default function WhoWeAre() {
  return (
    <section id="about" className="bg-neutral-950 py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-4">Who We Are</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Kenya's Leading <span className="text-amber-400">Visual Storytellers</span>
          </h2>
          <p className="text-white/70 leading-relaxed mb-4">
            Lex Media is a premium media production company specialising in cinematic video production, photography, drone aerial solutions, and digital marketing.
          </p>
          <p className="text-white/70 leading-relaxed">
            Based in Nairobi, we serve businesses, brands, and individuals across the country and beyond with high-quality content that captivates and engages audiences.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden"
        >
          <img
            src="https://images.pexels.com/photos/16122163/pexels-photo-16122163.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Nairobi skyline"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
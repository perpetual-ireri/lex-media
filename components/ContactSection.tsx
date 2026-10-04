'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactSection() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-neutral-950 py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-4">Contact Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Create Something Amazing</h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Ready to elevate your brand with cinematic visuals? Reach out and let's discuss your next project.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white/70"><Mail size={18} className="text-amber-400" /> hello@lexmedia.co.ke</div>
            <div className="flex items-center gap-3 text-white/70"><Phone size={18} className="text-amber-400" /> +254 700 000 000</div>
            <div className="flex items-center gap-3 text-white/70"><MapPin size={18} className="text-amber-400" /> Nairobi, Kenya</div>
          </div>
        </motion.div>
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {sent ? (
            <div className="p-8 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400 text-center">
              Thank you! We'll be in touch shortly.
            </div>
          ) : (
            <>
              <input required placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white placeholder-white/40 focus:border-amber-400 outline-none" />
              <input required type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white placeholder-white/40 focus:border-amber-400 outline-none" />
              <input placeholder="Phone (optional)" className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white placeholder-white/40 focus:border-amber-400 outline-none" />
              <textarea required rows={5} placeholder="Tell us about your project..." className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white placeholder-white/40 focus:border-amber-400 outline-none resize-none" />
              <button type="submit" className="w-full py-4 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-300 transition">
                Send Message
              </button>
            </>
          )}
        </motion.form>
      </div>
    </section>
  )
}
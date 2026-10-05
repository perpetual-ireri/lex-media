'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

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
            <div className="flex items-center gap-3 text-white/70">
              <Mail size={18} className="text-amber-400" />
              lexmedia001@email.com
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <Phone size={18} className="text-amber-400" />
              +254 795665275
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <MapPin size={18} className="text-amber-400" />
              Nairobi, Kenya
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3 mt-8">
            <a
              href="https://wa.me/254795665275"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="w-11 h-11 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-black transition"
            >
              <MessageCircle size={20} />
            </a>

            <a
              href="https://www.tiktok.com/@lexmedia001?_r=1&_t=ZS-9AHrUrWaA6v"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on TikTok"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
              </svg>
            </a>
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
              <input
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white placeholder-white/40 focus:border-amber-400 outline-none"
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white placeholder-white/40 focus:border-amber-400 outline-none"
              />
              <input
                placeholder="Phone (optional)"
                className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white placeholder-white/40 focus:border-amber-400 outline-none"
              />
              <textarea
                required
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white placeholder-white/40 focus:border-amber-400 outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full py-4 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-300 transition"
              >
                Send Message
              </button>
            </>
          )}
        </motion.form>
      </div>
    </section>
  )
}
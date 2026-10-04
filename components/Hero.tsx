'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video background - replace with your Pexels/Coverr Nairobi aerial video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.pexels.com/photos/16122163/pexels-photo-16122163.jpeg?auto=compress&cs=tinysrgb&w=1920"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl px-6"
      >
        <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-4">Kenya's Trusted Media Production Company</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Your Premier <span className="text-amber-400">Media Partner</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          Professional drone services, media production, equipment rental, and digital marketing that elevate brands.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#contact" className="px-8 py-4 bg-amber-400 text-black font-semibold rounded-full hover:bg-amber-300 transition">
            Get a Free Quote
          </a>
          <a href="#services" className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition">
            Explore Services
          </a>
        </div>
      </motion.div>
    </section>
  )
}
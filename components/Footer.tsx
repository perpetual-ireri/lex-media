import { services } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-bold text-white mb-4">Lex<span className="text-amber-400">Media</span></div>
          <p className="text-white/50 text-sm leading-relaxed">Kenya's trusted media production company. We do it with you.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Services</h4>
          <ul className="space-y-2">
            {services.slice(0, 4).map(s => (
              <li key={s.title}><a href="#services" className="text-white/50 hover:text-amber-400 text-sm transition">{s.title}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#about" className="text-white/50 hover:text-amber-400 text-sm transition">About</a></li>
            <li><a href="#industries" className="text-white/50 hover:text-amber-400 text-sm transition">Industries</a></li>
            <li><a href="#process" className="text-white/50 hover:text-amber-400 text-sm transition">Process</a></li>
            <li><a href="#contact" className="text-white/50 hover:text-amber-400 text-sm transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-white/50 text-sm">
            <li>hello@lexmedia.co.ke</li>
            <li>+254 700 000 000</li>
            <li>Nairobi, Kenya</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} Lex Media. All rights reserved.
      </div>
    </footer>
  )
}
'use client'
import { useState } from 'react'
import { ShoppingCart, Check, X } from 'lucide-react'

type Equipment = {
  id: string
  name: string
  category: string
  specs: string[]
  price: number
  available: boolean
  badge?: string
}

const categories = [
  'All Equipment',
  'Cameras',
  'Lenses',
  'Tripods',
  'Stabilizers',
  'Lighting',
  'Audio',
  'Drones',
  'Livestreaming',
  'Accessories',
]

const equipment: Equipment[] = [
  // Cameras
  { id: 'fx3', name: 'Sony FX3 Cinema Camera', category: 'Cameras', specs: ['4K 120fps', 'S-Cinetone', 'Full-Frame', 'Compact body'], price: 6500, available: true },
  { id: 'a7iv', name: 'Sony A7 IV Full-Frame Camera', category: 'Cameras', specs: ['4K 60fps', '10-bit', '33MP', 'Includes kit lens'], price: 5000, available: true },
  { id: 'a7iii', name: 'Sony A7 III Mirrorless Camera', category: 'Cameras', specs: ['4K 30fps', '24MP', 'Full-Frame', 'Low-light ready'], price: 4000, available: true },
  { id: '90d', name: 'Canon 90D DSLR', category: 'Cameras', specs: ['4K video', '32.5MP', 'APS-C sensor', 'Reliable AF'], price: 3000, available: false },
  { id: '80d', name: 'Canon 80D DSLR', category: 'Cameras', specs: ['Full HD', 'Dual Pixel AF', 'APS-C', 'Versatile'], price: 2500, available: true },
  { id: 'd7500', name: 'Nikon D7500 DSLR', category: 'Cameras', specs: ['4K video', '20.9MP', 'APS-C', 'Robust'], price: 2500, available: true },
  { id: '800d', name: 'Canon 800D DSLR', category: 'Cameras', specs: ['Full HD', 'Dual Pixel AF', 'Lightweight', 'Interview ready'], price: 2200, available: true },
  { id: '250d', name: 'Canon 250D DSLR', category: 'Cameras', specs: ['4K video', '24MP', 'Compact', 'Beginner friendly'], price: 2000, available: true },

  // Lenses
  { id: 'sony85', name: 'Sony FE 85mm f/1.8', category: 'Lenses', specs: ['Portrait', 'Shallow DOF', 'Fast aperture', 'Full-Frame'], price: 1500, available: true },
  { id: 'sony70200', name: 'Sony FE 70-200mm f/2.8', category: 'Lenses', specs: ['Telephoto', 'Optical stabilisation', 'Fast aperture', 'Sports-ready'], price: 2500, available: true },
  { id: 'sony2870', name: 'Sony FE 28-70mm f/3.5-5.6', category: 'Lenses', specs: ['Walkaround zoom', 'Lightweight', 'Full-Frame', 'Everyday use'], price: 1500, available: true },
  { id: 'canon50', name: 'Canon EF 50mm f/1.8', category: 'Lenses', specs: ['Nifty fifty', 'Portrait', 'Fast aperture', 'Budget friendly'], price: 1000, available: true },
  { id: 'canonrf70200', name: 'Canon RF 70-200mm f/2.8', category: 'Lenses', specs: ['Telephoto', 'Fast aperture', 'Stabilised', 'Premium optics'], price: 2500, available: true },

  // Tripods
  { id: 'tripod', name: 'Professional Tripod', category: 'Tripods', specs: ['Fluid head', 'Smooth pan', 'Stable load', 'Easy setup'], price: 500, available: true },

  // Stabilizers
  { id: 'rs4', name: 'DJI RS4 Combo', category: 'Stabilizers', specs: ['3-axis stabiliser', '4.5kg payload', 'Pro kit', 'Mobile shooting'], price: 3000, available: true },

  // Lighting
  { id: 'amaran150c', name: 'Aputure Amaran 150C', category: 'Lighting', specs: ['Bi-color', '54W', 'Bowens mount', 'Wireless control'], price: 2000, available: true },
  { id: 'sl150iii', name: 'Godox SL 150 III', category: 'Lighting', specs: ['Daylight LED', '150W', 'Bowens mount', 'Quiet fan'], price: 2000, available: true },
  { id: 'amaran300c', name: 'Aputure Amaran 300C', category: 'Lighting', specs: ['300W', 'Bowens', 'Daylight', 'Studio quality'], price: 2800, available: true, badge: 'High output' },
  { id: 'sl300iii', name: 'Godox SL 300 III', category: 'Lighting', specs: ['300W', 'Daylight', 'Bowens mount', 'Studio ready'], price: 2800, available: true },
  { id: 'yn300', name: 'Yongnuo YN300 III', category: 'Lighting', specs: ['RGB + white', '60W', 'Portable', 'Budget friendly'], price: 500, available: true },
  { id: 'v1', name: 'Godox V1', category: 'Lighting', specs: ['TTL flash', 'Round head', 'Fast recycle', 'On-camera'], price: 800, available: true },
  { id: 'tt600', name: 'Godox TT600', category: 'Lighting', specs: ['Manual Flash', 'High output', 'Wireless', 'Studio use'], price: 500, available: true },
  { id: 'sk400', name: 'Godox SK400 II', category: 'Lighting', specs: ['400Ws', 'Fast recycle', 'Studio flash', 'High output'], price: 1000, available: true },
  { id: 'parabolic', name: 'Parabolic Softbox', category: 'Lighting', specs: ['Soft wrap', 'Portrait light', 'Bowens mount', 'Deep catchlight'], price: 800, available: true },
  { id: 'octagon', name: 'Octagon Softbox', category: 'Lighting', specs: ['Soft wrap', 'Wide coverage', 'Bowens mount', 'Studio grade'], price: 500, available: true },
  { id: 'beauty', name: 'Beauty Dish', category: 'Lighting', specs: ['Soft contrast', 'Portrait light', 'Bowens mount', 'Feature lighting'], price: 700, available: false },
  { id: 'lightstand', name: 'Standard Lightstand', category: 'Lighting', specs: ['Adjustable height', 'Stable support', 'Portable', 'Quick setup'], price: 200, available: true },
  { id: 'hdlightstand', name: 'Heavy Duty Lightstand', category: 'Lighting', specs: ['Extra sturdy', 'High load', 'Durable', 'Studio ready'], price: 300, available: true, badge: 'Heavy Duty' },

  // Audio
  { id: 'larkmax', name: 'Hollyland Lark Max Duo', category: 'Audio', specs: ['Dual wireless', 'Long range', 'Smart app', 'Interview ready'], price: 1500, available: true },
  { id: 'djimic2', name: 'DJI Mic 2', category: 'Audio', specs: ['Dual transmitters', 'Backup recorder', 'USB-C', 'Clear audio'], price: 2000, available: true },

  // Drones
  { id: 'air2s', name: 'DJI Air 2S', category: 'Drones', specs: ['1-inch sensor', '5.4K', 'Smart modes', 'KCAA compliant'], price: 10000, available: true, badge: 'Fly More Combo' },
  { id: 'rcpro', name: 'DJI RC Pro', category: 'Drones', specs: ['5.5-inch FHD screen', 'O3+ Video Transmission', 'Smooth Control', 'Mini-HDMI port'], price: 2000, available: true, badge: 'HDMI Output' },
  { id: 'djiRC', name: 'DJI Smart Controller', category: 'Drones', specs: ['5.5-inch FHD screen', 'Smooth Control', 'O3+ Video Transmission', '4-Hour Runtime'], price: 1000, available: true },

  // Livestreaming
  { id: 'yolobox', name: 'YoloLiv YoloBox Pro', category: 'Livestreaming', specs: ['Multi-platform', 'Switch + stream', 'Encoder built in', 'On-site live'], price: 5000, available: true },
  { id: 'mars400', name: 'Hollyland Mars 400S PRO', category: 'Livestreaming', specs: ['4K HDMI', '400ft range', 'Low latency', 'Live event ready'], price: 2500, available: true },
  { id: 'qkens', name: 'Qkens Wireless HDMI', category: 'Livestreaming', specs: ['Wireless video', 'Monitor support', 'Quick setup', 'Reliable feed'], price: 1500, available: true },

  // Accessories
  { id: 'sd128', name: 'SD Card 128GB', category: 'Accessories', specs: ['Fast write', 'Reliable', 'Camera ready'], price: 300, available: true },
  { id: 'sd256', name: 'SD Card 256GB', category: 'Accessories', specs: ['Extra capacity', '4K ready', 'Fast transfer'], price: 500, available: true },
  { id: 'nd', name: 'ND Filter', category: 'Accessories', specs: ['Neutral density', 'Exposure control', 'Cinematic look'], price: 500, available: true },
  { id: 'godoxX3', name: 'Godox X3 S Trigger', category: 'Accessories', specs: ['Wireless trigger', 'Multi-brand', 'TTL ready'], price: 500, available: true },
  { id: 'battery', name: 'Battery Pack', category: 'Accessories', specs: ['Portable power', 'Multiple charges', 'Field support'], price: 300, available: true },
]

const kits = [
  { icon: '🎙️', name: 'Podcast Kit', desc: 'Professional podcast production setup — Sony A7 IV with 85mm portrait lens, Hollyland wireless mics and a sturdy tripod. Ideal for podcasts, interviews and branded content.' },
  { icon: '🏠', name: 'Real Estate Kit', desc: 'Property photography and videography kit — Sony A7 IV, DJI RS4 gimbal for smooth walkthroughs, DJI Air 2S drone for aerial property views and a tripod.' },
  { icon: '🎥', name: 'Event Coverage Kit', desc: 'Full production set for weddings, events and live productions — Sony A7 IV, Hollyland wireless mics, DJI RS4 gimbal, aerial drone and tripod.' },
]

const features = [
  { title: 'Wide Equipment Selection', desc: 'Professional cameras, lighting, audio gear, drones, and accessories.' },
  { title: 'Professional Standards', desc: 'All equipment meets broadcast and production standards.' },
  { title: 'Tested & Maintained', desc: 'Every item is tested and cleaned between every hire.' },
  { title: 'Affordable Rates & Flexible Packages', desc: 'Daily, weekly, monthly, and custom packages available.' },
  { title: 'Fast Booking & Invoice', desc: 'Instant invoicing and quick approvals to keep your project moving.' },
  { title: 'Operator Available', desc: 'Add a trained operator to any hire — camera, drone, lighting, or sound.' },
  { title: 'On-Call Support', desc: 'Technical support available throughout your hire period.' },
  { title: 'Verified Rentals Only', desc: 'All rentals require ID verification to ensure security.' },
]

const process = [
  { step: '01', title: 'Browse & Add to Cart', desc: 'Select equipment from the catalogue. Add as many items as your project needs — your cart builds up in real time.' },
  { step: '02', title: 'Confirm & Book', desc: 'Log in, complete your booking, and an invoice is generated automatically and sent to your email.' },
  { step: '03', title: 'Collect or Deliver', desc: 'Pay in full or a 50% deposit to confirm. Collect from our Nairobi office or arrange delivery.' },
  { step: '04', title: 'Return & Done', desc: "Return equipment at the agreed time. We do a quick check-in together and that's it — simple, professional, no fuss." },
]

export default function Hire() {
  const [activeCategory, setActiveCategory] = useState('All Equipment')
  const [cart, setCart] = useState<string[]>([])
  const [cartOpen, setCartOpen] = useState(false)

  const filtered =
    activeCategory === 'All Equipment'
      ? equipment
      : equipment.filter((e) => e.category === activeCategory)

  const toggleCart = (id: string) => {
    setCart((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  const cartItems = equipment.filter((e) => cart.includes(e.id))
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div id="hire" className="bg-black min-h-screen text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Cinema camera"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-4">
            Equipment &amp; Crew Rental
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Broadcast-Grade Kit,
            <br />
            <span className="text-amber-400">Ready to Deploy</span>
          </h1>
          <p className="text-white/70 text-lg max-w-3xl leading-relaxed mb-8">
            Professional cameras, lenses, lighting, audio, drones, and accessories —
            meticulously maintained, tested before every hire, and available with or
            without our experienced operators.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#catalogue"
              className="px-8 py-4 bg-amber-400 text-black font-semibold rounded-full hover:bg-amber-300 transition"
            >
              Browse Catalogue
            </a>
            <a
              href="#"
              className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition"
            >
              Log In to Book
            </a>
          </div>
        </div>
      </section>

      {/* Why Hire From Us */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-white/5">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Hire From Us</h2>
        <p className="text-white/60 mb-12 max-w-3xl">
          Professional equipment, no ownership headache. The same gear our own productions use.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl bg-neutral-950 border border-white/10 hover:border-amber-400/40 transition"
            >
              <h3 className="text-base font-bold text-amber-400 mb-2">{f.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Kits */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Rental Kits</h2>
        <p className="text-white/60 mb-12 max-w-3xl">
          Not sure where to start? These pre-configured bundles cover the most common shoot types.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {kits.map((k, i) => (
            <div
              key={k.name}
              className="p-8 rounded-2xl bg-neutral-950 border border-white/10 flex flex-col"
            >
              <div className="text-4xl mb-4">{k.icon}</div>
              <div className="text-amber-400 text-sm font-mono mb-2">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-bold mb-3">{k.name}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">{k.desc}</p>
              <button className="text-amber-400 font-semibold hover:text-amber-300 transition text-sm self-start">
                Build Your Kit →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Equipment Catalogue */}
      <section id="catalogue" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Equipment Catalogue</h2>
        <p className="text-white/60 mb-8 max-w-3xl">
          Rates are daily unless stated. A 10% discount is applied at checkout. For
          extended hires, contact us for a custom package quote.
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition border ${
                activeCategory === cat
                  ? 'bg-amber-400 text-black border-amber-400'
                  : 'bg-transparent text-white/70 border-white/15 hover:border-amber-400/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Equipment grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => {
            const inCart = cart.includes(item.id)
            return (
              <div
                key={item.id}
                className={`relative p-6 rounded-2xl bg-neutral-950 border transition ${
                  item.available
                    ? 'border-white/10 hover:border-amber-400/50'
                    : 'border-white/5 opacity-60'
                }`}
              >
                {item.badge && (
                  <span className="absolute top-4 right-4 text-xs px-2 py-1 bg-amber-400/15 text-amber-400 rounded-full">
                    {item.badge}
                  </span>
                )}
                <span className="text-xs uppercase tracking-wider text-white/40">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold mt-1 mb-3">{item.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.specs.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-1 bg-white/5 rounded text-xs text-white/60"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <div>
                    <span className="text-amber-400 font-bold">
                      KES {item.price.toLocaleString()}
                    </span>
                    <span className="text-white/50 text-sm"> / day</span>
                  </div>
                  <button
                    onClick={() => item.available && toggleCart(item.id)}
                    disabled={!item.available}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                      !item.available
                        ? 'bg-white/5 text-white/30 cursor-not-allowed'
                        : inCart
                        ? 'bg-green-500 text-black'
                        : 'border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black'
                    }`}
                  >
                    {!item.available ? (
                      'Unavailable'
                    ) : inCart ? (
                      <span className="flex items-center gap-1">
                        <Check size={14} /> Added
                      </span>
                    ) : (
                      'Add to Cart'
                    )}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Simple Process */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">How Equipment Hire Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {process.map((p) => (
            <div key={p.step} className="p-6">
              <div className="text-6xl font-bold text-amber-400/20 mb-4">{p.step}</div>
              <h3 className="text-lg font-bold mb-3">{p.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ready to Book */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center border-t border-white/5">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book?</h2>
        <p className="text-white/70 mb-8 leading-relaxed">
          You&apos;ve built your cart. Create a free account or log in to set your hire
          dates, get an instant invoice, and confirm your booking.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-8 py-4 bg-amber-400 text-black font-semibold rounded-full hover:bg-amber-300 transition">
            Log In
          </button>
          <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition">
            Create Account
          </button>
        </div>
      </section>

      {/* Floating cart button */}
      {cart.length > 0 && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-3 px-6 py-4 bg-amber-400 text-black font-bold rounded-full shadow-2xl hover:bg-amber-300 transition"
        >
          <ShoppingCart size={20} />
          <span>
            {cart.length} item{cart.length > 1 ? 's' : ''}
          </span>
          <span className="pl-3 border-l border-black/20">
            KES {cartTotal.toLocaleString()}
          </span>
        </button>
      )}

      {/* Cart drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setCartOpen(false)}
          />
          <div className="relative w-full max-w-md bg-neutral-950 border-l border-white/10 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Your Cart</h3>
              <button
                onClick={() => setCartOpen(false)}
                className="text-white/60 hover:text-white"
                aria-label="Close cart"
              >
                <X size={22} />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <p className="text-white/50 text-sm">Your cart is empty.</p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start justify-between gap-4 p-4 rounded-lg bg-black border border-white/10"
                    >
                      <div className="flex-1">
                        <div className="font-semibold text-sm">{item.name}</div>
                        <div className="text-amber-400 text-sm mt-1">
                          KES {item.price.toLocaleString()} / day
                        </div>
                      </div>
                      <button
                        onClick={() => toggleCart(item.id)}
                        className="text-white/40 hover:text-red-400 transition"
                        aria-label="Remove item"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between mb-6">
                  <span className="text-white/60">Total per day</span>
                  <span className="text-xl font-bold text-amber-400">
                    KES {cartTotal.toLocaleString()}
                  </span>
                </div>
                <button className="w-full py-4 bg-amber-400 text-black font-semibold rounded-full hover:bg-amber-300 transition">
                  Log In to Checkout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
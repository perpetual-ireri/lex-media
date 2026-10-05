import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Hire from '@/components/Hire'

export const metadata: Metadata = {
  title: 'Equipment & Crew Rental | Lex Media',
  description:
    'Broadcast-grade cameras, lenses, lighting, audio, drones and accessories for hire in Nairobi, Kenya.',
}

export default function HirePage() {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <Hire />
      </div>
    </>
  )
}
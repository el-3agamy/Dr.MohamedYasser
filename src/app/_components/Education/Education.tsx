'use client'

import Image from 'next/image'
import "./Education.css";
import Certificate from './Certificate/Certificate';

const certificates = [
  { id: 1, title: 'Bachelor Of Dental Medicine', src: '/dr.jfif' },
  { id: 2, title: 'Master of Oral Surgery', src: '/dr.jfif' },
  { id: 3, title: 'Dental Implantology Certificate', src: '/dr.jfif' },
  { id: 4, title: 'Orthodontics Specialty', src: '/dr.jfif' },
  { id: 5, title: 'Cosmetic Dentistry Diploma', src: '/dr.jfif' },
]

export default function Education() {
    // Duplicate the array so the loop has seamless continuity
  const carouselItems = [...certificates, ...certificates]

  return (
    <section className="w-full overflow-hidden bg-emerald-900 py-8">
        {/* Scroll track container */}
      <div className="flex w-max animate-infinite-scroll">
        {carouselItems.map((item, index) => (
        <Certificate key={index} item={item} />
        ))}
      </div>
    </section>
  )
}
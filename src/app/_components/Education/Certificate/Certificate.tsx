import Image from 'next/image'
import React from 'react'

type CertificateProps = {
  item: {
    id: number
    title: string
    src: string
  }
}
export default function Certificate({item} :CertificateProps) {
    
  return (
    <>
          <figure  className="shrink-0 w-64 flex flex-col items-center text-center mx-4">
            {/* Wrapper div forcing 1:1 ratio */}
            <div className="w-[200px] h-[200px] relative rounded-full overflow-hidden border-4 border-white bg-amber-300 mx-auto hover:scale-105 transition-transform ease-in-out hover:cursor-pointer">
              <img
                src={item.src}
                alt={item.title}
                // fill
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-white font-medium">
              {item.title}
            </figcaption>
          </figure>
    </>
  )
}

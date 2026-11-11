import BranchCard from '@/app/_components/Locations/Branch/Branch';
import getBranchesData from '@/data/branchesData'
import { useTranslations } from 'next-intl';
import React from 'react'

export default function ContactUsPage() {
    const t = useTranslations("Locations") ;
  const branches = getBranchesData() ;
  return (
    <>
      <main className='pt-25 bg-white'>

        <section className='p-25 text-center bg-gold-100 text-emerald-600'>
            <h1 className=' font-bold text-3xl md:text-5xl mb-3'>{t("callUs")}</h1>
            <p>
            {/* <span className=' pb-2 relative after:absolute after:w-full after:h-0.5 after:bg-amber-500 after:bottom-0 after:inset-s-0'>الفروع والتواصل</span> */}
            </p>
        </section>

        <section>

          <h2 className='text-center py-10 '> 
            <span className='text-3xl md:text-5xl text-emerald-500 font-bold pb-0.75 relative after:absolute after:bottom-0 after:inset-s-0 after:w-full after:bg-amber-300  after:h-0.5'>{t("title")}</span> 
             </h2>

             <div className="p-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {branches?.map((branch , ind) => (
                      <BranchCard key={ind} {...branch} />
                    ))}
                  </div>

        </section>

      </main>
    </>
  )
}

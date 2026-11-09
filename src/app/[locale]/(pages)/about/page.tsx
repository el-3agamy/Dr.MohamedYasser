import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

export default function AboutPage() {
    const t = useTranslations("About")
    return (
        <main className='py-[200px] '>
            <section className='flex flex-col md:flex-row gap-5'>
                <article className=''>
                    <h1>{t("titleRest")}</h1>
                    <p>{t("bio")}</p>
                </article>

                <div className=' w-full h-72 md:h-96'>
                    <Image src={"/dr.jpeg"} fill alt='Dr. Mohammed Yasser'></Image>
                </div>
            </section>

            <section className='py-7 px-4 border rounded-[20px] border-emerald-200'>
                <h3>التخصص</h3>
                <span className='p-3 mx-[20p] text-[22px] font-semibold border rounded-[10px] border-emerald-400'>جراحة الفم والأسنان</span>
                <span className='p-3 mx-[20p] text-[22px] font-semibold border rounded-[10px] border-emerald-400'>جراحة الفم والأسنان</span>
                <span className='p-3 mx-[20p] text-[22px] font-semibold border rounded-[10px] border-emerald-400'>جراحة الفم والأسنان</span>
                <span className='p-3 mx-[20p] text-[22px] font-semibold border rounded-[10px] border-emerald-400'>جراحة الفم والأسنان</span>
            </section>

            <section className='py-7 px-4 border rounded-[20px] border-emerald-200'>
                <h3>الشهادات العلمية</h3>
                <ul className='list-diamond'>
                    <li>بكالوريوس في طب وجراحة الأسنان</li>
                    <li>بكالوريوس في طب وجراحة الأسنان</li>
                    <li>بكالوريوس في طب وجراحة الأسنان</li>
                    <li>بكالوريوس في طب وجراحة الأسنان</li>
                </ul>
            </section>

            <section className='py-7 px-4 border rounded-[20px] border-emerald-200'>
                <h3>العيادة</h3>
                <ul>
                      <li>فرع هليوبوليس  :<span>12 شارع جمال نوح، متفرع من شارع الثورة، مصر الجديدة، القاهرة، مصر</span></li>
                      <li>فرع هليوبوليس  :<span>12 شارع جمال نوح، متفرع من شارع الثورة، مصر الجديدة، القاهرة، مصر</span></li>
                      <li>فرع هليوبوليس  :<span>12 شارع جمال نوح، متفرع من شارع الثورة، مصر الجديدة، القاهرة، مصر</span></li>
                    
                </ul>
            </section>
        </main>
    )
}

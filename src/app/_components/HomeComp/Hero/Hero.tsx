import React from 'react'
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero") ;
  return (
    <>
        <section className='bg-emerald-100 flex justify-center items-center text-center font-bold text-4xl h-[100%]'>
            {/* <p>We are Here <br /> for You</p> */}
            <p>{t("title")}<br /> {t("subtitle")}</p>
        </section>
    </>
  )
}

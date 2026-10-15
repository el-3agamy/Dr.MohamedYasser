// import React from 'react'
// import { useTranslations } from "next-intl";

// export default function Hero() {
//   const t = useTranslations("Hero") ;
//   return (
//     <>
//         <section 
//                 className=' relative bg-emerald-800 text-ivory-100 flex justify-center items-center text-center 
//                 font-bold text-4xl h-[100%] '>
//             <video 
//                 src={"/backGroundVideo.mp4"}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 poster=''
//                 className='absloute'
//             >

//               <source src="/backGroundVideo.mp4" type='video/mp4'/>
//             </video>
//             <p>{t("title")}<br /> {t("subtitle")}</p>
//         </section>
//     </>
//   )
// }


import React from "react";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative isolate flex min-h-screen items-center
      justify-center overflow-hidden bg-emerald-950 px-6 text-center">

      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 -z-20 size-full object-cover "
      >
        <source src="/backGroundVideo.mp4" type="video/mp4" />
      </video>

      {/* Emerald overlay */}
      <div className="absolute inset-0 -z-10 bg-emerald-950/30" />

      {/* Hero content */}
      <div className="max-w-4xl text-ivory-100">
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          {t("title")}
        </h1>

        <p className="mt-4 text-lg font-medium md:text-2xl">
          {t("subtitle")}
        </p>
      </div>
    </section>
  );
}

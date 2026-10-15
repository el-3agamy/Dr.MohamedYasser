// import Image from 'next/image'
// import { useTranslations } from 'next-intl'
// export default function About() {

//   const t = useTranslations("About");
//   return (
//     <>
//       {/* Changed w-screen to w-full */}
//       <article className='w-full p-6 md:p-11 flex flex-col-reverse justify-center items-center   md:justify-around md:items-center md:flex-row gap-10 bg-emerald-200'>
//         <div className='flex-2 bg-amber-200'>
//           <p>
//             {
//               t("bio")
//             }
//           </p>
//         </div>
//         <div className='flex-1 bg-red-300'>
//           <Image className='mx-auto' src={"/t.jpg"}  width={380} height={300} alt='Dr. Mohamed Yasser' />
//           {/* <Image className='mx-auto' src={"/t.jpg"}  fill alt='Dr. Mohamed Yasser' /> */}
//           {/* <img className='mx-auto' src={"/t.jpg"}  alt='Dr. Mohamed Yasser' /> */}
//         </div>
//       </article>
//     </>
//   )
// },

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations("About");

  return (
    <>
      {/* <article className='w-full p-6 md:p-11 flex flex-col-reverse justify-center items-center md:justify-around md:items-center md:flex-row gap-10 bg-emerald-200'> */}
      <article className='relative w-full px-6 py-16 md:p-11 flex flex-col-reverse justify-center items-center md:justify-around md:items-center md:flex-row gap-10 bg-ivory-100'>
        
        {/* Bio Text */}
        <div className='flex-2 text-emerald-950 font-bold text-3xl p-4'>
          <p>
            {t("bio")}
          </p>
        </div>

        {/* Image Container */}
        {/* 1. Added 'relative', a height class (e.g., h-72 or h-80), and w-full */}
        <div className='md:flex-1 relative w-full h-72 md:h-96 bg-red-300 rounded-xl overflow-hidden'>
          <Image 
            src="/t.jpg" 
            fill 
            alt="Dr. Mohamed Yasser" 
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

      </article>
    </>
  );
}
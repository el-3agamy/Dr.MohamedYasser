import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations("About");

  return (
    <>
      <article id='about' className='relative w-full px-6 py-16 md:p-11 flex flex-col-reverse justify-center items-center md:justify-around md:items-center md:flex-row gap-10 bg-ivory-100'>

        {/* Bio Text */}
        <div className='flex-2 text-emerald-950 font-bold p-4'>
          <h1 className=' mb-11
          font-bold
          text-xl
          md:text-3xl
          text-emerald-900'>
            {t("titleRest")}

            <span className="
                        font-black
                        relative
                        pb-2
                        after:absolute
                        after:bottom-0
                        after:start-0
                        after:h-[2px]
                        after:w-full
                        after:bg-amber-400  "
                        
                        >
                          
                          {t("titleLined")}
                          
                          </span>
          </h1>
          <p className='text-[18px] md:text-xl '>
            {t("bio")}
          </p>
        </div>


        <div className='md:flex-1 relative w-full h-72 md:h-96 bg-red-300 rounded-xl overflow-hidden'>
          <Image
            src="/dr.jpeg"
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
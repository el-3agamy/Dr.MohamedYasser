import Image from 'next/image'
import { useTranslations } from 'next-intl'
export default function About() {

  const t = useTranslations("About");
  return (
    <>
      {/* Changed w-screen to w-full */}
      <article className='w-full p-6 md:p-11 flex flex-col-reverse justify-center items-center   md:justify-around md:items-center md:flex-row gap-10 bg-emerald-200'>
      {/* <article className="box-border w-full p-6 md:p-11
  flex flex-col-reverse justify-center items-center
  md:justify-around md:flex-row gap-10 bg-emerald-200"> */}
        <div className='flex-2 bg-amber-200'>
          <p>
            {
              t("bio")
            }
          </p>
        </div>
        <div className='flex-1'>
          <Image className='mx-auto' src={"/t.jpg"} width={300} height={300} alt='Dr. Mohamed Yasser' />
        </div>
      </article>
    </>
  )
}
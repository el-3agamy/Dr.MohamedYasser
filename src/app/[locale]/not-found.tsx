import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'


export default function MainNotFoundPage() {

const locale = useLocale()  ;
const t = useTranslations("MainNotFoundPage") ;
  return (
   <>
        <main className='h-screen  flex justify-center items-center text-2xl md:text-4xl font-bold  bg-emerald-100'>
          
                       <div>
                        
                          <Link href = { locale  == "en" ? "/en/" :  "/"} >
                          <button className='text-black px-4 py-2  border rounded-[5px] hover:cursor-pointer '> {t("MainNotFoundPageBtn")}</button>
                          </Link>
                        </div>          
            
        </main>
   </>
  )
}


// "use client"

// import { useState, useTransition } from 'react'
// import { submitToSheets } from '../../actions'
// import { useTranslations } from 'next-intl'

// export default function WhatsAppFrom() {
//   const t = useTranslations("Contact");
//   const [name, setName] = useState('')
//   const [whatsapp, setWhatsapp] = useState('')
//   const [statusMessage, setStatusMessage] = useState('')
//   const [isSuccess, setIsSuccess] = useState<boolean | null>(null)
//   const [isPending, startTransition] = useTransition()

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setStatusMessage('')
//     setIsSuccess(null)


//    


//     startTransition(async () => {
//       const result = await submitToSheets({ name, whatsapp })

//       if (result.success) {
//         setIsSuccess(true)
//         setStatusMessage(t("sucessStatusMsg"))
//         setName('')
//         setWhatsapp('')
//       } else {
//         setIsSuccess(false)
//         setStatusMessage(t("faildStatusMsg"))
//       }

//        setTimeout(() => {
//         setStatusMessage("") ;
//             setIsSuccess(null);
//       }, 3000);

//     })
//   }

//   return (
//     <>
//       <section className='w-screen py-16 flex flex-col gap-7 justify-center items-center bg-ivory-50' id='contact'>
//         <h1 className='
//                mb-11 
//                font-black
//                text-2xl
//                md:text-5xl
//                text-emerald-900
               
               
//                '>
//           <span
//             className=' relative
//                           pb-2
//                           after:absolute
//                           after:bottom-0
//                           after:start-0
//                           after:h-0.5
//                           after:w-full
//                           after:bg-amber-400'
//           >
//             {t("titleLined")}
//           </span>
//           {t("titleRest")}
//         </h1>
//         <div className='flex justify-center items-center w-screen'>
//           <form
//             onSubmit={handleSubmit}
//             className='mx-auto w-[80%] min-h-56 p-6 border border-emerald-300 rounded-2xl
//                     hover:border-emerald-500
//                     flex flex-col justify-center items-center gap-4
//                     relative
//                     bg-white
//            '>
//             <div className='w-[90%]'>
//               <input
//                 type="text"
//                 maxLength={21}
//                 minLength={3}
//                 autoComplete='name'
//                 required
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder={t("userNameInputPlaceholder")}
//                 className='bg-white w-full border border-emerald-200 rounded-[5px] py-[3px] px-[10px] focus:border-emerald-500 outline-0 focus:border-[2px]'
//               />
//             </div>

//             <div className='w-[90%]'>
//               <input

//                 type="tel"
//                 maxLength={11}
//                 minLength={11}
//                 autoComplete="tel-national"

//                 required
//                 inputMode='numeric'
//                 dir="auto"
//                 value={whatsapp}
//                 placeholder={t("whatsAppInputPlaceholder")}
//                 className='bg-white w-full border border-emerald-200 rounded-[5px] py-[3px] px-[10px] focus:border-emerald-500 outline-0 focus:border-[2px] text-right rtl:text-right'
//                 onInput={(e) => {
//                   const cleaned = e.currentTarget.value.replace(/\D/g, '');
//                   setWhatsapp(cleaned);
//                 }}
//                 
//               />
//             </div>

//             <div className='w-[90%] mt-2'>
//               <button
//                 type="submit"
//                 disabled={isPending}
//                 className='w-full bg-emerald-700 hover:cursor-pointer hover:bg-emerald-800 text-white font-medium py-2 px-4 rounded-[5px] transition-colors disabled:opacity-50'
//               >
//                 {isPending ? 'Sending...' : t("btn")}
//               </button>
//             </div>

//             {statusMessage && (
//               <p  className={`text-[18px] mt-2 font-medium absolute bg-ivory-100  w-[110%] h-[150%] md:text-3xl  flex justify-center items-center  ${isSuccess ? 'text-emerald-700' : 'text-red-600'}`}>
//                 {statusMessage}
//               </p>
//             )}

//           </form>
//         </div>
//       </section>
//     </>
//   )
// }


"use client"

import { useEffect, useRef, useState, useTransition } from "react"
import { submitToSheets } from "../../actions"
import { useTranslations } from "next-intl"

type Feedback = {
  success: boolean
  message: string
} | null

export default function WhatsAppFrom() {
  const t = useTranslations("Contact")

  const [name, setName] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [feedback, setFeedback] = useState<Feedback>(null)
  const [isPending, startTransition] = useTransition()
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const showFeedback = (success: boolean, message: string) => {
    if (timerRef.current) clearTimeout(timerRef.current)

    setFeedback({ success, message })

    timerRef.current = setTimeout(() => {
      setFeedback(null)
      timerRef.current = null
    }, 3000)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isPending) return

    const cleanName = name.trim()

    // Arabic/English letters, with optional spaces, apostrophes or hyphens.
    const validName =
      /^[\u0621-\u064A\u066E-\u06D3\u06FA-\u06FCa-zA-Z]+(?:[ '-][\u0621-\u064A\u066E-\u06D3\u06FA-\u06FCa-zA-Z]+)*$/.test(cleanName)

    // Egyptian mobile numbers: 010, 011, 012 or 015 + 8 digits.
    const validPhone = /^01[0125]\d{8}$/.test(whatsapp)

    if (!validName || cleanName.length < 3 || cleanName.length > 21) {
      showFeedback(false,  t("nameInputValidation"))
      return
    }

    if (!validPhone) {
      showFeedback(
        false,
        t("whatsappNumberValidation")
      )
      return
    }

    startTransition(async () => {
      try {
        const result = await submitToSheets({
          name: cleanName,
          whatsapp,
        })

        if (result.success) {
          setName("")
          setWhatsapp("")
          showFeedback(true, t("sucessStatusMsg"))
        } else {
          showFeedback(false, t("faildStatusMsg"))
        }
      } catch {
        showFeedback(false, t("faildStatusMsg"))
      }
    })
  }

  return (
    <section
      className="w-screen py-16 flex flex-col gap-7 justify-center items-center bg-ivory-50"
      id="contact"
    >
      <h2 className="mb-11 font-black text-2xl md:text-5xl text-emerald-900">
        <span className="relative pb-2 after:absolute after:bottom-0 after:start-0 after:h-0.5 after:w-full after:bg-amber-400">
          {t("titleLined")}
        </span>
        {t("titleRest")}
      </h2>

      <div className="flex justify-center items-center w-full">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto w-[80%] min-h-56 p-6 border border-emerald-300 rounded-2xl hover:border-emerald-500 flex flex-col justify-center items-center gap-4 relative bg-white"
        >
          <div className="w-[90%]">
            <input
              type="text"
              maxLength={21}
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("userNameInputPlaceholder")}
              aria-label={t("userNameInputPlaceholder")}
              className="bg-white w-full border border-emerald-200 rounded-[5px] py-[3px] px-[10px] focus:border-emerald-500 outline-0 focus:border-2"
            />
          </div>

          <div className="w-[90%]">
            <input
              type="tel"
              maxLength={11}
              autoComplete="tel-national"
              required
              inputMode="numeric"
              dir="auto"
              value={whatsapp}
              onChange={(e) =>
                setWhatsapp(e.target.value.replace(/\D/g, "").slice(0, 11))
              }
              placeholder={t("whatsAppInputPlaceholder")}
              aria-label={t("whatsAppInputPlaceholder")}
              className="bg-white w-full border border-emerald-200 rounded-[5px] py-[3px] px-[10px] focus:border-emerald-500 outline-0 focus:border-2 text-right rtl:text-right"
            />
          </div>



          <div className="w-[90%] mt-2">
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-emerald-700 hover:cursor-pointer hover:bg-emerald-800 text-white font-medium py-2 px-4 rounded-[5px] transition-colors disabled:opacity-50"
            >
              {isPending ? "Sending..." : t("btn")}
            </button>
          </div>
        </form>
      </div>

      {feedback && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          role="alertdialog"
          aria-modal="true"
          aria-live="assertive"
        >
          <div className="w-full max-w-md rounded-2xl bg-ivory-50 p-8 text-center shadow-2xl">
            <p
              className={`text-lg md:text-2xl font-semibold ${
                feedback.success ? "text-emerald-700" : "text-red-600"
              }`}
            >
              {feedback.message}
            </p>

            <button
              type="button"
              onClick={() => {
                if (timerRef.current) clearTimeout(timerRef.current)
                timerRef.current = null
                setFeedback(null)
              }}
              className="mt-6 rounded-lg bg-emerald-700 px-6 py-2 text-white hover:bg-emerald-800"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
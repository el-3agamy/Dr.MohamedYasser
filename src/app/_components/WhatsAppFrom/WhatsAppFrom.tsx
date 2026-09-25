// "use client"
// export default function WhatsAppFrom() {
//   return (
//     <>
//       <section className='w-screen py-16 flex flex-col gap-7 justify-center items-center bg-emerald-50'>
//         <h2 className='mb-11 text-2xl font-bold text-emerald-800
//               relative
//               after:absolute
//               after:bottom-0
//               after:left-0
//               after:h-[2px]
//               after:w-[70px]
//              after:bg-amber-200
//          '>
//           Contact Us.
//         </h2>
//         <div className='  flex justify-center items-center w-screen '>
//           <form action=""
//             className='mx-auto w-[80%] h-56 border border-emerald-300 rounded-2xl
//                     hover:border-emerald-500 hover:cursor-pointer
//                       flex flex-col justify-center items-center gap-4
//                       relative
//                       bg-white
//            '>
//             <div className='w-[90%] '>
//               <input type="text" placeholder='Enter Your Full Name'
//                 className='bg-white w-full border  border-emerald-200 rounded-[5px] py-[3px] px-[10px] focus:border-emerald-500 outline-0 focus:border-[2px]'
//               />
//             </div>
//             <div className='w-[90%] '>
//               <input type="tel" inputMode='numeric' placeholder="Enter Your What's App Number"
//                 className='bg-white w-full border border-emerald-200 rounded-[5px] py-[3px] px-[10px] focus:border-emerald-500 outline-0 focus:border-[2px]'
//                 onInput={(e) => {
//                   e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '');
//                 }}
//               />
//             </div>
//           </form>
//         </div>
//       </section>
//     </>
//   )
// }


"use client"

import { useState, useTransition } from 'react'
import { submitToSheets } from '../../actions' // Make sure the path matches your actions.ts file

export default function WhatsAppFrom() {
  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [statusMessage, setStatusMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null)
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatusMessage('')
    setIsSuccess(null)

    startTransition(async () => {
      const result = await submitToSheets({ name, whatsapp })

      if (result.success) {
        setIsSuccess(true)
        setStatusMessage('Thank you! Your details have been saved.')
        setName('')
        setWhatsapp('')
      } else {
        setIsSuccess(false)
        setStatusMessage('Something went wrong. Please try again.')
      }
    })
  }

  return (
    <>
      <section className='w-screen py-16 flex flex-col gap-7 justify-center items-center bg-emerald-50'>
        <h2 className='mb-11 text-2xl font-bold text-emerald-800
              relative
              after:absolute
              after:bottom-0
              after:left-0
              after:h-[2px]
              after:w-[70px]
              after:bg-amber-200
         '>
          Contact Us.
        </h2>
        <div className='flex justify-center items-center w-screen'>
          <form 
            onSubmit={handleSubmit}
            className='mx-auto w-[80%] min-h-56 p-6 border border-emerald-300 rounded-2xl
                    hover:border-emerald-500
                    flex flex-col justify-center items-center gap-4
                    relative
                    bg-white
           '>
            <div className='w-[90%]'>
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter Your Full Name'
                className='bg-white w-full border border-emerald-200 rounded-[5px] py-[3px] px-[10px] focus:border-emerald-500 outline-0 focus:border-[2px]'
              />
            </div>
            
            <div className='w-[90%]'>
              <input 
                type="tel" 
                required
                inputMode='numeric' 
                value={whatsapp}
                placeholder="Enter Your What's App Number"
                className='bg-white w-full border border-emerald-200 rounded-[5px] py-[3px] px-[10px] focus:border-emerald-500 outline-0 focus:border-[2px]'
                onInput={(e) => {
                  const cleaned = e.currentTarget.value.replace(/\D/g, '');
                  setWhatsapp(cleaned);
                }}
              />
            </div>

            <div className='w-[90%] mt-2'>
              <button
                type="submit"
                disabled={isPending}
                className='w-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-2 px-4 rounded-[5px] transition-colors disabled:opacity-50'
              >
                {isPending ? 'Sending...' : 'Submit'}
              </button>
            </div>

            {statusMessage && (
              <p className={`text-sm mt-2 font-medium ${isSuccess ? 'text-emerald-700' : 'text-red-600'}`}>
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  )
}
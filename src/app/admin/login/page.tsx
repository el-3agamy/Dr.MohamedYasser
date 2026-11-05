import React from 'react'

export default function Login() {
  return (
    <>
      <main className='h-screen w-screen flex justify-center items-center'>
        <section className="bg-emerald-300 rounded-2xl w-[350px] md:w-[450px] h-[450px] md:h[450px]   flex justify-center items-center flex-col gap-y-5">
          <h1 className='text-3xl md:text-5xl font-bold'>Login</h1>
          <form className='p-7 w-full flex flex-col gap-y-10' action="">

              <div className='bg-white'>
                <input className='w-full p-2 bg-white outline-0  rounded-[3px]' type="email" placeholder='Enter Your Email' />
              </div>

              <div className='w-full'>
                <input className='bg-white p-2  rounded-[3px] outline-0  focus:border focus:border-amber-200 w-full' type="password" placeholder='Enter Password' />
              </div>

          </form>
        </section>
      </main>
    </>
  )
}

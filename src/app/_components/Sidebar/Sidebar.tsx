import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <aside className='bg-emerald-200 min-h-screen w-[20%]'>
      <nav>
        <ul className='py-10 flex flex-col gap-y-2 justify-center items-cener w-full bg-red-200 text-center'>
          <li>
            <Link href={"
              
              dashboard"} >DashBoard</Link>
          </li>
          <li>
            <Link href={"patient"}  >Patient</Link>
          </li>
          <li>
            <Link href={"appointment"} >Appointment</Link>
          </li>
          <li>
            <Link href={"reports"} >Reports</Link>
          </li>
          <li>
            <Link href={"another"} >Another</Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

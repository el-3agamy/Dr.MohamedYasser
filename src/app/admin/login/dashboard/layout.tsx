import Sidebar from '@/app/_components/Sidebar/Sidebar'
import React from 'react'

export default function DashboardLayout({children} : {children : React.ReactNode}) {
  return (
    <html lang='en' dir='ltr'>
        <head>

        </head>
        <body >
          
          <div className="container min-w-screen flex ">
            <Sidebar />
          <main className= ' bg-amber-200 min-h-screen w-[80%] '>

            {
                children
            }

          </main>
          </div>
        </body>
    </html>
  )
}

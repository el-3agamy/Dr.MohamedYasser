import React from 'react'

export default function Layout({children} : {children : React.ReactNode}) {
  return (
    <html lang='ar' dir='rtl'>
        <head>

        </head>
        <body >
            {
                children
            }
        </body>
    </html>
  )
}

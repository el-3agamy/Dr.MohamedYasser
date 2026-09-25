import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <>
      {/* Changed w-screen to w-full */}
      <article className='p-11 w-screen flex justify-around items-center gap-10 bg-emerald-700'>
        <div className='flex-2'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Aliquam fuga, possimus tenetur numquam aperiam id blanditiis
            maiores nostrum repellat voluptates vel natus fugit veritatis 
            amet illum nisi velit a culpa unde dolores earum aliquid non sit.
            Veniam saepe inventore distinctio, a voluptates illo quidem reprehenderit
            commodi! Cum molestiae nobis doloribus hic quasi consequuntur quibusdam vel
            praesentium animi. Itaque animi doloremque veniam nihil ipsum repudiandae 
            harum dolore cum voluptas error perspiciatis suscipit consequuntur saepe sint 
            iure vitae cupiditate sapiente sed, dolores eius fugit et aliquid ipsam quia. 
            Facilis asperiores saepe nobis reprehenderit,
          </p>
        </div>
        <div className='flex-1 bg-amber-300'>
          <Image className='mx-auto' src={"/dr.jfif"} width={300} height={300} alt='Dr. Mohamed Yasser' />
        </div>
      </article>
    </>
  )
}
import Image from 'next/image'
import { serviceObjType } from '../Services'

export default function ServiceCard({ obj }: {obj:serviceObjType}) {
    return (
        <>
            <article className='overflow-hidden   w-[350px] h-[350px] border rounded-3xl border-emerald-400 px-2.5 py-3.5 '>
                <div className="innerOfCard mx-auto hover:cursor-pointer">
                    <figure className='flex flex-col justify-center gap-y-3'>
                        <div className='relative w-full h-[180px] mx-auto  '>
                            <Image src="/t.jpg" fill  alt="service we offer" />
                        </div>
                        <figcaption>
                            <h2 className='text-2xl font-bold text-emerald-800'>{obj.title}</h2>
                            {obj.body}
                        </figcaption>
                    </figure>
                </div>
            </article>
        </>
    )
}

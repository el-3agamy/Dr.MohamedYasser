import React from 'react'
import ServiceCard from './ServiceCard/ServiceCard'

 export type serviceObjType = {
    id : number ,
    title: string ,
    body : string
} ;
export default function Services() {

    const servicesObjArr : serviceObjType []= [
        {
            id: 1 ,
            title : "Service One" ,
            body : `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officia atque, dolorum architecto quae itaque nostrum et deserunt alias dicta.`
        } , 
        {
            id: 2 ,
            title : "Service Two" ,
            body : `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officia atque, dolorum architecto quae itaque nostrum et deserunt alias dicta.`
        } , 
        {
            id: 3 ,
            title : "Service Three" ,
            body : `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officia atque, dolorum architecto quae itaque nostrum et deserunt alias dicta.`
        } , 
        {
            id: 4 ,
            title : "Service Four" ,
            body : `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officia atque, dolorum architecto quae itaque nostrum et deserunt alias dicta.`
        } , 
        {
            id: 5,
            title : "Service Five" ,
            body : `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officia atque, dolorum architecto quae itaque nostrum et deserunt alias dicta.`
        } , 
    ]
  return (
    <>
        <section className='flex flex-col items-center justify-center gap-y-1 '>
            <h2 className='relative text-center font-bold text-2xl 
             text-emerald-500 after:absolute
                after:bottom-0 after:left-0 after:h-0.5 after:w-[100px]  after:bg-amber-300
             '>
                Services We offer
            </h2>
            <div className=" flex-wrap flex justify-start  my-5  w-full px-20 items-center gap-6">
              {
                    servicesObjArr.map((obj )=>{

                        return(
                            <>
                                <ServiceCard  key={obj.id} obj ={obj}/>
                            </>
                        )
                    })
              }
          
            </div>
        </section>
    </>
  )
}

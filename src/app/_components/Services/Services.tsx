// import React from 'react'
// import ServiceCard from './ServiceCard/ServiceCard'
// import { useTranslations } from 'next-intl';

//  export type serviceObjType = {
//     id : number ,
//     title: string ,
//     body : string
// } ;
// export default function Services() {
//     const t = useTranslations("Services");
//     const servicesObjArr : serviceObjType []= [
//         {
//             id: 1 ,
//             title : "Service One" ,
//             body : `Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Officia atque, dolorum architecto quae itaque nostrum et deserunt alias dicta.`
//         } , 
//         {
//             id: 2 ,
//             title : "Service Two" ,
//             body : `Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Officia atque, dolorum architecto quae itaque nostrum et deserunt alias dicta.`
//         } , 
//         {
//             id: 3 ,
//             title : "Service Three" ,
//             body : `Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Officia atque, dolorum architecto quae itaque nostrum et deserunt alias dicta.`
//         } , 
//         {
//             id: 4 ,
//             title : "Service Four" ,
//             body : `Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Officia atque, dolorum architecto quae itaque nostrum et deserunt alias dicta.`
//         } , 
//         {
//             id: 5,
//             title : "Service Five" ,
//             body : `Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Officia atque, dolorum architecto quae itaque nostrum et deserunt alias dicta.`
//         } , 
//     ]
//   return (
//     <>
//         <section className='flex flex-col items-center justify-center gap-y-1 '>
//             <h2 className='relative text-center font-bold text-2xl 
//              text-emerald-500 after:absolute
//                 after:bottom-0 after:left-0 after:h-0.5 after:w-[100px]  after:bg-amber-300'>
//                 {t("title")}
//             </h2>
//             <div className=" flex-wrap flex justify-start  items-center my-5  w-full px-10  gap-6 mx-auto ">
//               {
//                     servicesObjArr.map((obj )=>{

//                         return(

//                                 <ServiceCard  key={obj.id} obj ={obj}/>
//                         )
//                     })
//               }

//             </div>
//         </section>
//     </>
//   )
// }


import ServiceCard from './ServiceCard/ServiceCard'
import { useTranslations } from 'next-intl';

export type serviceObjType = {
    id: number;
    title: string;
    body: string;
};

export default function Services() {
    const t = useTranslations("Services");

    const servicesObjArr: serviceObjType[] = [
        {
            id: 1,
            title: t("serviceOne.tit"),
            body: t("serviceOne.desc")
        },
        {
            id: 2,
            title: t("serviceTwo.tit"),
            body: t("serviceTwo.desc")
        },
        {
            id: 3,
            title: t("serviceThree.tit"),
            body: t("serviceThree.desc")
        },
        {
            id: 4,
            title: t("serviceFour.tit"),
            body: t("serviceFour.desc")
        },
        {
            id: 5,
            title: t("serviceFive.tit"),
            body: t("serviceFive.desc")
        },
    ];

    return (
        <>
            <section className='flex flex-col items-center justify-center gap-y-1 py-16 px-3 bg-ivory-100' id='services'>

                <h1 className='  text-emerald-900 text-2xl md:text-5xl font-black  mb-10'>
                    <span
                        className='relative after:absolute after:start-0 after:bottom-0 after:h-0.5 after:w-full  pb-2 after:bg-amber-400'
                    >
                        {t("titleLined")}
                    </span>
                    {" "}
                    {t("titleRest")}
                </h1>
                {/* DESCRIPTION */}
                <p
                    className="text-center md:text-[18px] text-[12px] font-bold  md:p-0 "
                >


                    {t("desc1")}
                    <br />
                    {t("desc2")}

                </p>
                <div className="flex-wrap flex justify-start items-center my-5 w-full px-10 gap-6 mx-auto">
                    {
                        servicesObjArr.map((obj) => {
                            return (
                                <ServiceCard key={obj.id} obj={obj} />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}



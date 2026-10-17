"use client";
import ServiceCard from './ServiceCard/ServiceCard'
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { getServicesObjArr } from "../../../data/servicesData";
export type serviceObjType = {
    id: number;
    title: string;
    body: string;
    img: string,
    discover: string
};


export default function Services() {
    const locale = useLocale();
    const t = useTranslations("Services");
    const servicesObjArr = getServicesObjArr(t);


    return (
        <>
            <section 
                className='flex flex-col items-center justify-center gap-y-1 py-16 px-3 bg-ivory-100' id='services'>

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

                {/* =================== Cards Container ============= */}
                {/* <div className='bg-emerald-500 flex flex-col justify-center items-center'> */}
                    <div className=" flex flex-col items-center justify-center flex-wrap md:flex-row md:justify-start   my-5  md:w-275  md:px-0  gap-6 ">
                    {servicesObjArr.map((obj) => (
                        <ServiceCard
                            key={obj.id}
                            obj={obj}
                            href={`/${locale}/services/${obj.id}`}
                        />
                    ))}
                </div>
                {/* </div> */}
            </section>
        </>
    )
}



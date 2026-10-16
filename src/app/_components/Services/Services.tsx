"use client";
import { usePathname } from 'next/navigation';
import ServiceCard from './ServiceCard/ServiceCard'
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useLocale } from "next-intl";
export type serviceObjType = {
    id: number;
    title: string;
    body: string;
    img: string,
    discover: string
};

const navigateToSpecificService = () => {
    const path = usePathname();
}
export default function Services() {
    const locale = useLocale();
    const t = useTranslations("Services");

    const servicesObjArr: serviceObjType[] = [
        {
            id: 1,
            title: t("serviceOne.tit"),
            body: t("serviceOne.desc"),
            img: "/brace.jpg",
            discover: t("serviceOne.discover")
        },
        {
            id: 2,
            title: t("serviceTwo.tit"),
            body: t("serviceTwo.desc"),
            img: "/bridge.jpg",
            discover: t("serviceOne.discover")
        },
        {
            id: 3,
            title: t("serviceThree.tit"),
            body: t("serviceThree.desc"),
            img: "/child.jpg",
            discover: t("serviceOne.discover")
        },
        {
            id: 4,
            title: t("serviceFour.tit"),
            body: t("serviceFour.desc"),
            img: "/rootCare.jpg",
            discover: t("serviceOne.discover")
        },
        {
            id: 5,
            title: t("serviceFive.tit"),
            body: t("serviceFive.desc"),
            img: "/white.png",
            discover: t("serviceOne.discover")
        },
        {
            id: 6,
            title: t("serviceSix.tit"),
            body: t("serviceSix.desc"),
            img: "/pain.jpg",
            discover: t("serviceOne.discover")
        },
    ];

    return (
        <>
            <section onClick={() => { }}
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
                <div className="flex-wrap flex justify-start items-center my-5 w-full px-10 gap-6 mx-auto">
                    {servicesObjArr.map((obj) => (
                        <ServiceCard
                            key={obj.id}
                            obj={obj}
                            href={`/${locale}/services/${obj.id}`}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}



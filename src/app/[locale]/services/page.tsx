
"use client";
import "./servicesPage.css" ;

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { getServicesObjArr } from "@/data/servicesData";

export default function ServicesPage() {
    const locale = useLocale();
    const t = useTranslations("Services");
    const services = getServicesObjArr(t);

    return (
        <main className="bg-[#FAF9F4] text-slate-800 overflow-hidden">

            {/* HERO */}
            <section className="relative pt-36 pb-4 px-5">
                <div className="absolute top-20 -end-32 w-96 h-96 rounded-full bg-emerald-100/50 blur-3xl" />

                <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

                    <div className="reveal-up">
                       

                        <h1 className="mt-5 text-3xl md:text-5xl font-black leading-tight text-emerald-950">
                            {t("titleLined")}{" "}
                            <span className="text-emerald-600">
                                {t("titleRest")}
                                
                            </span>
                        </h1>

                        <div className="w-20 h-1 bg-amber-400 mt-7 mb-7 rounded-full" />

                        <p className="text-slate-600 text-base md:text-lg leading-9 max-w-xl">
                            {t("servicesPageP")}
                        </p>

                        <Link
                            href={`/${locale}#contact`}
                            className="inline-flex mt-9 px-8 py-4 rounded-xl bg-emerald-800 text-white font-semibold hover:bg-emerald-700 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-emerald-900/10"
                        >
                           {t("bookServicePageBtn")}
                        </Link>
                    </div>

                    <div className="relative h-[350px] md:h-[520px] reveal-up">
                        <div className="absolute inset-5 bg-emerald-800 rounded-[40px] rotate-3" />

                        <div className="absolute inset-0 overflow-hidden rounded-[40px] shadow-2xl">
                            <Image
                                src="/servicesCovers/implementCover.jpg"
                                alt="Dental treatments"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                       
                    </div>
                </div>
            </section>

            {/* SERVICES SHOWCASE */}
            <section className="pb-24 pt-10 px-5">
                <div className="max-w-7xl mx-auto">

                    <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-5 reveal-up">
                       

                        <p className="max-w-md text-slate-500 leading-8">
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {services.map((service, index) => (
                            <Link
                                key={service.id}
                                href={`/${locale}/services/${service.id}`}
                                className={`service-reveal group block ${
                                    index % 3 === 1 ? "lg:translate-y-12" : ""
                                }`}
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                }}
                            >
                                <article className="relative h-[430px] overflow-hidden rounded-[28px] bg-emerald-950 shadow-sm hover:shadow-2xl hover:shadow-emerald-950/15 transition-all duration-500 hover:-translate-y-2">

                                    <Image
                                        src={service.img}
                                        alt={service.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/30 to-transparent opacity-90" />

                                    <span className="absolute top-6 end-6 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-emerald-900 font-bold">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <div className="absolute bottom-0 start-0 end-0 p-7 text-white">
                                        <div className="w-10 h-[3px] bg-amber-400 mb-5 group-hover:w-20 transition-all duration-500" />

                                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                            {service.title}
                                        </h3>

                                        <p className="text-white/75 leading-7 line-clamp-2">
                                            {service.body}
                                        </p>

                                        <div className="mt-6 flex items-center gap-3 text-amber-300 font-semibold">
                                            <span>{service.discover}</span>
                                            <span className="group-hover:-translate-x-2 transition-transform duration-300">
                                                {t("arrowDiscoverMore")}
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="relative bg-emerald-950 py-24 px-5 overflow-hidden">
                <div className="absolute -top-40 -end-40 w-96 h-96 rounded-full border border-emerald-700/40" />
                <div className="absolute -bottom-48 -start-32 w-96 h-96 rounded-full border border-emerald-700/40" />

                <div className="relative max-w-7xl mx-auto text-center reveal-up">
                    

                    <h2 className="text-3xl md:text-5xl font-black text-white mt-5 mb-8">
                        {t("whyUsTitle")}
                    </h2>

                    <p className="max-w-2xl mx-auto text-emerald-100/70 leading-9">
                       {t("whyUsP")}
                    </p>

                    <Link
                        href={`/${locale}#contact`}
                        className="inline-flex mt-9 px-9 py-4 rounded-xl bg-amber-400 text-emerald-950 font-bold hover:bg-amber-300 hover:-translate-y-1 transition-all duration-300"
                    >
                        {t("bookServicePageBtn")}
                    </Link>
                </div>
            </section>

        </main>
    );
}


import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

export default function AboutPage() {
    const t = useTranslations("About") ;

    const specialties = [
        "جراحة الفم والأسنان",
        "زراعة الأسنان",
        "تقويم الأسنان",
        "تجميل الأسنان",
    ]

    const certificates = [
        "بكالوريوس في طب وجراحة الأسنان",
        "ماجستير في جراحة الفم والأسنان",
        "شهادات متخصصة في زراعة الأسنان",
        "التدريب المستمر في أحدث التقنيات الطبية",
    ]

    const clinics = [
        {
            name: "فرع مصر الجديدة",
            address: "12 شارع جمال نوح، متفرع من شارع الثورة، مصر الجديدة، القاهرة، مصر",
        },
        {
            name: "فرع طنطا",
            address: "طنطا، محافظة الغربية، مصر",
        },
    ]

    return (
        <main
            // dir="rtl"
            className="py-10 min-h-screen bg-[#FAFCFA] text-slate-800"
        >
            <div className="max-w-7xl mx-auto px-5 md:px-10 pt-32 pb-24">

                {/* Hero */}
                <section className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-28">

                    <div className="order-2 md:order-1 space-y-7">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            تعرف على الطبيب
                        </div>

                        <div className="space-y-4">
                            <h1 className='text-2xl md:text-3xl font-semibold'>
                                {t("titleRest")} <span className="text-3xl md:text-5xl  font-bold leading-tight text-slate-900">{t("titleLined")}</span>
                            </h1>

                            <div className="w-20 h-1 rounded-full bg-emerald-500" />

                            <p className="text-lg leading-9 text-slate-600 max-w-xl">
                                {t("bio")}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <span className="px-5 py-3 rounded-xl bg-emerald-700 text-white text-sm font-semibold">
                                خبرة واحترافية
                            </span>
                            <span className="px-5 py-3 rounded-xl border border-emerald-200 text-emerald-800 text-sm font-semibold">
                                رعاية طبية متخصصة
                            </span>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 relative">
                        <div className="absolute -top-5 -right-5 w-32 h-32 bg-emerald-100 rounded-full blur-2xl opacity-70" />
                        <div className="relative h-[380px] md:h-[520px] rounded-[32px] overflow-hidden border-[6px] border-white shadow-xl">
                            <Image
                                src="/dr.jpeg"
                                fill
                                priority
                                alt="Dr. Mohammed Yasser"
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white shadow-lg border border-emerald-100 rounded-2xl p-5">
                            <p className="text-sm text-slate-500">التخصص الرئيسي</p>
                            <p className="text-emerald-800 font-bold mt-1">
                                طب وجراحة الأسنان
                            </p>
                        </div>
                    </div>
                </section>

                {/* Specialties */}
                <section className="mb-24">
                    <div className="mb-9">
                        <p className="text-emerald-600 text-sm font-semibold mb-3">
                            مجالات الخبرة
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            التخصصات الطبية
                        </h2>
                        <p className="text-slate-500 mt-3">
                            مجموعة من الخدمات والتخصصات لتقديم رعاية متكاملة.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {specialties.map((item, index) => (
                            <div
                                key={index}
                                className="group p-7 bg-white border border-emerald-100 rounded-2xl hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 text-xl font-bold mb-6 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <h3 className="text-lg font-bold text-slate-800">
                                    {item}
                                </h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education */}
                <section className="mb-24">
                    <div className="bg-emerald-950 rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="absolute -left-20 -top-20 w-72 h-72 bg-emerald-700/30 rounded-full blur-3xl" />

                        <div className="relative">
                            <p className="text-emerald-300 text-sm font-semibold mb-3">
                                المسيرة الأكاديمية
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-10">
                                الشهادات العلمية
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                {certificates.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-4 items-start p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                    >
                                        <div className="shrink-0 w-9 h-9 rounded-full bg-emerald-400/15 text-emerald-300 flex items-center justify-center font-bold">
                                            ✓
                                        </div>
                                        <p className="leading-8 text-emerald-50">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Clinics */}
                <section>
                    <div className="mb-9">
                        <p className="text-emerald-600 text-sm font-semibold mb-3">
                            مواقعنا
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            فروع العيادة
                        </h2>
                        <p className="text-slate-500 mt-3">
                            نسعد باستقبالكم في فروعنا.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {clinics.map((clinic, index) => (
                            <article
                                key={index}
                                className="p-7 md:p-9 bg-white border border-emerald-100 rounded-3xl hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-700 text-xl">
                                        ⌖
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">
                                        {clinic.name}
                                    </h3>
                                </div>

                                <p className="text-slate-600 leading-8">
                                    {clinic.address}
                                </p>

                                <div className="mt-7 pt-5 border-t border-emerald-50">
                                    <span className="text-sm font-semibold text-emerald-700">
                                        نرحب بزيارتكم
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

            </div>
        </main>
    )
}

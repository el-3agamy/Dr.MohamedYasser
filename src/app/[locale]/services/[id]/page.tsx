
import WhatsAppFrom from "@/app/_components/WhatsAppFrom/WhatsAppFrom";
import { getServicesObjArr } from "@/data/servicesData";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{
    locale: string;
    id: string;
  }>;
};

export default async function Service({ params }: Props) {
  const { id, locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Services",
  });

  const servicesObjArr = getServicesObjArr(t);
  const service = servicesObjArr.find((ser) => ser.id === Number(id));

  return (
    <main className="min-h-screen bg-white">
      
      <section className="container  mt-44 p-10 min-h-screen object-cover  w-full  " style={{ backgroundImage: `url("${service?.img}")` }}>
        <h1 className="text-3xl font-bold text-emerald-900">
          {service?.title}
        </h1>

        <div>
          <p>{service?.body}</p>
        </div>

        <div className="btns my-3">
          <a href="https://wa.me/201092901881" target="_blank" className="px-3 py-2 border border-amber-200 text-white bg-green-600 rounded-[10px] md:hover:bg-white md:hover:text-green-600 md:hover:text-[18px]">WhatsApp</a>
        </div>
      </section>

      <section className="mt-[50px]  flex flex-col justify-center items-center">
 
 {/* service content section */}

        <section className="bg-ivory-100   py-12.5  flex flex-col justify-center items-center gap-y-6">

          <article className="w-[80%] border rounded-[20px] border-emerald-300 p-3.5 bg-ivory-200">
            <h2 className="text-emerald-700 text-[24px] font-bold ">ما هي جسور الأسنان؟</h2>
            <p>جسر الأسنان يُستخدم لاستبدال سن أو أكثر مفقودة عن طريق “ربط” الفجوة بأسنان صناعية (أو أسنان صناعية) متصلة بالأسنان الطبيعية المجاورة أو زراعة الأسنان. يساعد الجسر على استعادة الوظيفة والشكل الجمالي وبنية الأسنان الطبيعية.</p>
          </article>

          <article className="w-[80%] border rounded-[20px] border-emerald-300 p-3.5 bg-ivory-200">
            <h2 className="text-emerald-700 text-[24px] font-bold ">دواعي استخدام جسر الأسنان:</h2>
            <div>
              استبدال الأسنان المفقودة لاستعادة الوظيفة والشكل الجمالي. <br />
              استعادة القدرة على المضغ والتحدث. <br />
              الحفاظ على بنية الوجه ومنع تحرك الأسنان المتبقي
            </div>
          </article>
        </section>

{/* contact form section */}
        <section className="">
          <WhatsAppFrom />
        </section>
      </section>



    </main>
  );
}
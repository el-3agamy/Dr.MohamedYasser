
import WhatsAppFrom from "@/app/_components/WhatsAppFrom/WhatsAppFrom";
import { getServicesObjArr } from "@/data/servicesData";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

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

  {/* <section className="container  mt-44 p-10 min-h-screen  w-full  " style={{ backgroundImage: `url("${service?.serviceCover}")` }}> */}
  return (
    <main className="min-h-screen bg-white">
    <section className="container relative  mt-44 min-h-screen w-full overflow-hidden p-10">

  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    {service?.serviceCover && (
      <Image
        src={service.serviceCover}
        alt={service.title}
        fill
        priority
        className="object-cover"
      />
    )}
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 z-10 bg-black/50" />

  {/* Content */}
  <div className="relative z-20">
    <h1 className="text-3xl font-bold text-white">
      {service?.title}
    </h1>

    <p className="text-white">{service?.body}</p>

    <div className="my-3">
      <a
        href="https://wa.me/201092901881"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-[10px] border border-ivory-200 bg-green-600 px-3 py-2 text-white"
      >
        WhatsApp
      </a>
    </div>
  </div>

</section>






      <section className="mt-[50px]  flex flex-col justify-center items-center">
 
 {/* service content section */}

        <section className="bg-ivory-100   py-12.5  flex flex-col justify-center items-center gap-y-6">

          <article className="w-[80%] border rounded-[20px] border-emerald-300 p-3.5 bg-ivory-200">
            <h2 className="text-emerald-700 text-[24px] font-bold ">{service?.whatIsServiceQ}</h2>
            <p>{service?.whatIsServiceA} </p>
          </article>

          <article className="w-[80%] border rounded-[20px] border-emerald-300 p-3.5 bg-ivory-200">
            <h2 className="text-emerald-700 text-[24px] font-bold ">{service?.whenIsServiceNecessaryQ}</h2>
            {/* <div>
              استبدال الأسنان المفقودة لاستعادة الوظيفة والشكل الجمالي. <br />
              استعادة القدرة على المضغ والتحدث. <br />
              الحفاظ على بنية الوجه ومنع تحرك الأسنان المتبقي
            </div> */}

            <ul>
              {
                service?.whenIsServiceNecessaryA?.map((obj , index)=>{ return(<li key={index}>{index+1} - {obj}</li>)}) 
              }
            </ul>
          </article>
        </section>


      </section>



    </main>
  );
}
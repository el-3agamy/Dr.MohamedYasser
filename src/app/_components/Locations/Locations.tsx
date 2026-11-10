import React from 'react' ;
import BranchCard from "./Branch/Branch";
import { useTranslations } from 'next-intl';
import getBranchesData from '@/data/branchesData';


export default function Locations() {
  const branches = getBranchesData() ;
  const t = useTranslations("Locations") ;

  return ( 
    <section className="flex flex-col items-center justify-center mx-auto max-w-7xl px-4 py-16 " id='locations' >
          <h1
        className="
        mb-20
          relative
          font-black
          text-2xl
          md:text-5xl
          text-emerald-900
          pb-2
          after:absolute
          after:bottom-0
          after:start-0
          after:h-0.5
          after:w-full
          after:bg-amber-400
        "
      >
        {t("title")}
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {branches?.map((branch , ind) => (
          <BranchCard key={ind} {...branch} />
        ))}
      </div>
    </section>
  );
}

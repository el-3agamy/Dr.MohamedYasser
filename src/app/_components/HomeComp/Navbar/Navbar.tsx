
// "use client";

// import { useTranslations , useLocale } from "next-intl";
// import { useRouter, usePathname } from "@/i18n/navigation";
// import NavbarLinks from "./NavbarLinks/NavbarLinks";

// export default function Navbar() {
//   const t = useTranslations("Navbar");
//   const locale = useLocale() ;
//   const router = useRouter() ;
//   const pathname = usePathname() ;

//    const switchLanguage = () => {
//     const nextLocale = locale === "ar" ? "en" : "ar";

//     router.replace(pathname, {
//       locale: nextLocale,
//     });
//   };

//   return (
//     <nav className="flex justify-between p-11 items-center gap-2 bg-emerald-200">
      
//       <div className="flex-1 hover:cursor-pointer">
//         <span>Logo image</span>
//         {/* <h1>Dr. Mohamed Yasser</h1> */}
//         <h1>{t("Mohamed Yasser")}</h1>
//       </div>

//       {/* <ul className="  self-center flex-2 flex  flex-col md:flex-row justify-between items-center gap-1 list-none bg-emerald-500 py-4 px-6 rounded-2xl
//       ">
        
//         <li className="relative py-2 transition-colors duration-300 hover:text-white hover:cursor-pointer">
//           {t("home")}
//         </li>

//         <li className="relative py-2 transition-colors duration-300 hover:text-white hover:cursor-pointer">
//           {t("about")}
//         </li>

//         <li className="relative py-2 transition-colors duration-300 hover:text-white hover:cursor-pointer">
//           {t("services")}
//         </li>

//         <li className="relative py-2 transition-colors duration-300 hover:text-white hover:cursor-pointer">
//           {t("contact")}
//         </li>

//         <li className="relative py-2 transition-colors duration-300 hover:text-white hover:cursor-pointer">
//           {t("locations")}
//         </li>

//       </ul>  */}


//         <NavbarLinks />
//       <div className="flex-1">
//         <button className="bg-green-200 mx-auto rounded-b-lg text-center p-4 block hover:cursor-pointer hover:bg-emerald-500 hover:text-white hover:text-xl transition-all duration-400 ease-in-out">
//           {t("bookAppointment")}
//         </button>
//       </div>

//       {/* ===================== switch button =========================== */}

//       <div>
//         <button 
//               className="hover:cursor-pointer"
//               onClick={switchLanguage}
//               >
//                 {locale === "ar" ? "English" : "العربية"}
//               </button>
//       </div>
//     </nav>
//   );
// }
"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import NavbarLinks from "./NavbarLinks/NavbarLinks";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = () => {
    const nextLocale = locale === "ar" ? "en" : "ar";
    router.replace(pathname, {
      locale: nextLocale,
    });
  };

  return (
    <nav className="flex justify-between p-6 md:p-11 items-center gap-2 bg-emerald-200">
      
      {/* 1. Logo (Always first) */}
      <div className="flex-1 hover:cursor-pointer">
        <span>Logo image</span>
        <h1>{t("Mohamed Yasser")}</h1>
      </div>

      {/* 2. Navbar Links (After logo on desktop, last item on mobile) */}
      <div className="order-last md:order-none flex-2 flex justify-center">
        <NavbarLinks />
      </div>

      {/* 3. Book Appointment */}
      <div className="flex-1 flex justify-center">
        <button className="bg-green-200 rounded-b-lg text-center p-3 md:p-4 block hover:cursor-pointer hover:bg-emerald-500 hover:text-white hover:text-lg transition-all duration-400 ease-in-out">
          {t("bookAppointment")}
        </button>
      </div>

      {/* 4. Language Switcher */}
      <div>
        <button 
          className="hover:cursor-pointer p-2"
          onClick={switchLanguage}
        >
          {locale === "ar" ? "English" : "العربية"}
        </button>
      </div>
    </nav>
  );
}
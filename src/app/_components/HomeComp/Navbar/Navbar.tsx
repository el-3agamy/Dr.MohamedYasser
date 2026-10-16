// "use client";

// import { useTranslations, useLocale } from "next-intl";
// import { useRouter, usePathname } from "@/i18n/navigation";
// import NavbarLinks from "./NavbarLinks/NavbarLinks";

// export default function Navbar() {
//   const t = useTranslations("Navbar");
//   const locale = useLocale();
//   const router = useRouter();
//   const pathname = usePathname();

//   const switchLanguage = () => {
//     const nextLocale = locale === "ar" ? "en" : "ar";
//     router.replace(pathname, {
//       locale: nextLocale,
//     });
//   };

//   return (
//     <nav className="flex justify-between p-6 md:p-11 items-center gap-2 bg-emerald-200">
      
//       {/* 1. Logo (Always first) */}
//       <div className="flex-1 hover:cursor-pointer">
//         <span>Logo image</span>
//         <h1>{t("Mohamed Yasser")}</h1>
//       </div>

//       {/* 2. Navbar Links (After logo on desktop, last item on mobile) */}
//       <div className="order-last  md:order-none flex-2 flex justify-center">
//         <NavbarLinks />
//       </div>

//       {/* 3. Book Appointment */}
//       <div className="flex-1 flex justify-center">
//         <button className="bg-green-200 rounded-b-lg text-center p-3 md:p-4 block hover:cursor-pointer hover:bg-emerald-500 hover:text-white hover:text-lg transition-all duration-400 ease-in-out">
//           {t("bookAppointment")}
//         </button>
//       </div>

//       {/* 4. Language Switcher */}
//       <div>
//         <button 
//           className="hover:cursor-pointer p-2"
//           onClick={switchLanguage}
//         >
//           {locale === "ar" ? "English" : "العربية"}
//         </button>
//       </div>
//     </nav>
//   );
// }

"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import Image from "next/image";

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
    <nav className="fixed z-[9999999999] top-0 left-0 right-0 flex items-center justify-between p-4 md:p-7 bg-gold-50 gap-4">
      
      {/* 1. Logo */}
      <div className="f hover:cursor-pointer">
        <a href="#" className="flex flex-col justify-center items-center ">
          <span>Logo image</span>
        <h1 className="font-black text-[11px] md:text-lg">{t("Mohamed Yasser")}</h1>
        </a>
      </div>

      {/* 2. Desktop Navigation Links (Centered) */}
      <div className="hidden md:flex flex-1 justify-center ">
        <NavbarLinks />
      </div>

      {/* 3. Actions & Mobile Controls Group */}
      <div className="flex items-center gap-7  md:gap-4 ">
        {/* Book Appointment (Visible on all or hidden on very small screens if needed) */}
        <button className="bg-emerald-700 text-amber-100 font-black  rounded-lg text-center py-5 px-3 md:px-4 text-sm md:text-2xl  hover:cursor-pointer hover:bg-emerald-500 hover:text-white transition-all duration-300">
          <a href="https://elagamiabdalla-lgtm.github.io/Dr-Mhmd-Yasser-booking/?source=Instagram&campaign=Bookings&medium=Bio&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAadWlmzIkBNZ6YIeS_HOt8KUDUOnEkb7xXD7D4_aXAZl5ZNhs9TQ3YV9LpdnZA_aem_bsJT0_PtIdSroIYEfc8BZQ">{t("bookAppointment")}</a>
        </button>

        {/* Language Switcher */}
        <button 
          className="hover:cursor-pointer p-2 text-sm md:text-base flex flex-col-reverse items-center justify-center font-bold "
          onClick={switchLanguage}
        >
          {locale === "ar" ? <>English <br/><Image src={"/english.png"} height={30} width={30} alt="English Lang" title="USA FLag" /></> 
            : 
          <>العربية <br/> <Image src={"/arabic.png"} height={30} width={30} alt="Arabic Lang" title="Egypt FLag" /></>
          }
        </button>

        {/* Mobile Burger Menu */}
        <div className="md:hidden flex items-center">
          <NavbarLinks />
        </div>
      </div>

    </nav>
  );
}
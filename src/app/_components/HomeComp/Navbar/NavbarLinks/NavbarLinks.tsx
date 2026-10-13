"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <path d="M18 6 6 18M6 6l12 12" />
      ) : (
        <path d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  );
}
export default function NavbarLinks() {
    const t = useTranslations("Navbar");
   const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: t("home"), href: "#home" },
    { label: t("about"), href: "#about" },
    { label: t("services"), href: "#services" },
    { label: t("contact"), href: "#contact" },
    { label: t("locations"), href: "#locations" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <ul className="hidden md:flex flex-2 items-center justify-between
        gap-4 list-none bg-emerald-500 py-4 px-6 rounded-2xl">
      {/* <ul className="hidden md:flex flex-2 items-center justify-between
        gap-4 list-none bg-emerald-500 py-4 px-6 rounded-2xl"> */}
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="py-2 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Burger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="md:hidden p-2 rounded-lg hover:bg-emerald-100"
      >
        <MenuIcon open={isOpen} />
      </button>

      {/* Mobile Side Menu */}
      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
          />

          <nav className="fixed top-0 right-0 z-50 h-dvh w-72
            max-w-[85vw] bg-white shadow-xl p-6 md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="mb-8"
            >
              {/* <X size={28} /> */}
              <MenuIcon open={isOpen} />
            </button>

            <ul className="flex flex-col gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 hover:text-emerald-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </>
  );
}

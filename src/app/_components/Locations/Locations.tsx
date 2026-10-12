import React from 'react' ;
import BranchCard from "./Branch/Branch";

const branches = [
  {
    name: "Nasr City Branch",
    address: "21st - Al-Nahas - Nasr City",
    phone: "01088888888",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9286.966800188598!2d4.4922501744043295!3d51.928248615596914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c434a8df07bd51%3A0x24c15d2139f4bfd!2sa%26o%20Hostel%20Rotterdam%20City!5e1!3m2!1sar!2snl!4v1791808663317!5m2!1sar!2snl" ,
  },
  {
    name: "New Cairo Branch",
    address: "11st - El-Korba - New Cairo",
    phone: "01099999999",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9286.966800188598!2d4.4922501744043295!3d51.928248615596914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c434a8df07bd51%3A0x24c15d2139f4bfd!2sa%26o%20Hostel%20Rotterdam%20City!5e1!3m2!1sar!2snl!4v1791808663317!5m2!1sar!2snl" ,
  },
  {
    name: "New Cairo Branch",
    address: "11st - El-Korba - New Cairo",
    phone: "01099999999",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9286.966800188598!2d4.4922501744043295!3d51.928248615596914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c434a8df07bd51%3A0x24c15d2139f4bfd!2sa%26o%20Hostel%20Rotterdam%20City!5e1!3m2!1sar!2snl!4v1791808663317!5m2!1sar!2snl" ,
  },
  {
    name: "New Cairo Branch",
    address: "11st - El-Korba - New Cairo",
    phone: "01099999999",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9286.966800188598!2d4.4922501744043295!3d51.928248615596914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c434a8df07bd51%3A0x24c15d2139f4bfd!2sa%26o%20Hostel%20Rotterdam%20City!5e1!3m2!1sar!2snl!4v1791808663317!5m2!1sar!2snl" ,
  },
];

export default function Locations() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Our Branches
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {branches.map((branch) => (
          <BranchCard key={branch.name} {...branch} />
        ))}
      </div>
    </section>
  );
}

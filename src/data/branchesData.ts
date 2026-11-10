import { useTranslations } from "next-intl";

export default function getBranchesData(){

  const t = useTranslations("Locations") ;

    return(
           [
    {
      name: t("firstLocation.addressTitle"),
      address: t("firstLocation.address"),
      phone: "01100054391",
      mapUrl:"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3423.037291165365!2d30.84401317558756!3d30.91358177449762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDU0JzQ4LjkiTiAzMMKwNTAnNDcuNyJF!5e0!3m2!1sen!2sus!4v1792490115503!5m2!1sen!2sus"
    },
    {
       name: t("secondLocation.addressTitle"),
      address: t("secondLocation.address"),
      phone: "01100054391",
      mapUrl:"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3426.6736837216413!2d30.978483975583618!3d30.811784074546253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDQ4JzQyLjQiTiAzMMKwNTgnNTEuOCJF!5e0!3m2!1sen!2sus!4v1792490749346!5m2!1sen!2sus"
    },
 
    {
      name: t("thirdLocation.addressTitle"),
      address: t("thirdLocation.address"),
      phone: "01100054391",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3431.5359362984636!2d30.997753675578096!3d30.675193674611982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDQwJzMwLjciTiAzMcKwMDAnMDEuMiJF!5e0!3m2!1sen!2seg!4v1792879757885!5m2!1sen!2seg"
    },
    {
       name: t("fourthLocation.addressTitle"),
      address: t("fourthLocation.address"),
      phone: "01100054391",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3424.5173740678915!2d30.825809555209332!3d30.872184630971514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDUyJzIwLjAiTiAzMMKwNDknNDUuMiJF!5e0!3m2!1sen!2seg!4v1792880326592!5m2!1sen!2seg",
    },
    {
      name: t("fivthLocation.addressTitle"),
      address: t("fivthLocation.address"),
      phone: "01100054391",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3424.232272030259!2d31.087969575586218!3d30.88016267451353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDUyJzQ4LjYiTiAzMcKwMDUnMjYuMCJF!5e0!3m2!1sen!2seg!4v1792880527219!5m2!1sen!2seg",
    },
  ]
    )
}
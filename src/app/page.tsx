import About from "./_components/About/About";
import Education from "./_components/Education/Education";
import HomeComp from "./_components/HomeComp/HomeComp";
import Services from "./_components/Services/Services";
import Smile from "./_components/Smile/Smile";
import WhatsAppFrom from "./_components/WhatsAppFrom/WhatsAppFrom";

export default function Home() {
  return (
    <>
   <HomeComp />
   <About />
   <Education />
   <Smile />
   <Services />
   <WhatsAppFrom />
    </>
  );
}

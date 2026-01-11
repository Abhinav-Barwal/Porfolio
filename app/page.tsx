import Home from "@/components/sections/Hero";
import DevJourney from "@/components/sections/DevJourney";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
  <main>
    <Home/>
    <DevJourney/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/>
  </main>
  );
}

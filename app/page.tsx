
import DynamicHero from "./components/Hero/DynamicHero"
import Footer from "./components/Footer"
import IconSection from "./components/icon-sections/IconSection"
import { Testimonials } from "./components/Testimonials"

export default function Home() { 
  return ( 
    <div>
        
        <DynamicHero title="Check binnen 10 minuten je mentale gezondheid" typeCheck="algemene" link="/beroepskeuze/start" backgroundImage="https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/> 
        <IconSection /> 
        <Testimonials /> 
        <Footer /> 
        
    </div>
  )
}
import BeroepsKeuzeHero from "@/app/components/Hero/BeroepsKeuzeHero";
import DynamicHero from "@/app/components/Hero/DynamicHero";
import IconSectionBeroepsKeuze from "@/app/components/icon-sections/iconSectionBeroepsKeuze"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import HoogbegaafsHero from "@/app/components/Hero/HoogbegaafdHero";
import IconSectionHoogbegaafd from "@/app/components/icon-sections/IconSectionHoogbegaafd";
import { TestimonialsIntelligent } from "@/app/components/TestimonialsIntelligent";
import Footer from "@/app/components/Footer";

export default async function Beroepskeuze () {

    const { getUser } = await getKindeServerSession(); 
    const user = await getUser(); 

    return ( 
        <div>
           <HoogbegaafsHero />
           <IconSectionHoogbegaafd /> 
           <TestimonialsIntelligent /> 
           <Footer /> 
        </div>
    )
}
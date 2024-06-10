import BeroepsKeuzeHero from "@/app/components/Hero/BeroepsKeuzeHero";
import DynamicHero from "@/app/components/Hero/DynamicHero";
import Footer from "@/app/components/Footer";
import IconSectionBeroepsKeuze from "@/app/components/icon-sections/iconSectionBeroepsKeuze"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"


export default async function Beroepskeuze () {

    const { getUser } = await getKindeServerSession(); 
    const user = await getUser(); 

    return ( 
        <div>
           <BeroepsKeuzeHero /> 
           <IconSectionBeroepsKeuze /> 
           <Footer /> 
        </div>
    )
}
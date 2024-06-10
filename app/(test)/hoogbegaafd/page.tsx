import BeroepsKeuzeHero from "@/app/components/BeroepsKeuzeHero"
import DynamicHero from "@/app/components/DynamicHero"
import IconSectionBeroepsKeuze from "@/app/components/iconSectionBeroepsKeuze"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import HoogbegaafsHero from "@/app/components/HoogbegaafdHero";
import IconSectionHoogbegaafd from "@/app/components/IconSectionHoogbegaafd";
import { TestimonialsIntelligent } from "@/app/components/TestimonialsIntelligent";

export default async function Beroepskeuze () {

    const { getUser } = await getKindeServerSession(); 
    const user = await getUser(); 

    return ( 
        <div>
           <HoogbegaafsHero />
           <TestimonialsIntelligent /> 
           <IconSectionHoogbegaafd /> 
        </div>
    )
}
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Dashboard = async () => {
    const { getUser } = await getKindeServerSession(); 
    const user = await getUser(); 

    if(!user) { 
        redirect('/')
    }

    return (  
        <div className="p-5">
            <h1 className="text-3xl font-bold">welkom op het dashboard !</h1>
            <p>We zijn bezig met je gegevens te verwerken en hebben over een  uur de uitslag.</p>
        </div>
    );
}
 
export default Dashboard ;
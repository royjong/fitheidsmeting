import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "../../lib/db";
import { redirect } from "next/navigation";
import { mollieClient } from "@/lib/mollieClient";


async function getData({email, id, firstName, lastName, profileImage}: {email: string; id: string; firstName: string | undefined | null; lastName: string | undefined | null; profileImage: string | undefined | null }) { 
    //Checks if there is a user 
    const user = await prisma.user.findUnique({
        where: { 
            id: id,
        }, 
        select: { 
            id: true,
            mollieCustomerId : true
        }
    });

    //If there is no user it will add a new user to the database.
    if(!user) { 
        const name = `${firstName ?? ''} ${lastName ?? '' }`

        await prisma.user.create({
            data: {
                id: id,
                email: email, 
                name: name
            }
        }); 
    }
    
    if (!user?.mollieCustomerId) { 

        const data = await mollieClient.customers.create({
            name: firstName,
            email: email     
        }); 

        await prisma.user.update({
            where: {
                id: id,
            }, 
            data: {
                mollieCustomerId: data.id,
            }
        })
    }
}

async function ToetsLanding()  {

    const { getUser } = getKindeServerSession() 
    const user = await getUser(); 

    if(!user) { 
        return redirect('/')
    }

    //Voegt gebruiker toe aan de database.
    await getData({email: user.email as string, firstName: user.given_name as string, id: user.id as string, lastName: user.family_name as string, profileImage: user.picture})

    return (  
        <div className="w-full flex flex-col mt-5">
            <div className="mx-auto flex flex-col space-y-6">
                    <h1 className="text-2xl">Selecteer de toets die je wilt doen: </h1>
                    <Link href="/toets/beroepskeuze">
                            <Button className="w-full">
                                Beroepskeuze toets
                                <ArrowRight className="w-4 h-4" / >
                            </Button>
                    </Link>
                    <Link href="/toets/hoogbegaafd">
                             <Button className="w-full">
                                Hoogbegaafdheids toets
                                <ArrowRight className="w-4 h-4"/> 
                            </Button>
                    </Link>
            </div>
        </div>
     );
}
 
export default ToetsLanding;
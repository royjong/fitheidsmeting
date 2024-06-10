import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ToetsLanding = () => {
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
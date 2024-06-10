import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ToolTips } from "../ToolTip";
import { Badge } from "@/components/ui/badge"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowDown, Star } from "lucide-react";
import { Dropdown } from "react-day-picker";


interface DynamicHeroProps {
  title: string;
  link: string;
  typeCheck: string;
  backgroundImage: string; // Add backgroundImage prop
}

export default async function DynamicHero({
  title,
  link,
  typeCheck,
  backgroundImage,
}: DynamicHeroProps) {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();

  return (
    <>
      {/* Hero */}
      
      <div
        className="relative overflow-hidden py-24 lg:py-32 "
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          
          <div className="max-w-2xl text-center mx-auto space-y-4 ">
          <Badge variant="outline" className="p-2 ">
             Gemaakt door 4 gerenoormeerde psychologen!
             
           </Badge>
          
            <h1 className="scroll-m-20 text-2xl md:text-4xl text-[#0e2a57] font-bold tracking-tight lg:text-5xl ">
             
              {title}🧠
            </h1>
            <ToolTips />

            <p className="text-muted-foreground">
              Onze geavanceerde software & team aan specialisten staan klaar om jou te voorzien van een snelle diagnose.
            </p>
            <br />
           
              <div>
                   <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="custom" className="flex gap-3 mx-auto bg-[#4499f2]">Kies een gezondheidscheck
          <ArrowDown  className="w-4 h-4"/> </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Beschikbare testen</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="/beroepskeuze">
                <DropdownMenuItem>
                Beroepskeuze test
                </DropdownMenuItem>
            </Link>
            <Link href="/hoogbegaafd">
                <DropdownMenuItem>
                 Hoogbegaafd toets
                </DropdownMenuItem>
            </Link>
         
        </DropdownMenuContent>
      </DropdownMenu>
              </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}

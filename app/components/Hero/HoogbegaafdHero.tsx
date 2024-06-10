import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ToolTips } from "../ToolTip";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function HoogbegaafsHero() {

  const { getUser } = await getKindeServerSession(); 
  const user = await getUser(); 


  return (
    <>
    {/* Hero */}
    <div
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('https://images.pexels.com/photos/4065891/pexels-photo-4065891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="max-w-2xl text-center mx-auto space-y-4 ">
          <Badge variant="default" className="p-2 ">
            De beste test in Nederland - 97% nauwkeurig!
          </Badge>
          <h1 className="scroll-m-20 text-2xl md:text-4xl text-[#0e2a57] font-bold tracking-tight lg:text-5xl ">
            Ben jij hoogbegaafd? Doe nu de test van Nederlandse top pscyhologen.
          </h1>
          <ToolTips />
          <p className="text-muted-foreground">
            Onze geavanceerde software en team van experts staan klaar om je snel een diagnose te geven.
          </p>
          {user ? (
            <Button className="flex mx-auto gap-3 mt-5 bg-[#548ff8] text-white">
              Ja, n 
              <ArrowRightIcon className="w-4 h-4" />
            </Button>
          ) : (
            <RegisterLink>
              <Button className="flex mx-auto gap-3 mt-5 bg-[#548ff8] text-white">
                Start nu de hoogbegaafdheidstest
                <ArrowRightIcon className="w-4 h-4" />
              </Button>
            </RegisterLink>
          )}
          <br />
        </div>
      </div>
    </div>
    {/* End Hero */}
  </>
  );
}

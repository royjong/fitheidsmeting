import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ToolTips } from "./ToolTip";


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
            <h1 className="scroll-m-20 text-5xl text-[#0e2a57] font-bold tracking-tight lg:text-5xl ">
             
              {title}🧠
            </h1>
            <ToolTips />

            <p className="text-muted-foreground">
              Onze geavanceerde software & team aan specialisten staan klaar om jou te voorzien van een snelle diagnose.
            </p>
            <br />
            {user ? (
              <div>
                <Button variant="destructive">
                  <Link href={link}>Start nu de {typeCheck} check!</Link>
                </Button>
              </div>
            ) : (
              <div>
                <RegisterLink postLoginRedirectURL="/beroepskeuze/start">
                  <Button>Start nu de {typeCheck} check!</Button>
                </RegisterLink>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}

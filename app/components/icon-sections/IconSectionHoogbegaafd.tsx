import { Button } from "@/components/ui/button";
import {
  BookOpenIcon,
  ChevronRightIcon,
  MessagesSquareIcon,
  LogIn, 
  TestTubeDiagonal,
  BookOpenCheck, 
  ThumbsUpIcon,
} from "lucide-react";

export default function IconSectionHoogbegaafd() {
  return (
    <>
      {/* Icon Blocks */}
      <div className="container py-20 lg:py-20">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="lg:w-3/4">
            <h2 className="scroll-m-20 border-b pb-2 text-2xl  font-light  tracking-tight transition-colors first:mt-0">
               Onze toets is 97% accuraat. Start vandaag nog!
            </h2>
            <p className="mt-3 text-muted-foreground">
             Wil jij weten of je hoogbegaafd bent? Doe nu de toets en krijg een score van 1/10 met een uitgebreid rapport.
            </p>
            <p className="mt-5">
              <Button>Doe nu de zelfscan</Button>
            </p>
          </div>
          {/* End Col */}
          <div className="space-y-6 lg:space-y-10">
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-[#e8efff] text-black">
                <LogIn className="flex-shrink-0 w-5 h-5" />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Stap 1. Maak snel een account aan.
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Registreer je eenvoudig en snel om toegang te krijgen tot onze zelfscan.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border  bg-[#e8efff] text-black ">
                <TestTubeDiagonal className="flex-shrink-0 w-5 h-5" />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-black sm:text-lg font-semibold">
                  Stap 2. Vul de gewenste test in.
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Beantwoord een paar vragen om ons inzicht te geven in je mentale gesteldheid.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center  bg-[#e8efff]  items-center w-[46px] h-[46px] rounded-full border  text-black">
                <BookOpenCheck className="flex-shrink-0 w-5 h-5" />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Stap 3. Binnen 1 minuut uitslag!
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Onze AI en ons team analyseren je antwoorden en geven binnen 1 minuut een diagnose.
                </p>
              </div>
            </div>
            
            {/* End Icon Block */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Icon Blocks */}
    </>
  );
}

import { Button } from "@/components/ui/button";
import {
  BookOpenIcon,
  ChevronRightIcon,
  MessagesSquareIcon,
  ThumbsUpIcon,
} from "lucide-react";



export default function IconSection() {
  return (
    <>
      {/* Icon Blocks */}
      <div className="container py-20 lg:py-20">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="lg:w-3/4">
            <h2 className="scroll-m-20 border-b pb-2 text-2xl  font-light  tracking-tight transition-colors first:mt-0">
              Binnen 1 minuut een diagnose voor je  mentale problemen in kaart hebben? 
            </h2>
            <p className="mt-3 text-muted-foreground">
              Doe nu de zelfscan, en krijg binnen een minuut het antwoord.
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
                <BookOpenIcon className="flex-shrink-0 w-5 h-5" />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Stap 1. Jij maakt snel een account.
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Our documentation and extensive Client libraries contain
                  everything a business needs to build a custom integration in a
                  fraction of the time.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border  bg-[#e8efff] text-black ">
                <MessagesSquareIcon className="flex-shrink-0 w-5 h-5" />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-black sm:text-lg font-semibold">
                  Stap 2. Je doet de gewensde test.
                </h3>
                <p className="mt-1 text-muted-foreground">
                  We actively contribute to open-source projects—giving back to
                  the community through development, patches, and sponsorships.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center  bg-[#e8efff]  items-center w-[46px] h-[46px] rounded-full border  text-black">
                <ThumbsUpIcon className="flex-shrink-0 w-5 h-5" />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                 Stap 3. Binnen 5 minuten uitslag!
                </h3>
                <p className="mt-1 text-muted-foreground">
                  From boarding passes to movie tickets, there&apos;s pretty
                  much nothing you can&apos;t do.
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

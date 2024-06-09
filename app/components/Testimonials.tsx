"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/movingcards";

export function Testimonials() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Ik was erg onder de indruk van de mentale gezondheidstests die ze aanbieden. Hun AI-software en gespecialiseerde team leveren snel en nauwkeurig resultaten. Een waardevolle service voor iedereen die meer inzicht wil krijgen in hun mentale welzijn.",
    name: "Sophie van den Berg",
    title: "Teameigenaar",
    stars: 5
  },
  {
    quote:
      "De depressietest die ik bij hen heb gedaan, heeft me geholpen om meer duidelijkheid te krijgen over mijn geestelijke gezondheid. Het proces was eenvoudig en de resultaten waren verhelderend. Ik raad hun service ten zeerste aan!",
    name: "Thomas de Vries",
    title: "Klantenservicemedewerker",
    stars: 5
  },
  {
    quote: "Hun autismetest heeft me enorm geholpen. Ik voel me nu beter in staat om mijn behoeften te begrijpen en erop te reageren. Dank aan het team voor hun deskundige begeleiding!",
    name: "Emma Bakker",
    title: "Student",
    stars: 5
  },
  {
    quote:
      "Ik ben zo blij dat ik bij hen terecht kon voor een ADHD-test. Hun professionele aanpak en snelle doorlooptijd hebben me echt geholpen om verder te komen. Een fantastische service voor iedereen die worstelt met ADHD-symptomen.",
    name: "Lucas Jansen",
    title: "Zakelijk consultant",
    stars: 5
  },
  {
    quote:
      "Na het doen van hun IQ-test voel ik me veel zelfverzekerder over mijn cognitieve vaardigheden. De test was uitdagend maar eerlijk, en ik waardeer de inzichten die het me heeft gegeven. Een aanrader voor iedereen die zijn intelligentie wil begrijpen!",
    name: "Isabella van Dijk",
    title: "Ondernemer",
    stars: 5
  },
  {
    quote:
      "Hun beroepstest heeft me geholpen om te ontdekken welke carrièrepaden het beste bij mijn persoonlijkheid en vaardigheden passen. Ik ben dankbaar voor hun expertise en begeleiding tijdens het hele proces. Een geweldige dienst voor iedereen die op zoek is naar loopbaanadvies!",
    name: "David Hendriks",
    title: "Freelancer",
    stars: 5
  },
];

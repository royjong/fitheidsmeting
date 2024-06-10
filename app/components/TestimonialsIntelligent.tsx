"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/movingcards";

export function TestimonialsIntelligent() {
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
      "Ik ben enorm onder de indruk van de hoogbegaafdheidstoets die ze aanbieden. Hun AI-software en gespecialiseerde team leveren snel en nauwkeurig resultaten op. Het uitgebreide rapport dat je na de toets ontvangt, is super handig! En dit alles voor een verrassend lage prijs. Een waardevolle service voor iedereen die zijn hoogbegaafdheid wil begrijpen.",
    name: "Max Verhoeven",
    title: "Hoogbegaafdheids Expert",
    stars: 5
  },
  {
    quote:
      "De hoogbegaafdheidstoets die ik bij hen heb gedaan, heeft me geholpen om meer duidelijkheid te krijgen over mijn cognitieve vermogens. Het proces was eenvoudig en de resultaten waren verhelderend. Het uitgebreide rapport dat je ontvangt na de toets is echt super handig, en dit alles voor een verrassend lage prijs! Ik raad hun service ten zeerste aan!",
    name: "Eva Jacobs",
    title: "Data Analist",
    stars: 5
  },
  {
    quote:
      "Hun hoogbegaafdheidstoets heeft me enorm geholpen. Ik voel me nu beter in staat om mijn hoogbegaafde behoeften te begrijpen en erop te reageren. Het uitgebreide rapport dat je ontvangt na de toets is echt super handig, en dit alles voor een verrassend lage prijs! Dank aan het team voor hun deskundige begeleiding!",
    name: "Lars van der Linden",
    title: "Student",
    stars: 5
  },
  {
    quote:
      "Ik ben zo blij dat ik bij hen terecht kon voor een toets om mijn hoogbegaafdheid te bepalen. Hun professionele aanpak en snelle doorlooptijd hebben me echt geholpen om verder te komen. Het uitgebreide rapport dat je ontvangt na de toets is echt super handig, en dit alles voor een verrassend lage prijs! Een fantastische service voor iedereen die zijn hoogbegaafdheid wil begrijpen!",
    name: "Lisa de Jong",
    title: "Psycholoog",
    stars: 5
  },
  {
    quote:
      "Na het doen van hun hoogbegaafdheidstoets voel ik me veel zelfverzekerder over mijn cognitieve vaardigheden. De test was uitdagend maar eerlijk, en ik waardeer de inzichten die het me heeft gegeven. Het uitgebreide rapport dat je ontvangt na de toets is echt super handig, en dit alles voor een verrassend lage prijs! Een aanrader voor iedereen die zijn hoogbegaafdheid wil begrijpen!",
    name: "Tom Bakker",
    title: "Onderzoeker",
    stars: 5
  },
  {
    quote:
      "Hun hoogbegaafdheidstoets heeft me geholpen om te ontdekken welke carrièrepaden het beste bij mijn hoogbegaafde persoonlijkheid en vaardigheden passen. Ik ben dankbaar voor hun expertise en begeleiding tijdens het hele proces. Het uitgebreide rapport dat je ontvangt na de toets is echt super handig, en dit alles voor een verrassend lage prijs! Een geweldige dienst voor iedereen die op zoek is naar loopbaanadvies!",
    name: "Lotte Janssen",
    title: "Advocaat",
    stars: 5
  },
];

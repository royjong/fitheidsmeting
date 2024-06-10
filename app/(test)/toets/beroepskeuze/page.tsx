"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from '@/components/ui/progress';

interface Vraag {
  tekst: string;
  type: 'input' | 'keuzes';
  keuzes?: string[];
}

const vragen: Vraag[] = [
    { tekst: "Wat zijn je belangrijkste interesses?", type: 'input' },
    { tekst: "Wat zijn je sterke punten?", type: 'input' },
    { tekst: "Wat zijn je zwakke punten?", type: 'input' },
    { tekst: "Wat zijn je professionele successen?", type: 'input' },
    { tekst: "Wat zijn je professionele mislukkingen en hoe heb je daarvan geleerd?", type: 'input' },
    { tekst: "Welk type werkomgeving heeft je voorkeur? (Kantoor, Thuis, Hybride)", type: 'keuzes', keuzes: ['Kantoor', 'Thuis', 'Hybride'] },
    { tekst: "Wat is je ideale functie?", type: 'input' },
    { tekst: "Hoe ga je om met stress? (Meditatie, Sporten, Praten met vrienden)", type: 'keuzes', keuzes: ['Meditatie', 'Sporten', 'Praten met vrienden'] },
    { tekst: "Wat motiveert je om hard te werken?", type: 'input' },
    { tekst: "Wat zijn je professionele doelen?", type: 'input' },
    { tekst: "Hoe prioriteer je je taken?", type: 'input' },
    { tekst: "Welke vaardigheden wil je ontwikkelen?", type: 'input' },
    { tekst: "Hoe ga je om met feedback?", type: 'input' },
    { tekst: "Wat voor soort team vind je het fijnst om mee te werken? (Zelfstandig, Teamwerk, Gemengd)", type: 'keuzes', keuzes: ['Zelfstandig', 'Teamwerk', 'Gemengd'] },
    { tekst: "Wat zijn je verwachtingen van een werkgever?", type: 'input' },
    { tekst: "Hoe ga je om met conflicten op de werkvloer?", type: 'input' },
    { tekst: "Hoe zie je jezelf over vijf jaar?", type: 'input' },
    { tekst: "Wat zijn je grootste prestaties tot nu toe?", type: 'input' },
    { tekst: "Hoe blijf je gemotiveerd tijdens uitdagende projecten?", type: 'input' },
    { tekst: "Wat vind je belangrijk in een werkcultuur?", type: 'input' },
    { tekst: "Hoe zorg je voor een goede werk-privébalans?", type: 'input' },
    { tekst: "Wat is je favoriete manier van leren? (Lezend, Doende, Luisterend)", type: 'keuzes', keuzes: ['Lezend', 'Doende', 'Luisterend'] },
    { tekst: "Hoe ga je om met veranderingen op de werkvloer?", type: 'input' },
    { tekst: "Hoe ga je om met teleurstellingen?", type: 'input' },
    { tekst: "Hoe belangrijk is samenwerking voor jou?", type: 'input' },
    { tekst: "Wat doe je om jezelf te blijven ontwikkelen?", type: 'input' },
    { tekst: "Hoe ga je om met tijdsdruk?", type: 'input' },
    { tekst: "Hoe zou je een moeilijke beslissing op het werk nemen?", type: 'input' },
    { tekst: "Wat is jouw definitie van succes in je carrière?", type: 'input' },
    { tekst: "Hoe ga je om met tegenslagen?", type: 'input' },
    { tekst: "Wat zijn je persoonlijke waarden?", type: 'input' },
    { tekst: "Wat zijn je favoriete hobby's?", type: 'input' },
    { tekst: "Wat doe je graag in je vrije tijd?", type: 'input' },
    { tekst: "Wat is je favoriete boek of film en waarom?", type: 'input' },
    { tekst: "Wat zijn je grootste angsten en hoe ga je ermee om?", type: 'input' },
    { tekst: "Hoe belangrijk is familie voor jou in relatie tot je carrière?", type: 'input' },
    { tekst: "Wat zijn je meest waardevolle levenslessen?", type: 'input' },
    { tekst: "Wat zijn je dromen buiten je professionele leven?", type: 'input' },
    { tekst: "Wat zijn je favoriete vakantiebestemmingen en waarom?", type: 'input' },
    { tekst: "Wat zijn je grootste bronnen van inspiratie?", type: 'input' },
    { tekst: "Wat maakt je echt gelukkig?", type: 'input' },
    { tekst: "Wat zijn je grootste prestaties buiten je carrière?", type: 'input' },
    { tekst: "Wat zou je willen veranderen aan de wereld?", type: 'input' },
    { tekst: "Wat waardeer je het meest in vriendschappen en relaties?", type: 'input' },
    { tekst: "Hoe belangrijk is geld voor jou bij het kiezen van een baan?", type: 'keuzes', keuzes: ['Heel belangrijk', 'Matig belangrijk', 'Niet belangrijk'] },
    { tekst: "Wat zijn je favoriete onderwerpen om over te praten?", type: 'input' },
    { tekst: "Wat zijn je favoriete aspecten van een werkdag?", type: 'input' },
    { tekst: "Wat zijn je minst favoriete aspecten van een werkdag?", type: 'input' },
    { tekst: "Wat zou je doen als geld geen rol speelde in je carrièrekeuze?", type: 'input' },
    { tekst: "Wat zijn je grootste irritaties op de werkplek?", type: 'input' },
    { tekst: "Wat maakt jou anders dan andere kandidaten?", type: 'input' },
    { tekst: "Wat voor soort projecten trekken je aandacht?", type: 'input' },
    { tekst: "Wat is je favoriete deel van het sollicitatieproces?", type: 'input' },
    { tekst: "Wat is je minst favoriete deel van het sollicitatieproces?", type: 'input' },
    { tekst: "Wat zijn je favoriete eigenschappen van een leidinggevende?", type: 'input' },
    { tekst: "Hoe belangrijk is erkenning voor jou op het werk?", type: 'keuzes', keuzes: ['Heel belangrijk', 'Matig belangrijk', 'Niet belangrijk'] },
    { tekst: "Wat zijn je favoriete manieren om nieuwe vaardigheden te leren?", type: 'input' },
    { tekst: "Wat zijn je favoriete methoden om productief te blijven?", type: 'input' },
    { tekst: "Wat zijn je favoriete bronnen voor carrière-advies?", type: 'input' },
    { tekst: "Wat voor soort werkomgeving stimuleert je creativiteit het meest?", type: 'input' },
    { tekst: "Wat zijn je grootste bijdragen aan een teamproject?", type: 'input' },
    { tekst: "Wat motiveert je om uitdagingen aan te gaan?", type: 'input' },
    { tekst: "Wat is je favoriete manier om je werk te organiseren?", type: 'input' },
    { tekst: "Wat zijn je favoriete methoden om jezelf te ontspannen na het werk?", type: 'input' },
    { tekst: "Wat zijn je favoriete soorten beloningen of erkenning op het werk?", type: 'input' },
    { tekst: "Wat zijn je favoriete manieren om te netwerken?", type: 'input' },
    { tekst: "Wat zijn je favoriete aspecten van een werkdag?", type: 'input' },
    { tekst: "Wat zijn je minst favoriete aspecten van een werkdag?", type: 'input' },
    { tekst: "Wat is je favoriete manier om met nieuwe technologieën om te gaan?", type: 'input' },
    { tekst: "Wat zijn je favoriete manieren om jezelf te blijven ontwikkelen?", type: 'input' },
    { tekst: "Wat zijn je favoriete onderwerpen om over te leren?", type: 'input' },
    { tekst: "Wat zijn je favoriete manieren om jezelf te evalueren?", type: 'input' },
    { tekst: "Wat is je favoriete manier om je werkplek te organiseren?", type: 'input' },
    { tekst: "Wat zijn je favoriete manieren om met een tegenslag om te gaan?", type: 'input' },
    { tekst: "Wat zijn je favoriete manieren om anderen te helpen?", type: 'input' },
    { tekst: "Wat is je favoriete manier om met kritiek om te gaan?", type: 'input' },
    { tekst: "Wat is je favoriete manier om je werk te presenteren?", type: 'input' },
    { tekst: "Wat is je favoriete manier om een probleem op te lossen?", type: 'input' },
    { tekst: "Wat is je favoriete manier om nieuwe projecten te starten?", type: 'input' },
    { tekst: "Wat is je favoriete manier om nieuwe mensen te leren kennen?", type: 'input' },
    { tekst: "Wat is je favoriete manier om jezelf te motiveren?", type: 'input' },
    { tekst: "Wat is je favoriete manier om nieuwe mogelijkheden te ontdekken?", type: 'input' },
    { tekst: "Wat is je favoriete manier om je prestaties bij te houden?", type: 'input' },
    { tekst: "Wat is je favoriete manier om je aan te passen aan veranderingen?", type: 'input' },
    { tekst: "Wat is je favoriete manier om te reflecteren op je werk?", type: 'input' },
    { tekst: "Wat is je favoriete manier om met anderen samen te werken?", type: 'input' },
    ];

  


const Application: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<string[]>(Array(vragen.length).fill(''));

  const handleNext = () => {
    setStep((prevStep) => Math.min(prevStep + 1, vragen.length));
  };

  const handleBack = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLInputElement>, index: number) => {
    const { value } = e.target;
    setFormData((prevData) => {
      const newData = [...prevData];
      newData[index] = value;
      return newData;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData); // Log form data to ensure it's correct

    try {
      // Start the payment process
      const paymentResponse = await fetch('/api/pay', {
        method: 'GET',
      });

      if (!paymentResponse.ok) {
        throw new Error('Payment network response was not ok');
      }

      const paymentResult = await paymentResponse.json();
      console.log("Payment response:", paymentResult); // Log payment response

      // Redirect to the checkout URL
      window.location.href = paymentResult.checkoutUrl;

    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
    <h1 className="scroll-m-20 text-2xl md:text-3xl text-[#0e2a57] font-bold tracking-tight lg:text-4xl ">
            Stap 1. Vul de toets in
      </h1>
    <Progress value={(step / vragen.length) * 100} />
    <form className="max-w-lg mx-auto mt-8" onSubmit={handleSubmit}>
      {vragen.map((vraag, index) => (
        step === index + 1 && (
          <div key={index} className="mb-6">
            <label className="block text-lg font-medium mb-2" htmlFor={`vraag${index}`}>{index + 1}. {vraag.tekst}</label>
            {vraag.type === 'input' ? (
              <input
                type="text"
                id={`vraag${index}`}
                className="w-full px-4 py-3 border rounded"
                placeholder={`Antwoord op vraag ${index + 1}`}
                value={formData[index]}
                onChange={(e) => handleChange(e, index)}
              />
            ) : (
              <div className="mt-2">
                {vraag.keuzes?.map((keuze, i) => (
                  <label key={i} className="inline-flex items-center mb-2">
                    <input
                      type="radio"
                      name={`vraag${index}`}
                      value={keuze}
                      checked={formData[index] === keuze}
                      onChange={(e) => handleChange(e, index)}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2">{keuze}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        )
      ))}
      <div className="flex justify-between mt-8">
        {step > 1 && (
          <Button type="button" onClick={handleBack}>
            Terug
          </Button>
        )}
        {step < vragen.length && (
          <Button type="button" onClick={handleNext}>
            Volgende
          </Button>
        )}
        {step === vragen.length && (
          <Button type="submit">
            Bekijk rapport
          </Button>
        )}
      </div>
    </form>
  </div>
  );
};

export default Application;

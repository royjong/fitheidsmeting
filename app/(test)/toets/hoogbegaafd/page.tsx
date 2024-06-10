"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from '@/components/ui/progress';

interface Vraag {
  tekst: string;
  type: 'input' | 'keuzes';
  klasse: 'taal' | 'rekenen';
  keuzes?: string[];
}

const vragen: Vraag[] = [
    { tekst: "Wat is het verschil tussen een metafoor en een vergelijking?", type: 'input', klasse: 'taal' },
    { tekst: "Wat is het tegenovergestelde van 'snel'?", type: 'input', klasse: 'taal' },
    { tekst: "Wat is de hoofdpersoon in het boek 'De Avonden' van Gerard Reve?", type: 'input', klasse: 'taal' },
    { tekst: "Wat is de betekenis van het woord 'altruïsme'?", type: 'input', klasse: 'taal' },
    { tekst: "Wat is een synoniem voor 'blij'?", type: 'input', klasse: 'taal' },
    { tekst: "Wat is de meest gebruikte letter in de Nederlandse taal?", type: 'input', klasse: 'taal' },
    { tekst: "Wat is de persoonsvorm in de zin: 'De kat slaapt'?", type: 'input', klasse: 'taal' },
    { tekst: "Wat is de verleden tijd van 'zien'?", type: 'input', klasse: 'taal' },
    { tekst: "Wat is de betekenis van het spreekwoord 'De kat uit de boom kijken'?", type: 'input', klasse: 'taal' },
    { tekst: "Wat is een pleonasme en geef een voorbeeld?", type: 'input', klasse: 'taal' },
    { tekst: "Wat is de volgende term in de reeks: 2, 4, 6, 8, ...?", type: 'input', klasse: 'rekenen' },
    { tekst: "Wat is de wortel van 81?", type: 'input', klasse: 'rekenen' },
    { tekst: "Wat is de som van de getallen 1 tot 100?", type: 'input', klasse: 'rekenen' },
    { tekst: "Wat is het resultaat van 12 gedeeld door 4?", type: 'input', klasse: 'rekenen' },
    { tekst: "Wat is de omtrek van een vierkant met zijden van lengte 5?", type: 'input', klasse: 'rekenen' },
    { tekst: "Wat is 30% van 150?", type: 'input', klasse: 'rekenen' },
    { tekst: "Wat is de formule voor het berekenen van de oppervlakte van een cirkel?", type: 'input', klasse: 'rekenen' },
    { tekst: "Wat is de som van de hoeken in een driehoek?", type: 'input', klasse: 'rekenen' },
    { tekst: "Wat is de volgende term in de reeks: 3, 6, 9, 12, ...?", type: 'input', klasse: 'rekenen' },
    { tekst: "Wat is de definitie van een priemgetal?", type: 'input', klasse: 'rekenen' },
    // Andere vragen kunnen hier worden toegevoegd
];

const Hoogbegaafd: React.FC = () => {
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
    <h1 className="text-4xl font-bold mb-8 text-center">Stap 1. Vul de toets in </h1>
    <Progress value={(step / vragen.length) * 100} />
    <form className="max-w-lg mx-auto mt-8" onSubmit={handleSubmit}>
      {vragen.map((vraag, index) => (
        step === index + 1 && (
          <div key={index} className="mb-6">
            <label className="block text-lg font-medium mb-2" htmlFor={`vraag${index}`}>{index + 1}. {vraag.tekst}</label>
            <span className="block text-sm mb-2">{vraag.klasse === 'taal' ? 'Taal' : 'Rekenen'}</span>
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
  
  export default Hoogbegaafd;
  
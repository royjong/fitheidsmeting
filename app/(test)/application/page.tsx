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
  { tekst: "Welk type werkomgeving heeft je voorkeur?", type: 'keuzes', keuzes: ['Kantoor', 'Thuis', 'Hybride'] },
  { tekst: "Wat is je ideale functie?", type: 'input' },
  { tekst: "Hoe ga je om met stress?", type: 'keuzes', keuzes: ['Meditatie', 'Sporten', 'Praten met vrienden'] },
  { tekst: "Wat motiveert je om hard te werken?", type: 'input' },
  { tekst: "Wat zijn je professionele doelen?", type: 'input' },
  { tekst: "Hoe prioriteer je je taken?", type: 'input' },
  { tekst: "Welke vaardigheden wil je ontwikkelen?", type: 'input' },
  { tekst: "Hoe ga je om met feedback?", type: 'input' },
  { tekst: "Wat voor soort team vind je het fijnst om mee te werken?", type: 'keuzes', keuzes: ['Zelfstandig', 'Teamwerk', 'Gemengd'] },
  { tekst: "Wat zijn je verwachtingen van een werkgever?", type: 'input' },
  { tekst: "Hoe ga je om met conflicten op de werkvloer?", type: 'input' },
  { tekst: "Hoe zie je jezelf over vijf jaar?", type: 'input' },
  { tekst: "Wat zijn je grootste prestaties tot nu toe?", type: 'input' },
  { tekst: "Hoe blijf je gemotiveerd tijdens uitdagende projecten?", type: 'input' },
  { tekst: "Wat vind je belangrijk in een werkcultuur?", type: 'input' },
  { tekst: "Hoe zorg je voor een goede werk-privébalans?", type: 'input' },
  { tekst: "Wat is je favoriete manier van leren?", type: 'keuzes', keuzes: ['Lezend', 'Doende', 'Luisterend'] },
  { tekst: "Hoe ga je om met veranderingen op de werkvloer?", type: 'input' },
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
    <div className="container mx-auto py-24">
      <h1 className="text-3xl font-bold mb-6 text-center">Welkom bij de beroepstoets</h1>
      <Progress className="overflow-hidden bg-gray-200 rounded-full w-full h-4 mb-8" value={(step / vragen.length) * 100} />
      <form className="max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit}>
        {vragen.map((vraag, index) => (
          step === index + 1 && (
            <div key={index}>
              <label className="block text-lg font-medium mb-2" htmlFor={`vraag${index}`}>{index + 1}. {vraag.tekst}</label>
              {vraag.type === 'input' ? (
                <input
                  type="text"
                  id={`vraag${index}`}
                  className="w-full p-3 border rounded"
                  placeholder={`Antwoord op vraag ${index + 1}`}
                  value={formData[index]}
                  onChange={(e) => handleChange(e, index)}
                />
              ) : (
                <div className="flex flex-col space-y-2">
                  {vraag.keuzes?.map((keuze, i) => (
                    <label key={i} className="inline-flex items-center">
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
              <div className="flex justify-between mt-4">
                {index > 0 && (
                  <Button type="button" className="w-1/2 p-3 bg-gray-500 text-white rounded mr-2" onClick={handleBack}>
                    Terug
                  </Button>
                )}
                {index < vragen.length - 1 ? (
                  <Button type="button" className="w-1/2 p-3 bg-blue-600 text-white rounded ml-2" onClick={handleNext}>
                    Volgende
                  </Button>
                ) : (
                  <Button type="submit" className="w-1/2 p-3 bg-blue-600 text-white rounded ml-2">
                    Bekijk raport
                  </Button>
                )}
              </div>
            </div>
          )
        ))}
      </form>
    </div>
  );
};

export default Application;

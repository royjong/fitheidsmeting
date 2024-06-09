"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useState } from 'react';

export default function Checkout() {
  const [url, setUrl] = useState('');

  async function makePayment() {
    try {
      const response = await fetch('/api/pay');
      const data = await response.json();

      //If there is 
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        console.error('Payment URL not received');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        <CardHeader>
          <CardTitle>Eenmalige kosten</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex gap-3'>
            <Check /> Arts die naar rapport kijkt
          </div>
          <div className='flex gap-3'>
            <Check /> Direct inzicht in je rapport
          </div>
          <div className='flex gap-3'>
            <Check /> Direct uitslag 
          </div>
          <Button onClick={makePayment}>Nu betalen</Button>
        </CardContent>
      </Card>
    </main>
  );
}

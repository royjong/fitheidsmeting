
import { mollieClient } from "@/lib/mollieClient";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
   

    try {

       const customer = await mollieClient.customer.create({
           name: 'Customer Name', 
           email: 'Customer Email'
       })

        const payment = await mollieClient.payments.create({
            amount: {
              value:    '10.00',
              currency: 'EUR'
            },
            description: 'My first API payment',
            redirectUrl: 'http://127.0.0.1:3000/success',
          });
     
  
          return NextResponse.json({ checkoutUrl: payment.getCheckoutUrl() })
    } catch (error) { 
        return NextResponse.json('error'); 
    }
      // Forward the customer to payment.getCheckoutUrl().
}
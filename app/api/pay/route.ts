// API route: api/pay
import { mollieClient } from "@/lib/mollieClient";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const payment = await mollieClient.payments.create({
      amount: {
        value:    '10.00',
        currency: 'EUR'
      },
      description: 'Eenmalige betaling voor Rapport',
      redirectUrl: 'https://yourwebshop.example.org/order/123456',
    });

    console.log(payment.getCheckoutUrl());

    return NextResponse.json({ checkoutUrl: payment.getCheckoutUrl() });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}

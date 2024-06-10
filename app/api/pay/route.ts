// API route: api/pay
import { mollieClient } from "@/lib/mollieClient";
import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/app/lib/db";


export async function GET(request: Request) {

   // Get user session
   const { getUser } = getKindeServerSession();
   const user = await getUser();


   //Checks if the user is authenticated 
   if (!user) {
     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
   }

   //Retrieves the user 
   const dbUser = await prisma.user.findUnique({
    where: { id: user.id },
    select: { mollieCustomerId: true },
  });

  try {
    const payment = await mollieClient.payments.create({

      customerId: dbUser?.mollieCustomerId, 
      amount: {
        value:    '19.95',
        currency: 'EUR', 
      },
      
      description: 'Eenmalige betaling voor rapport',
      redirectUrl: 'https://fitheidsmeting.vercel.app/',
    });

    console.log(payment.getCheckoutUrl());

    return NextResponse.json({ checkoutUrl: payment.getCheckoutUrl() });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}

import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

interface Answer {
  vraag: string;
  antwoord: string;
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {

    const { getUser } = await getKindeServerSession(); 
    const user = await getUser(); 

    const userId = user?.id as string

  try {

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { answers }: { answers: Answer[] } = req.body;

    // Sla de antwoorden op in de database
    const savedAnswers = await Promise.all(
      answers.map(async (answer) => {
        return await prisma.answer.create({
          data: {
            userId,
            vraag: answer.vraag,
            antwoord: answer.antwoord,
          },
        });
      })
    );

    return NextResponse.json('Worked')
  } catch (error) {
    console.error(error);
    return NextResponse.json('didnt work')
  }
}


import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import { CheckCircle } from "lucide-react"; // Use lucide-react for the check mark

export default async function Success() {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();

  if(!user) { 
    redirect('/')
  }

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-100">
      <Card className="max-w-md w-full p-8 shadow-lg rounded-lg text-center bg-white">
        <CardHeader className="flex flex-col items-center">
          <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
          <CardTitle className="text-2xl font-bold">Je betaling is gelukt, {user?.given_name}!</CardTitle>
        </CardHeader>
        <CardContent className="mt-4">
          <p className="text-gray-600">Bedankt voor je betaling. Je kunt nu je rapport bekijken.</p>
        </CardContent>
        <CardFooter className="mt-6">
          <Link href="/dashboard" className="w-full"> 
                <Button className="w-full" >Bekijk mijn rapport</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

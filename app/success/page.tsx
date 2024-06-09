import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const Success = () => {
    return (
        <div className="h-screen w-full">
            <Card className="m-20">
                <CardHeader>
                    <CardTitle>Betaling gelukt!</CardTitle>
                </CardHeader>
            </Card>
        </div>
     );
}
 
export default Success;
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { getKindeServerSession, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/server';

const Navbar = async () => {
    const { getUser } = await getKindeServerSession(); 
    const user = await getUser(); 

    return ( 
        <nav className="bg-white text-[#102e5c] shadow-sm">
            <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-0">
                <div className="flex items-center">
                    <Link href="/">
                          <Image src="/logo2.png" width={150} height={100} alt="Logo" />
                    </Link>
                </div>
               
                <div className="md:flex md:items-center md:space-x-4">
                    {!user && (
                        <>
                            <Link href="/" className="hidden md:block py-2 px-4 rounded hover:bg-gray-200">Home</Link>
                            <Link href="/autisme-check" className="hidden md:block py-2 px-4 rounded hover:bg-gray-200">Autisme Check</Link>
                            <Link href="/beroepskeuze" className="hidden md:block py-2 px-4 rounded hover:bg-gray-200">Hoogbegaafdheidstest</Link>
                        </>
                    )}
                    {user ? (
                        <div className="flex items-center">
                            <p className="mr-4">{user.email}</p>
                            <LogoutLink>
                                <Button>Uitloggen</Button>
                            </LogoutLink>
                        </div>
                    ) : (
                        <Button>Nu starten</Button>
                    )}
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;

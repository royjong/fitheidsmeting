

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { getKindeServerSession, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/server';

const Navbar = async () => {
    
    const { getUser } = await getKindeServerSession(); 
    const user = await getUser(); 


    return ( 
        <nav className=" text-[#102e5c] shadow-sm">
            <div className="container mx-auto flex items-center justify-between p-5">
                <div className="flex items-center">
                    <Link href="/">
                          <Image src="/logo2.png" width={150} height={100} alt="Logo" />
                    </Link>
                </div>
               
                <div className="md:flex md:items-center">
                    <div className="md:flex md:items-center md:space-x-4">
                        {user ? ( 
                            <LogoutLink>
                              <Button>Uitloggen</Button>
                            </LogoutLink>
                        ): ( 
                            <div className='md:flex md:items-center md:space-x-4 hidden'>
                                    <Link href="/" className="block py-2 px-4 rounded hover:bg-gray-200">Autisme check</Link>
                            <Link href="/beroepskeuze" className="block py-2 px-4 rounded hover:bg-gray-200">Beroeps Check</Link>
                            <Link href="/" className="block py-2 px-4 rounded hover:bg-gray-200">ADHD Check</Link>
                            </div>
                        )}

                       
                    </div>
                    <div className="mt-4 md:mt-0">
                        {user ? (
                             <p>{user.email}</p>
                        ): (
                            <Button>Nu starten</Button>
                        )}
                     
                    </div>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;

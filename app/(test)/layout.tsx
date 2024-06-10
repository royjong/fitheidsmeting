import { ReactNode } from "react";

interface Props { 
    children: ReactNode
}

const Layout = ({children}: Props) => { 
    
    return (  
        <div className="w-full flex flex-col h-screen">
            {children}
        </div>
    );
}
 
export default Layout; 

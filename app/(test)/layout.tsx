import { ReactNode } from "react";

interface Props { 
    children: ReactNode
}

const Layout = ({children}: Props) => { 
    
    return (  
        <div className="w-[85%] mx-auto mt-5">
            {children}
        </div>
    );
}
 
export default Layout; 

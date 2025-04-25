'use client'
import Navbar from "./components/navbar";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    return (
        <header className="absolute top-0 left-0 right-0 z-10 px-4 sm:px-6 lg:px-8 pt-10">
            <Navbar 
                currentPath={pathname} 
            />
        </header>
    );
};

export default Header;

'use client'
import Navbar from "./components/navbar";
import { usePathname } from "next/navigation";
// import { useAuth } from "@/hooks/useAuth";

const Header = () => {
    const pathname = usePathname();
    // const { user, signOut } = useAuth();

    return (
        <header className="absolute top-0 left-0 right-0 z-10 px-4 sm:px-6 lg:px-8 pt-10">
            <Navbar 
                currentPath={pathname} 
                // user={user} 
                // onSignOut={signOut}
            />
        </header>
    );
};

export default Header;

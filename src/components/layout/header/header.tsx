'use client'
import Navbar from "./components/navbar";
import { usePathname } from "next/navigation";
const Header = () => {
    const pathname = usePathname();
    return (
        <header className="mx-auto mt-10  px-4 sm:px-6 lg:px-8">
            <Navbar currentPath={pathname} />
        </header>
    )
}

export default Header;

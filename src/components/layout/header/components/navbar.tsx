import { Button } from "@/components/ui/button";
import NavbarItems from "./nabarItems";
import { navbarConfig } from "./navbarConfig";

interface NavbarProps {
    currentPath: string;
}

const Navbar = ({ currentPath }: NavbarProps) => {
    return (
        <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
            <p className="text-2xl font-bold">Bevel Space</p>
            <NavbarItems currentPath={currentPath} items={navbarConfig} />
            <div className="flex items-center gap-4">
                <Button variant="outline">Login</Button>
                <Button variant="secondary">Sign Up</Button>
            </div>

        </nav>
    )
}

export default Navbar;

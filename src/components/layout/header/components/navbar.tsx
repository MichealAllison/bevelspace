import { Button } from "@/components/ui/button";
import NavbarItems from "./nabarItems";
import { navbarConfig } from "./navbarConfig";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
    currentPath: string;
}

const Navbar = ({ currentPath }: NavbarProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
            <p className="text-2xl font-bold text-white">Bevel Space</p>
            
            <button 
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
                {isMobileMenuOpen ? (
                    <X className="h-6 w-6 text-white" />
                ) : (
                    <Menu className="h-6 w-6 text-white" />
                )}
            </button>

            <div className="hidden lg:block">
                <NavbarItems currentPath={currentPath} items={navbarConfig} />
            </div>

            {isMobileMenuOpen && (
                <div className="fixed inset-0 top-[64px] z-50 bg-black lg:hidden">
                    <div className="flex flex-col p-4 space-y-4">
                        <NavbarItems currentPath={currentPath} items={navbarConfig} />
                        <div className="flex flex-col gap-4">
                            <Button variant="outline" className="w-full">Login</Button>
                            <Button variant="secondary" className="w-full">Sign Up</Button>
                        </div>
                    </div>
                </div>
            )}

            <div className="hidden lg:flex items-center gap-4">
                <Button variant="outline">Login</Button>
                <Button variant="secondary">Sign Up</Button>
            </div>
        </nav>
    )
}

export default Navbar;

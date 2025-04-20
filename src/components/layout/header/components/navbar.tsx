import { Button } from "@/components/ui/button";
import NavbarItems from "./nabarItems";
import { navbarConfig } from "./navbarConfig";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
interface NavbarProps {
    currentPath: string;
}

const Navbar = ({ currentPath }: NavbarProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/">
                <p className="text-2xl font-bold text-white">Bevel Space</p>
            </Link>
            
            <button 
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
                {!isMobileMenuOpen && (
                    <Menu className="h-6 w-6 text-white" />
                )}
            </button>

            <div className="hidden lg:block">
                <NavbarItems currentPath={currentPath} items={navbarConfig} />
            </div>

            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 bg-black lg:hidden">
                    <div className="flex flex-col p-4">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-2xl font-bold text-white">Bevel Space</p>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <X className="h-6 w-6 text-white" />
                            </button>
                        </div>
                        <NavbarItems 
                            currentPath={currentPath} 
                            items={navbarConfig} 
                            onMobileNavClick={() => setIsMobileMenuOpen(false)}
                        />
                        <div className="flex flex-col gap-4 mt-4">
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

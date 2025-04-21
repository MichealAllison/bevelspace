import Link from "next/link";

interface NavbarItemProps {
    label: string;
    isActive: boolean;
    path: string;
    className?: string;
    onMobileNavClick?: () => void;
}

const NavbarItem = ({ label, isActive, path, className, onMobileNavClick }: NavbarItemProps) => {
    return (
        <div className="w-full lg:w-auto">
            <Link 
                aria-label={label}
                className={`flex items-center justify-center lg:justify-start gap-3 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                    isActive ? 'bg-white text-[#222622]' : 'text-gray-200 hover:bg-[#222622] hover:text-white'
                } ${className || ''}`}
                href={path}
                onClick={onMobileNavClick}
            >
                {label}
            </Link>
        </div>
    );
};

export default NavbarItem;

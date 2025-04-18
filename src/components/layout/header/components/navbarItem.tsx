import Link from "next/link";

interface NavbarItemProps {
    label: string;
    isActive: boolean;
    path: string;
}

const NavbarItem = ({ label, isActive, path }: NavbarItemProps) => {
    return (
        <div>
            <Link aria-label={label}
      className={`flex items-center gap-3 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
        isActive ? 'bg-white text-[#012D2A]' : 'text-gray-200 hover:bg-[#034642] hover:text-white'
      }`}
      href={path}>{label}</Link>
        </div>
    )
}

export default NavbarItem;

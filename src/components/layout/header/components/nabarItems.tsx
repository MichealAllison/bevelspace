import NavbarItem from "./navbarItem";

interface NavbarItem {
    label: string;
    path: string;
    items?: NavbarItem[];
}

interface NavbarItemsProps {
    currentPath: string;
    items: NavbarItem[];
    onMobileNavClick?: () => void;
}

const NavbarItems = ({ currentPath, items, onMobileNavClick }: NavbarItemsProps) => {
    return (
        <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-10 p-2 lg:bg-[#545952]/50 lg:rounded-full w-full lg:w-auto">
            {items.map((item, idx) => 
            item.items ? (
                <div className="space-y-2 lg:space-y-0 lg:space-x-2 w-full lg:w-auto" key={idx}>
                    <p className="px-3 py-2.5 text-sm font-medium text-gray-200">{item.label}</p>
                    <ul className="space-y-2 lg:space-y-1 pl-4 lg:pl-0">
                        {item.items.map((subItem, subIdx) => (
                            <NavbarItem 
                                key={subIdx} 
                                label={subItem.label} 
                                isActive={subItem.path === currentPath} 
                                path={subItem.path} 
                                className="w-full"
                                onMobileNavClick={onMobileNavClick}
                            />
                        ))}
                    </ul>
                </div>
            ) : (
                <NavbarItem 
                    key={item.label} 
                    label={item.label} 
                    isActive={item.path === currentPath} 
                    path={item.path} 
                    className="w-full lg:w-auto"
                    onMobileNavClick={onMobileNavClick}
                />
            ))}
        </ul>
    )
}

export default NavbarItems;

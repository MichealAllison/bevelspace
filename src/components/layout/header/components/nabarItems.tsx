import NavbarItem from "./navbarItem";

interface NavbarItem {
    label: string;
    path: string;
    items?: NavbarItem[];
}

interface NavbarItemsProps {
    currentPath: string;
    items: NavbarItem[];
}

const NavbarItems = ({ currentPath, items }: NavbarItemsProps) => {
    return (
        <ul className="flex items-center bg-gray-100/20 gap-10 p-2 rounded-full">
            {items.map((item, idx) => 
            item.items ? (
                <div className="space-x-2" key={idx}>
                    <p className="px-3 py-2.5 text-sm font-medium text-gray-200">{item.label}</p>
                    <ul className="space-y-1">
                        {item.items.map((subItem, subIdx) => (
                            <NavbarItem key={subIdx} label={subItem.label} isActive={subItem.path === currentPath} path={subItem.path} />
                        ))}
                    </ul>
                </div>
            ) : (
                <NavbarItem key={item.label} label={item.label} isActive={item.path === currentPath} path={item.path} />
            ))}
        </ul>
    )
}

export default NavbarItems;

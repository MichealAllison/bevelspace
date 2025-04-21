const MiddleFooter = () => {
    return (
        <div className="mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-0 justify-between text-[#222622] border-t-2 border-b-2 border-dashed border-[#545952] py-4">
            {/* Logo for mobile */}
            <div className="text-[#222622] text-2xl font-bold lg:hidden">Bevel Space</div>
            
            <ul className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-4 lg:gap-10">
                <li className="hover:text-[#545952]">
                    <a href="#">Home</a>
                </li>
                <li className="hover:text-[#545952]">
                    <a href="#">About</a>
                </li>
                <li className="hover:text-[#545952]">
                    <a href="#">Properties</a>
                </li>
                <li className="hover:text-[#545952]">
                    <a href="#">Services</a>
                </li>
            </ul>

            {/* Logo for desktop */}
            <div className="text-[#222622] text-2xl font-bold hidden lg:block">Bevel Space</div>

            <ul className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-4 lg:gap-10">
                <li className="hover:text-[#545952]">
                    <a href="#">Gallery</a>
                </li>
                <li className="hover:text-[#545952]">
                    <a href="#">Blog</a>
                </li>
                <li className="hover:text-[#545952]">
                    <a href="#">Contact</a>
                </li>
                <li className="hover:text-[#545952]">
                    <a href="#">FAQ</a>
                </li>
            </ul>
        </div>
    )
}

export default MiddleFooter;

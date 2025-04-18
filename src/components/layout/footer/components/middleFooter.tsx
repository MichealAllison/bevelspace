const MiddleFooter = () => {
    return (
        <div className="mx-auto flex items-center justify-between text-gray-500 border-t border-b border-dotted-black-700  py-4">
            <ul className="flex items-center list-disc justify-between space-x-10">
                <li className="hover:text-gray-700">
                    <a href="#">Home</a>
                </li>
                <li className="hover:text-gray-700">
                    <a href="#">About</a>
                </li>
                <li className="hover:text-gray-700">
                    <a href="#">Properties</a>
                </li>
                <li className="hover:text-gray-700" >
                    <a href="#">Services</a>
                </li>
            </ul>
            <div className="text-[#034642] text-2xl font-bold">Bevel Space</div>
            <ul className="flex items-center list-disc justify-between space-x-10">
                <li className="hover:text-gray-700">
                    <a href="#">Gallery</a>
                </li>
                <li className="hover:text-gray-700">
                    <a href="#">Blog</a>
                </li>
                <li className="hover:text-gray-700">
                    <a href="#">Contact</a>
                </li>
                <li className="hover:text-gray-700" >
                    <a href="#">FAQ</a>
                </li>
            </ul>

        </div>
    )
}

export default MiddleFooter;

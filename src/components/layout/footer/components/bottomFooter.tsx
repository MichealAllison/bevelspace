const BottomFooter = () => {
    return (
        <div className="mx-auto flex flex-col lg:flex-row items-center gap-4 lg:gap-0 justify-between">
            <p className="text-gray-500 text-center lg:text-left">© 2025 Bevel Space. All rights reserved.</p>
            <div className="flex items-center justify-center lg:justify-between space-x-4">
                <a href="#" className="text-gray-500 underline hover:text-gray-700">Privacy Policy</a>
                <a href="#" className="text-gray-500 underline hover:text-gray-700">Terms of Service</a>
            </div>
        </div>
    )
}

export default BottomFooter;

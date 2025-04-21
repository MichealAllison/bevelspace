const BottomFooter = () => {
    return (
        <div className="mx-auto flex flex-col lg:flex-row items-center gap-4 lg:gap-0 justify-between">
            <p className="text-[#545952] text-center lg:text-left">© 2025 Bevel Space. All rights reserved.</p>
            <div className="flex items-center justify-center lg:justify-between space-x-4">
                <a href="#" className="text-[#545952] underline hover:text-[#222622]">Privacy Policy</a>
                <a href="#" className="text-[#545952] underline hover:text-[#222622]">Terms of Service</a>
            </div>
        </div>
    )
}

export default BottomFooter;

const TopFooter = () => {
    return (
        <div className="mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-0">
            <p className="text-3xl lg:text-5xl font-bold text-[#545952] lg:w-1/2">Discover Nature&apos;s Wonders with Expert Guidance</p>
        
            <div className='w-full lg:w-fit text-left lg:text-right space-y-2'>
                <p className="text-base lg:text-lg text-[#545952] max-w-full lg:w-[400px]">No. 20, 2nd Floor, 1st Main, 1st Cross, Koramangala, Bangalore</p>
                <p className="text-base lg:text-lg text-[#545952]">info@bevelspace.com</p>
                <p className="text-base lg:text-lg text-[#545952]">+91 9876543210</p>
            </div>
        </div>
    )
}

export default TopFooter;

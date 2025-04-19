const FeaturesCards = () => {
    return (
        <div className="relative w-full">
            {/* Gradient indicators for scroll */}
            <div className="absolute right-0 top-0 h-full w-8 scrollbar-hide pointer-events-none md:hidden" />
            <div className="absolute left-0 top-0 h-full w-8 scrollbar-hide pointer-events-none md:hidden" />
            
            {/* Scrollable content */}
            <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
                <div className="flex items-center gap-2 min-w-max px-8">
                    <div className="bg-white rounded-full px-5 py-2.5 hover:bg-gray-50 transition-colors">
                        <p className="text-gray-500 text-sm whitespace-nowrap">Home</p>
                    </div>
                    <div className="bg-white rounded-full px-5 py-2.5 hover:bg-gray-50 transition-colors">
                        <p className="text-gray-500 text-sm whitespace-nowrap">Apartments</p>
                    </div>
                    <div className="bg-white rounded-full px-5 py-2.5 hover:bg-gray-50 transition-colors">
                        <p className="text-gray-500 text-sm whitespace-nowrap">Villas</p>
                    </div>
                    <div className="bg-white rounded-full px-5 py-2.5 hover:bg-gray-50 transition-colors">
                        <p className="text-gray-500 text-sm whitespace-nowrap">Commercial</p>
                    </div>
                    <div className="bg-white rounded-full px-5 py-2.5 hover:bg-gray-50 transition-colors">
                        <p className="text-gray-500 text-sm whitespace-nowrap">Land</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesCards;

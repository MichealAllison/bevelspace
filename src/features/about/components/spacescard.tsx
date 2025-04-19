const SpacesCard = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Satisfaction Card */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                    <div className="space-y-3">
                        <h3 className="text-3xl font-bold text-gray-900">100%</h3>
                        <p className="text-gray-800 font-medium">Satisfaction Rate</p>
                        <p className="text-sm text-gray-500">From our valued clients</p>
                    </div>
                </div>

                {/* Properties Card */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                    <div className="space-y-3">
                        <h3 className="text-3xl font-bold text-gray-900">500+</h3>
                        <p className="text-gray-800 font-medium">Properties Sold</p>
                        <p className="text-sm text-gray-500">Successfully closed deals</p>
                    </div>
                </div>

                {/* Locations Card */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                    <div className="space-y-3">
                        <h3 className="text-3xl font-bold text-gray-900">1000+</h3>
                        <p className="text-gray-800 font-medium">Global Reach</p>
                        <p className="text-sm text-gray-500">Countries & Cities covered</p>
                    </div>
                </div>

                {/* Reviews Card */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                    <div className="space-y-3">
                        <h3 className="text-3xl font-bold text-gray-900">1000+</h3>
                        <p className="text-gray-800 font-medium">Happy Clients</p>
                        <p className="text-sm text-gray-500">5-star positive reviews</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpacesCard;

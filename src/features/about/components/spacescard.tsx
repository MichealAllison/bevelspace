import { motion } from "framer-motion";

const SpacesCard = () => {
    return (
        <div className="container mx-auto px-4 py-12 border-t-2 border-gray-200 border-dashed border-b-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Satisfaction Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="  p-3.5  transition-all duration-300 transform hover:-translate-y-1 border-r-8 border-[#000000]">
                        <div className="space-y-3">
                        <h3 className="text-4xl font-bold text-gray-900">100%</h3>
                        <p className="text-gray-800 text-2xl font-medium">Satisfaction Rate</p>
                            <p className="text-sm text-gray-500">From our valued clients</p>
                        </div>
                    </div>
                </motion.div>

                {/* Properties Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className=" p-6 transition-all duration-300 transform hover:-translate-y-1 border-r-8 border-[#000000]">
                        <div className="space-y-3">
                        <h3 className="text-4xl font-bold text-gray-900">500+</h3>
                        <p className="text-gray-800 text-2xl font-medium">Properties Sold</p>
                            <p className="text-sm text-gray-500">Successfully closed deals</p>
                        </div>
                    </div>
                </motion.div>

                {/* Locations Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className=" p-6 transition-all duration-300 transform hover:-translate-y-1 border-r-8 border-[#000000]">
                        <div className="space-y-3">
                        <h3 className="text-4xl font-bold text-gray-900">1000+</h3>
                        <p className="text-gray-800 text-2xl font-medium">Global Reach</p>
                            <p className="text-sm text-gray-500">Countries & Cities covered</p>
                        </div>
                    </div>

                </motion.div>

                {/* Reviews Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className=" p-6 transition-all duration-300 transform hover:-translate-y-1 border-r-8 border-[#000000]">
                        <div className="space-y-3">
                        <h3 className="text-4xl font-bold text-gray-900">1000+</h3>
                        <p className="text-gray-800 text-2xl font-medium">Happy Clients</p>
                        <p className="text-sm text-gray-500">5-star positive reviews</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default SpacesCard;

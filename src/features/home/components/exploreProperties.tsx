import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PropertyCard from "@/features/listing/components/propertycard";
import { properties } from "@/features/listing/data/propertyData";
import { motion } from "framer-motion";

const ExploreProperties = () => {
    return (
        <div className="container mx-auto  p-10">
            <div className="flex justify-between items-center border-t-2 pb-10 border-b-2 border-dotted border-gray-300 pt-10">
                <div className="flex flex-col space-y-4">
                    <h1 className="text-black text-3xl md:text-5xl lg:text-6xl max-w-full md:max-w-[80%] lg:max-w-[80%] tracking-tighter font-bold">Explore our quality properties</h1>
                    <p className="text-gray-500 text-base md:text-lg max-w-full md:max-w-[70%] lg:max-w-[80%]">Each listing unique features, exceptional service, and a commitment to excellence.</p>
                </div>
                <div className="flex justify-end">
                    <Button variant="outline" className="px-10 py-5">
                    View All Properties <ArrowRight className="w-4 h-4" />
                        </Button>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-40">
                {properties.map((property) => (
                    <PropertyCard 
                        id={property.id}
                        key={property.id} 
                        image={property.images} 
                        title={property.title} 
                        location={property.location} 
                        price={property.price} 
                        bedrooms={property.bedrooms} 
                        bathrooms={property.bathrooms} 
                    />
                ))}
                </div>
            </motion.div>
        </div>
    )
}

export default ExploreProperties;

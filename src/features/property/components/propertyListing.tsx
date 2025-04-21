import { properties } from "@/features/property/data/propertyData";
import PropertyCard from "./propertycard";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
const PropertyListing = () => {
    return (
        <div className="container mx-auto p-10">
            <div className="space-y-5">
                <div className="space-y-4 md:space-y-0 md:flex-row md:justify-center mb-5 w-full md:w-auto md:gap-4">
                    <h1 className="text-[#222622] text-3xl md:text-5xl lg:text-6xl max-w-full md:max-w-[80%] lg:max-w-[80%] tracking-tighter font-bold">Explore our quality properties</h1>
                    <p className="text-[#545952] text-base md:text-lg max-w-full md:max-w-[70%] lg:max-w-[80%]">Each listing unique features, exceptional service, and a commitment to excellence.</p>
                </div>
            
            
            {/* Filter Section */}
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-center mt-5 w-full md:w-auto md:gap-4">
                {/* Search Input - Full width on mobile */}
                <div className="w-full md:w-auto">
                    <Input type="text" placeholder="Search properties" className="w-full h-10" />
                </div>
                
                {/* Filter Controls - Grid on mobile, row on desktop */}
                <div className="grid grid-cols-2 gap-2 md:flex md:flex-row md:gap-4">
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Location" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">All</SelectItem>
                            <SelectItem value="2">New York</SelectItem>
                            <SelectItem value="3">Los Angeles</SelectItem>
                            <SelectItem value="4">Chicago</SelectItem>
                            <SelectItem value="5">Houston</SelectItem>
                        </SelectContent>
                    </Select>
                    
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Price" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">Low to High</SelectItem>
                            <SelectItem value="2">High to Low</SelectItem>
                        </SelectContent>
                    </Select>
                    
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Bedrooms" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                        </SelectContent>
                    </Select>
                    
                    <Button variant="ghost" className="w-full h:full md:h-10 md:px-10 md:py-5">
                        Search
                    </Button>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-40 sm:gap-y20 ">
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
        </div>
    )
}   

export default PropertyListing;

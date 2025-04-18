import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const ExploreProperties = () => {
    return (
        <div className="container mx-auto  p-10">
            <div className="flex justify-between items-center">
                <div className="flex flex-col space-y-4">
                    <h1 className="text-black text-3xl md:text-5xl lg:text-6xl max-w-full md:max-w-[80%] lg:max-w-[80%] tracking-tighter font-bold">Explore our quality properties</h1>
                    <p className="text-gray-500 text-base md:text-lg max-w-full md:max-w-[70%] lg:max-w-[80%]">Each listing unique features, exceptional service, and a commitment to excellence.</p>
                </div>
                <div className="flex justify-end">
                    <Button variant="outline" className="px-10 py-5">
                        <ArrowRight className="w-4 h-4" />
                        View All Properties</Button>
                </div>
            </div>
        </div>
    )
}

export default ExploreProperties;

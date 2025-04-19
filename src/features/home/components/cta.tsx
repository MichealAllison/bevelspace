import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
    return (
        <div 
            className="container mx-auto px-4 sm:px-6 lg:px-10 bg-cover bg-center mt-10 sm:mt-20 rounded-lg" 
            style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/ctaimg.png')` 
            }}
        >
            <div className="flex flex-col justify-center items-center space-y-4 py-10 sm:py-16 lg:py-20 px-4 sm:px-10 lg:px-20">
                <h1 className="text-white text-center text-2xl sm:text-3xl lg:text-4xl tracking-tighter font-bold">
                    Ready to find your dream home?
                </h1>
                
                <p className="text-white/90 text-center text-sm sm:text-base lg:text-lg max-w-[90%] sm:max-w-[80%] lg:max-w-[50%]">
                    Explore our properties and find the perfect home for you.
                </p>
                
                <Button 
                    variant="secondary" 
                    className="bg-white text-black"
                >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    )
}

export default CTA;

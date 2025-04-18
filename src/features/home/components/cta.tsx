import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const CTA = () => {
    return (
        <div className="container mx-auto p-10 bg-cover bg-center mt-20" style={{ backgroundImage: `url('/images/ctaimg.png')` }}>
            <div className="flex flex-col justify-center items-center space-y-4 p-20">
                <h1 className="text-white text-center text-4xl md:text-5xl lg:text-4xl max-w-full md:max-w-[80%] lg:max-w-[60%] tracking-tighter font-bold">Ready to find your dream home?</h1>
                <p className="text-white text-center text-base md:text-lg max-w-full md:max-w-[70%] lg:max-w-[50%]">Explore our properties and find the perfect home for you.</p>
                <Button variant="secondary" className="bg-white text-black">Get Started
                    <ArrowRight className="w-4 h-4" />
                </Button>
            </div>

        </div>
    )
}

export default CTA;

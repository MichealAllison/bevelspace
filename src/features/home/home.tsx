import FeaturesCards from "./components/featuresCards";
import { Button } from "@/components/ui/button";
const Home = () => {
    return (
        <div className="relative">
            <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url('/images/heroimg.png')` }}>
                <div className="mx-auto container pt-20 md:pt-32 lg:pt-60">
                    {/* Hero content*/}
                    <div className="space-y-4 p-4 md:p-6 lg:p-10">
                    <FeaturesCards />
                    <h1 className="text-white text-4xl md:text-5xl lg:text-7xl max-w-full md:max-w-[80%] lg:max-w-[60%] tracking-tighter font-bold">Build Your Future, One Property at a Time</h1>
                    <p className="text-white text-base md:text-lg max-w-full md:max-w-[70%] lg:max-w-[50%]">Own your dream home with Bevel Space. Our expert agents are here to guide you through every step of the process.</p>
                    <Button variant="secondary" className="bg-white text-black">Get Started</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
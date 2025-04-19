'use client'
import { motion } from "framer-motion";
import FeaturesCards from "./featuresCards";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <div className="w-full h-[80vh] lg:h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url('/images/heroimg.png')` }}>
                <div className="mx-auto container pb-20 pt-40 md:pt-32 lg:pt-60">
                    {/* Hero content*/}
                    <div className="space-y-4 p-4 md:p-6 lg:p-10">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <FeaturesCards />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >       
                            <h1 className="text-white text-4xl md:text-5xl lg:text-7xl max-w-full md:max-w-[80%] lg:max-w-[60%] tracking-tighter font-bold">Build Your Future, One Property at a Time</h1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="text-white text-base md:text-lg max-w-full md:max-w-[70%] lg:max-w-[50%]">Own your dream home with Bevel Space. Our expert agents are here to guide you through every step of the process.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Button variant="secondary" className="bg-white text-black">Get Started</Button>
                        </motion.div>
                    </div>
                </div>
            </div>
    )
}

export default Hero;

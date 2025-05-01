'use client'
import { motion } from "framer-motion";
import Image from "next/image";

const AboutHero = () => {
    return (
        <div className="w-full h-[80vh] lg:h-[80vh] relative">
            <Image
                src="/images/aboutheroimg.png"
                alt="About Hero"
                fill
                priority
                className="object-cover"
                sizes="100vw"
                quality={90}
            />
            <div className="relative mx-auto container pb-20 pt-60 md:pt-32 lg:pt-60">
                <div className="space-y-4 p-4 md:p-6 lg:p-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-white text-4xl md:text-5xl lg:text-7xl max-w-full md:max-w-[80%] lg:max-w-[60%] tracking-tighter font-bold">Your Trusted Partner in Real Estate</h1>
                        </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-white text-base md:text-lg max-w-full md:max-w-[70%] lg:max-w-[50%]">Each of our properties is carefully selected to ensure the highest quality and value.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default AboutHero;

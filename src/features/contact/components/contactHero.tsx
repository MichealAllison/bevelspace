import { motion } from "framer-motion";

const ContactHero = () => {
    return (
        <div className="w-full h-[70vh] lg:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url('/images/aboutheroimg.png')` }}>
            <div className="mx-auto container pb-20 pt-60 md:pt-32 lg:pt-60">
                <div className="space-y-4 p-4 md:p-6 lg:p-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-white text-4xl md:text-5xl lg:text-7xl max-w-full md:max-w-[80%] lg:max-w-[60%] tracking-tighter font-bold">We are here to help you</h1>
                        </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-white text-base md:text-lg max-w-full md:max-w-[70%] lg:max-w-[50%]">We are here to help you with your real estate needs.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default ContactHero;

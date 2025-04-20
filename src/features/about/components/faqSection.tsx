import Image from "next/image";
import FAQ from "./faq";

const FAQSection = () => {
    return (
        <div className="container mx-auto px-4 py-12 border-t-2 border-gray-200 border-dashed border-b-2">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="w-full md:w-1/2">
                    <Image 
                        src="/images/faq.png" 
                        alt="FAQ" 
                        width={500} 
                        height={500}
                        className="w-full h-auto" 
                    />
                </div>
                <div className="w-full md:w-1/2 space-y-5">
                    <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">Frequently Asked Questions</h1>
                    <FAQ />
                </div>
            </div>
        </div>
    )
}

export default FAQSection;
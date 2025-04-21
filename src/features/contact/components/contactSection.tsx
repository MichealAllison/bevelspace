import Image from "next/image";
import ContactForm from "./contactForm";

const ContactSection = () => {
    return (
        <div className="container mx-auto px-4 py-12 border-t-2 border-gray-200 border-dashed border-b-2">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="w-full md:w-[40%]">
                    <Image 
                        src="/images/contact.png" 
                        alt="FAQ" 
                        width={500} 
                        height={500}
                        className="w-full h-auto" 
                    />
                </div>
                <div className="w-full md:w-[40%] space-y-5">
                    <h1 className="text-[#222622] text-3xl md:text-4xl font-bold text-center md:text-left">Contact Us</h1>
                    <p className="text-[#545952] text-2xl font-medium text-center md:text-left">We are here to help you with your real estate needs.</p>
                    <ContactForm/>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;
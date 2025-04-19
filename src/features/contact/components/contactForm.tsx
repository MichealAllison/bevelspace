import Image from "next/image";

const ContactForm = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex w-full justify-between">
                <div className=" h-[500px] bg-gray-100 rounded-lg">
                <Image src="/images/contactform.png" alt="Contact Form" width={500} height={500} />
                </div>
                <div className="p-10 h-[500px] bg-gray-100 rounded-lg">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
                    <p className="text-gray-800 text-2xl font-medium">We are here to help you with your real estate needs.</p>
                </div>

                </div>
            </div>
        </div>
    )
}

export default ContactForm;

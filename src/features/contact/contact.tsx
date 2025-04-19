'use client'
import ContactHero from "./components/contactHero";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import ContactForm from "./components/contactForm";

const Contact = () => {
    return (
        <div className="space-y-10">
            <ScrollAnimation>
                <ContactHero />
            </ScrollAnimation>
            <ScrollAnimation>
                <ContactForm />
            </ScrollAnimation>
        </div>
    )
}

export default Contact;

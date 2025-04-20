'use client'
import ContactHero from "./components/contactHero";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import ContactSection from "./components/contactSection";
const Contact = () => {
    return (
        <div className="space-y-10">
            <ScrollAnimation>
                <ContactHero />
            </ScrollAnimation>
            <ScrollAnimation>
                <ContactSection />
            </ScrollAnimation>
        </div>
    )
}

export default Contact;

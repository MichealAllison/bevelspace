import Contact from "@/features/contact/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Contact us for any inquiries or support",
}

export default function ContactPage() {
    return (
        <Contact />
    )
}
import About from "@/features/about/about";
import { Metadata } from "next";
import { StructuredData } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
    title: "About Us",
    description: "Bevel Space is a modern real estate platform that transforms property buying, selling, and management. Where Real Estate Meets Clarity with cutting-edge technology and seamless experience.",
}

const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About Us - Bevel Space",
    "description": "Learn more about Bevel Space - the modern real estate platform that transforms property buying, selling, and management.",
    "url": "https://bevelspace.vercel.app/about",
    "provider": {
        "@type": "Organization",
        "name": "Bevel Space",
        "url": "https://bevelspace.vercel.app"
    }
}


export default function AboutPage() {
    return (
        <>
            <StructuredData data={structuredData} id="about-schema" />
            <About />
        </>
    )
}

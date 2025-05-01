import Property from "@/features/property/property";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Property",
    description: "Property",
}

const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Property - Bevel Space",
    "description": "Explore our properties and find the perfect home for you.",
    "url": "https://bevelspace.vercel.app/property",
    "provider": {
        "@type": "Organization",
        "name": "Bevel Space",
        "url": "https://bevelspace.vercel.app"
    }
}
export default function PropertyPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <Property />
        </>
    )
}
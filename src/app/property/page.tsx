import Property from "@/features/property/property";
import { Metadata } from "next";
import { StructuredData } from "@/components/seo/StructuredData";

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
            <StructuredData data={structuredData} id="property-schema" />
            <Property />
        </>
    )
}
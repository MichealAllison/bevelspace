import Signup from "@/features/auth/signup/signup";
import { Metadata } from "next";
import { StructuredData } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
    title: "Create Account | Bevel Space",
    description: "Join Bevel Space - Create your account to access exclusive real estate listings, save favorite properties, and manage your real estate journey efficiently.",
    robots: {
        index: false,
        follow: true
    }
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Create Account - Bevel Space",
    "description": "Join Bevel Space - Create your account to access exclusive real estate listings.",
    "url": "https://bevelspace.vercel.app/auth/signup",
    "provider": {
        "@type": "Organization",
        "name": "Bevel Space",
        "url": "https://bevelspace.vercel.app"
    }
};

export default function SignupPage() {
    return (
        <>
            <StructuredData data={structuredData} id="signup-schema" />
            <Signup />
        </>
    )
}

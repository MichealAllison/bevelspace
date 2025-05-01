import About from "@/features/about/about";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Bevel Space is a modern real estate platform that transforms property buying, selling, and management. Where Real Estate Meets Clarity with cutting-edge technology and seamless experience.",
}

export default function AboutPage() {
    return (
        <About />
    )
}

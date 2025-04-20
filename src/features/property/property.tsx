'use client'
import PropertyListing from "./components/propertyListing";
import PropertyHero from "./components/propertyHero";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

const Listing = () => {
    return (
        <div className="space-y-10">
            <ScrollAnimation>
                <PropertyHero />
            </ScrollAnimation>
            <ScrollAnimation>
                <PropertyListing />
            </ScrollAnimation>
        </div>
    )
}

export default Listing;

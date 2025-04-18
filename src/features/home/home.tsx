
'use client'
import ExploreProperties from "./components/exploreProperties";
import Hero from "./components/hero";
import HeroSearch from "./components/heroSearch";
import CTA from "./components/cta";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

const Home = () => {
    return (
        <div className="space-y-10">
            <ScrollAnimation>
                <Hero />
            </ScrollAnimation>
            <ScrollAnimation>
                <HeroSearch />
            </ScrollAnimation>
            <ScrollAnimation>
                <ExploreProperties />
            </ScrollAnimation>
            <ScrollAnimation>
                <CTA />
            </ScrollAnimation>
        </div>
    )
}

export default Home;
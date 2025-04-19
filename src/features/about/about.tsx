'use client'
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import AboutHero from "./components/aboutHero";
import SpacesCard from "./components/spacescard";
import CTA from "../home/components/cta";
const About = () => {
    return (
        <div className="space-y-10">
            <ScrollAnimation>
                <AboutHero />
            </ScrollAnimation>
            <ScrollAnimation>
                <SpacesCard />
            </ScrollAnimation>
            <ScrollAnimation>
                <CTA/>
            </ScrollAnimation>
        </div>
    )
}

export default About;

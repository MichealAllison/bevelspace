import ExploreProperties from "./components/exploreProperties";
import Hero from "./components/hero";
import HeroSearch from "./components/heroSearch";

const Home = () => {
    return (
        <div className="relative">
            <Hero />
            <HeroSearch />
            <ExploreProperties />
        </div>
    )
}

export default Home;
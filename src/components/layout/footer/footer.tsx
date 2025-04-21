import MiddleFooter from "./components/middleFooter";
import TopFooter from "./components/topFooter";
import BottomFooter from "./components/bottomFooter";


const Footer = () => {
    return (
        <footer className=" bg-[#D9D9D9] mt-10 py-4 lg:py-8 space-y-10 px-4 sm:px-6 lg:px-8">
            <TopFooter />
            <MiddleFooter />
            <BottomFooter />
        </footer>
    )
}

export default Footer;

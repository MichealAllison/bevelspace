import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const NotFound = () => {
    return (
        <div className="flex bg-black w-full items-center justify-center h-screen">
            <div className="flex flex-col items-left space-y-4 justify-center">
                <h1 className="text-7xl font-bold text-white">Ooops!</h1>
                <p className="text-2xl text-white">The page you are looking for does not exist.</p>
                <Button variant="default" className="w-fit">
                    <Link href="/">Go Back</Link>
                </Button>
            </div>
            <div className="flex flex-col items-right animate-bounce">
                <Image src="/images/ghost.png" alt="404" width={400} height={400} />
            </div>
        </div>
    )
}

export default NotFound;

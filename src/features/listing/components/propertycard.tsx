import { Bed, Bath } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useFormatNumber } from "@/hooks/useFormatNumber";

interface Property {
    id: string;
    image: string;
    title: string;
    location: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
}
const PropertyCard = ( {id, image, title, location, price, bedrooms, bathrooms} : Property) => {
    const { formatNumber } = useFormatNumber();
    return (
        <Link href={`/property/${id}`} className="block w-[300px] h-[300px] space-y-4 cursor-pointer hover:opacity-90 transition-opacity">
           <Image src={image} alt='home' width={300} height={200} className="rounded-lg" />
           <div>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4" />
                    <p className="text-sm font-medium">{bedrooms} Bedrooms</p>
                </div>
                <div className="flex items-center gap-2">
                    <Bath className="w-4 h-4" />
                    <p className="text-sm font-medium">{bathrooms} Bathrooms</p>
                </div>
            </div>
            <h3 className="text-2xl font-bold">{title}</h3>
            <div className="flex justify-between items-center">
                <p className="text-lg font-bold">{formatNumber(price)}</p>
                <p className="text-sm text-gray-500">{location}</p>
            </div>
            
           </div>
        </Link>
    )
}

export default PropertyCard;
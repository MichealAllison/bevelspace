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

const PropertyCard = ({ id, image, title, location, price, bedrooms, bathrooms }: Property) => {
    const { formatNumber } = useFormatNumber();
    return (
        <Link 
            href={`/property/${id}`} 
            className="block w-full sm:w-[300px] min-h-[300px] space-y-3 sm:space-y-4 cursor-pointer hover:opacity-90 transition-opacity"
        >
            <div className="relative w-full aspect-[3/2]">
                <Image 
                    src={image} 
                    alt={title}
                    fill
                    className="rounded-lg object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            
            <div className="space-y-2 sm:space-y-3">
                {/* Bedrooms and Bathrooms */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 sm:gap-2">
                        <Bed className="w-3 h-3 sm:w-4 sm:h-4" />
                        <p className="text-xs sm:text-sm font-medium">{bedrooms} Bedrooms</p>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                        <Bath className="w-3 h-3 sm:w-4 sm:h-4" />
                        <p className="text-xs sm:text-sm font-medium">{bathrooms} Bathrooms</p>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold line-clamp-2">{title}</h3>

                {/* Price and Location */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                    <p className="text-base sm:text-lg font-bold">{formatNumber(price)}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{location}</p>
                </div>
            </div>
        </Link>
    )
}

export default PropertyCard;
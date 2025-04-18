
import { Property } from "@/types/property.type";

export const properties: Property[] = [
    {
        id: "1",
        title: "Property 1",
        description: "Description 1",
        price: 100000,
        images: [
            {
                image1: "https://via.placeholder.com/150",
                image2: "https://via.placeholder.com/150",
                image3: "https://via.placeholder.com/150",
                image4: "https://via.placeholder.com/150",
                image5: "https://via.placeholder.com/150",
                image6: "https://via.placeholder.com/150",
                image7: "https://via.placeholder.com/150",
                image8: "https://via.placeholder.com/150",
            }
        ],
        location: "Lagos, Nigeria",
        features: {
            feature1: "Air Conditioning",
            feature2: "Swimming Pool",
            feature3: "Garden",
            feature4: "Parking",
            feature5: "Security",
            feature6: "Parking",
            feature7: "Security",
            feature8: "Parking",
        },  
        bedrooms: 1,
        bathrooms: 1,
        size: 100,
        type: "Type 1",
        createdAt: new Date("2021-01-01"),
        updatedAt: new Date("2021-01-01"),
        isFeatured: true,
        isActive: true,
        isSold: false,
        isDeleted: false,
        isArchived: false,
    }
]

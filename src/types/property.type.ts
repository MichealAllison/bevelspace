export type Image = {
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: string;
    image6: string;
    image7: string;
    image8: string;
}

export type Feature = {
    feature1: string;
    feature2: string;
    feature3: string;
    feature4: string;
    feature5: string;
    feature6: string;
    feature7: string;
    feature8: string;
}

export type Property = {
    id: string;
    title: string;
    description: string;
    price: number;
    images: Image[];
    location: string;
    features: Feature;
    bedrooms: number;
    bathrooms: number;
    size: number;
    type: string;
    createdAt: Date;
    updatedAt: Date;
    isFeatured: boolean;
    isActive: boolean;
    isSold: boolean;
    isDeleted: boolean;
    isArchived: boolean;
    
}






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
    images: string;
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




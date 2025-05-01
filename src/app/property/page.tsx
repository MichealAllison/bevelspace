import Property from "@/features/property/property";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Property",
    description: "Property",
}

export default function PropertyPage() {
    return (
        <Property />
    )
}
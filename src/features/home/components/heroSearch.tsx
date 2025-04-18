import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
const priceOptions = [
    { value: "100000", label: "100,000" },
    { value: "200000", label: "200,000" },
    { value: "300000", label: "300,000" },
    { value: "400000", label: "400,000" },
]

const locationOptions = [
    { value: "giza", label: "Giza" },
    { value: "cairo", label: "Cairo" },
    { value: "alex", label: "Alex" },
    { value: "mansoura", label: "Mansoura" },
]   

const roomOptions = [
    { value: "1 bedroom", label: "1 bedroom" },
    { value: "2 bedrooms", label: "2 bedrooms" },
    { value: "3 bedrooms", label: "3 bedrooms" },
    { value: "4 bedrooms", label: "4 bedrooms" },
]


const HeroSearch = () => {
    return (
        <div className="flex flex-col space-y-10 justify-center items-center mt-10 bg-white rounded-lg p-5">
            <h1 className="text-4xl font-bold">Find your dream home</h1>
            <div className="flex items-center gap-4 justify-center">
                <div className="flex flex-col space-y-2">
                    <Label className="text-sm">Looking for</Label>
                    <Input className="rounded-full p-5 text-sm w-[300px]" placeholder="Enter type"/>
                </div>
                <div className="flex flex-col space-y-2">
                    <Label className="text-sm">Price</Label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a price" />
                        </SelectTrigger>
                        <SelectContent>
                            {priceOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col space-y-2">
                    <Label className="text-sm">Location</Label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a location" />
                        </SelectTrigger>
                        <SelectContent>
                            {locationOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col space-y-2">
                    <Label className="text-sm">Number of rooms</Label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a number of rooms" />
                        </SelectTrigger>
                        <SelectContent>
                            {roomOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <Button variant="outline" className="rounded-full p-5 text-sm w-[300px]">
                <Search className="w-4 h-4" />
                Search</Button>
        </div>  
    )
}

export default HeroSearch;

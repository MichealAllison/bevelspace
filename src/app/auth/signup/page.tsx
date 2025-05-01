import Signup from "@/features/auth/signup/signup";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Signup",
    description: "Signup to your account",
}

export default function SignupPage() {
    return (
        <Signup />
    )
}

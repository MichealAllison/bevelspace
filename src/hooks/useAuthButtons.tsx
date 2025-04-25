import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { UserProfileBadge } from "@/components/layout/header/components/userProfileBadge";
import { useAuth } from "@/contexts/AuthContext";

export const useAuthButtons = () => {
    const router = useRouter();
    const { user, logout } = useAuth();

    const renderAuthButtons = useCallback(() => {
        if (user) {
            return <UserProfileBadge user={user} onSignOut={logout} />;
        }

        return (
            <>
                <Button variant="outline" onClick={() => router.push("/auth/login")}>Login</Button>
                <Button variant="secondary" onClick={() => router.push("/auth/signup")}>Sign Up</Button>
            </>
        );
    }, [user, logout, router]);

    return { renderAuthButtons };
};

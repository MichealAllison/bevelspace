"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"

interface UserProfileBadgeProps {
  user: {
    name: string
    email: string
    image?: string
  }
  onSignOut: () => void
}

export function UserProfileBadge({ user, onSignOut }: UserProfileBadgeProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Avatar>
          {user.image ? (
            <AvatarImage src={user.image} alt={user.name} />
          ) : (
            <AvatarFallback>
              <User className="h-5 w-5" />
            </AvatarFallback>
          )}
        </Avatar>
        <span className="text-sm font-medium text-white">{user.name}</span>
      </div>
      <Button 
        variant="outline" 
        onClick={onSignOut}
        className="text-sm"
      >
        Sign out
      </Button>
    </div>
  )
}

export default UserProfileBadge;

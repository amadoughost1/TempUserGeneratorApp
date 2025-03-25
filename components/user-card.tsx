"use client"

import type { User } from "@/types/user"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Clipboard, Mail, Phone, MapPin } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

interface UserCardProps {
  user: User
}

export function UserCard({ user }: UserCardProps) {
  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copié !",
      description: `${label} a été copié dans le presse-papier.`,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
        <Avatar className="h-20 w-20">
          <AvatarImage src={`/placeholder.svg?height=80&width=80`} alt={`${user.firstName} ${user.lastName}`} />
          <AvatarFallback>
            {user.firstName[0]}
            {user.lastName[0]}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-2xl font-bold">
            {user.firstName} {user.lastName}
          </h3>
          <p className="text-muted-foreground">Né(e) le {user.birthDate}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {user.email && (
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm font-medium">{user.email}</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => handleCopy(user.email!, "Email")}>
                <Clipboard className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        )}

        {user.phone && (
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm font-medium">{user.phone}</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => handleCopy(user.phone!, "Téléphone")}>
                <Clipboard className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        )}

        {user.address && (
          <Card className="md:col-span-2">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-muted-foreground flex-shrink-0" />
                <span className="text-sm font-medium">
                  {user.address.street}, {user.address.city}, {user.address.postalCode}, {user.address.country}
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  handleCopy(
                    `${user.address!.street}, ${user.address!.city}, ${user.address!.postalCode}, ${user.address!.country}`,
                    "Adresse",
                  )
                }
              >
                <Clipboard className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}


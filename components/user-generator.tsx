"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Clipboard, RefreshCw, Download } from "lucide-react"
import { generateRandomUser } from "@/lib/user-generator"
import type { User } from "@/types/user"
import { UserCard } from "@/components/user-card"
import { toast } from "@/components/ui/use-toast"

export function UserGenerator() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)
  const [country, setCountry] = useState("france")
  const [gender, setGender] = useState("random")
  const [includeEmail, setIncludeEmail] = useState(true)
  const [includePhone, setIncludePhone] = useState(true)
  const [includeAddress, setIncludeAddress] = useState(true)

  const handleGenerate = async () => {
    setLoading(true)
    try {
      const newUser = await generateRandomUser({
        country,
        gender: gender === "random" ? undefined : gender,
        includeEmail,
        includePhone,
        includeAddress,
      })
      setUser(newUser)
    } catch (error) {
      console.error("Error generating user:", error)
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la génération de l'identité.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleCopyAll = () => {
    if (!user) return

    const userText = `
Nom: ${user.firstName} ${user.lastName}
${user.email ? `Email: ${user.email}` : ""}
${user.phone ? `Téléphone: ${user.phone}` : ""}
${user.address ? `Adresse: ${user.address.street}, ${user.address.city}, ${user.address.postalCode}, ${user.address.country}` : ""}
Date de naissance: ${user.birthDate}
    `.trim()

    navigator.clipboard.writeText(userText)
    toast({
      title: "Copié !",
      description: "Les informations ont été copiées dans le presse-papier.",
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Options</CardTitle>
          <CardDescription>Personnalisez les paramètres de génération</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="country">Pays</Label>
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger id="country">
                <SelectValue placeholder="Sélectionnez un pays" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="france">France</SelectItem>
                <SelectItem value="belgium">Belgique</SelectItem>
                <SelectItem value="switzerland">Suisse</SelectItem>
                <SelectItem value="canada">Canada</SelectItem>
                <SelectItem value="usa">États-Unis</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="gender">Genre</Label>
            <Select value={gender} onValueChange={setGender}>
              <SelectTrigger id="gender">
                <SelectValue placeholder="Sélectionnez un genre" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="random">Aléatoire</SelectItem>
                <SelectItem value="male">Homme</SelectItem>
                <SelectItem value="female">Femme</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <Label>Inclure</Label>
            <div className="flex items-center justify-between">
              <Label htmlFor="include-email" className="cursor-pointer">
                Email
              </Label>
              <Switch id="include-email" checked={includeEmail} onCheckedChange={setIncludeEmail} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="include-phone" className="cursor-pointer">
                Téléphone
              </Label>
              <Switch id="include-phone" checked={includePhone} onCheckedChange={setIncludePhone} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="include-address" className="cursor-pointer">
                Adresse
              </Label>
              <Switch id="include-address" checked={includeAddress} onCheckedChange={setIncludeAddress} />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleGenerate} disabled={loading}>
            {loading ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Génération...
              </>
            ) : (
              "Générer une identité"
            )}
          </Button>
        </CardFooter>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Identité générée</CardTitle>
          <CardDescription>Les informations générées sont temporaires et ne sont pas stockées</CardDescription>
        </CardHeader>
        <CardContent>
          {user ? (
            <UserCard user={user} />
          ) : (
            <div className="flex flex-col items-center justify-center h-[300px] bg-muted/30 rounded-lg">
              <p className="text-muted-foreground">Cliquez sur &quot;Générer une identité&quot; pour commencer</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleGenerate} disabled={loading}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Régénérer
          </Button>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={handleCopyAll} disabled={!user}>
              <Clipboard className="mr-2 h-4 w-4" />
              Copier tout
            </Button>
            <Button variant="default" disabled={!user}>
              <Download className="mr-2 h-4 w-4" />
              Exporter
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}


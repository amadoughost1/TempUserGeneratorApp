import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Clock, Settings, Lock } from "lucide-react"

export function Features() {
  return (
    <section className="py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Fonctionnalités</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Découvrez comment TempUserGenerator peut vous aider à protéger votre vie privée en ligne
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <Shield className="h-6 w-6 mb-2 text-primary" />
            <CardTitle>Protection de la vie privée</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Protégez vos informations personnelles en utilisant des identités temporaires pour les inscriptions en
              ligne.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <Clock className="h-6 w-6 mb-2 text-primary" />
            <CardTitle>Identités temporaires</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Générez des identités qui expirent après un certain temps, garantissant que vos données ne persistent pas.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <Settings className="h-6 w-6 mb-2 text-primary" />
            <CardTitle>Options personnalisables</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Personnalisez les identités générées selon vos besoins spécifiques, y compris le pays et le genre.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <Lock className="h-6 w-6 mb-2 text-primary" />
            <CardTitle>Sécurité garantie</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Vos données générées ne sont jamais stockées sur nos serveurs, garantissant une confidentialité totale.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function HowItWorks() {
  return (
    <section className="py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Comment ça marche</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Générer une identité temporaire en quelques étapes simples
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <span className="text-xl font-bold">1</span>
            </div>
            <CardTitle>Personnalisez les options</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Sélectionnez le pays, le genre et les informations que vous souhaitez inclure dans votre identité
              temporaire.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <span className="text-xl font-bold">2</span>
            </div>
            <CardTitle>Générez l&apos;identité</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Cliquez sur le bouton &quot;Générer une identité&quot; pour créer instantanément une identité temporaire
              complète.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <span className="text-xl font-bold">3</span>
            </div>
            <CardTitle>Utilisez les informations</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Copiez les informations générées et utilisez-les pour vous inscrire à des services en ligne tout en
              protégeant votre vie privée.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}


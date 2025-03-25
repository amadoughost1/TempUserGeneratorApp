import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdBanner } from "@/components/ad-banner"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">À propos de TempUserGenerator</h1>

        <AdBanner className="my-6" position="top" />

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Notre mission</CardTitle>
            <CardDescription>Protéger votre vie privée en ligne</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              TempUserGenerator.com a été créé avec une mission claire : aider les utilisateurs à protéger leur vie
              privée en ligne en leur fournissant un moyen simple et efficace de générer des identités temporaires.
            </p>
            <p>
              Dans un monde où les données personnelles sont constamment collectées et exploitées, nous croyons que
              chacun devrait avoir le droit de contrôler quelles informations il partage et avec qui.
            </p>
            <p>
              Notre service permet aux utilisateurs de s&apos;inscrire à des services en ligne, de tester des
              applications ou de naviguer sur le web sans compromettre leurs informations personnelles réelles.
            </p>
          </CardContent>
        </Card>

        <AdBanner className="my-6" position="middle" />

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Comment nous fonctionnons</CardTitle>
            <CardDescription>Un service simple et sécurisé</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              TempUserGenerator utilise des algorithmes avancés pour créer des identités temporaires qui semblent
              authentiques mais sont entièrement fictives. Toutes les informations générées sont aléatoires et ne
              correspondent à aucune personne réelle.
            </p>
            <p>
              Nous ne stockons pas les identités générées sur nos serveurs, ce qui garantit que vos données restent
              privées et sécurisées. Une fois que vous quittez notre site, les informations générées ne sont plus
              accessibles.
            </p>
            <p>
              Notre service est entièrement gratuit et financé par la publicité, ce qui nous permet de continuer à
              offrir cette ressource précieuse à tous ceux qui souhaitent protéger leur vie privée en ligne.
            </p>
          </CardContent>
        </Card>

        <AdBanner className="my-6" position="bottom" />

        <Card>
          <CardHeader>
            <CardTitle>Utilisation éthique</CardTitle>
            <CardDescription>Responsabilité et légalité</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              TempUserGenerator.com est conçu pour être utilisé de manière éthique et légale. Nous encourageons nos
              utilisateurs à utiliser notre service de manière responsable et conformément aux lois et réglementations
              en vigueur.
            </p>
            <p>
              Notre service ne doit pas être utilisé pour des activités frauduleuses, l&apos;usurpation d&apos;identité
              ou toute autre activité illégale. Nous nous réservons le droit de coopérer avec les autorités en cas
              d&apos;utilisation abusive de notre service.
            </p>
            <p>
              En utilisant TempUserGenerator.com, vous acceptez d&apos;utiliser les identités générées uniquement à des
              fins légitimes, comme la protection de votre vie privée en ligne ou le test de services.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


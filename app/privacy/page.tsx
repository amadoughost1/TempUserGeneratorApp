import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AdBanner } from "@/components/ad-banner"

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Politique de confidentialité</h1>

        <AdBanner className="my-6" position="top" />

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Introduction</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Chez TempUserGenerator.com, nous prenons la confidentialité de nos utilisateurs très au sérieux. Cette
              politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations
              lorsque vous utilisez notre service.
            </p>
            <p>
              En utilisant TempUserGenerator.com, vous acceptez les pratiques décrites dans cette politique de
              confidentialité.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Informations que nous collectons</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              <strong>Informations générées :</strong> Les identités temporaires que vous générez sur notre site ne sont
              pas stockées sur nos serveurs. Elles sont créées uniquement pour votre usage immédiat et ne sont pas
              conservées une fois que vous quittez le site.
            </p>
            <p>
              <strong>Informations de navigation :</strong> Comme la plupart des sites web, nous collectons
              automatiquement certaines informations lorsque vous visitez notre site, telles que votre adresse IP, votre
              type de navigateur, votre système d&apos;exploitation et les pages que vous consultez.
            </p>
            <p>
              <strong>Cookies :</strong> Nous utilisons des cookies pour améliorer votre expérience sur notre site et
              pour permettre le fonctionnement de certaines fonctionnalités, comme la personnalisation des paramètres.
              Nous utilisons également des cookies pour la publicité ciblée via Google AdSense.
            </p>
          </CardContent>
        </Card>

        <AdBanner className="my-6" position="middle" />

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Utilisation des informations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Nous utilisons les informations collectées pour :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fournir, maintenir et améliorer notre service</li>
              <li>Analyser l&apos;utilisation de notre site pour améliorer l&apos;expérience utilisateur</li>
              <li>Personnaliser les publicités affichées via Google AdSense</li>
              <li>Détecter et prévenir les activités frauduleuses ou abusives</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Partage des informations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Nous ne vendons, n&apos;échangeons ni ne transférons vos informations personnelles à des tiers, à
              l&apos;exception des cas suivants :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Avec des fournisseurs de services tiers qui nous aident à exploiter notre site (comme Google Analytics
                et Google AdSense)
              </li>
              <li>Si nécessaire pour se conformer à la loi ou pour protéger nos droits</li>
              <li>
                En cas de fusion, acquisition ou vente d&apos;actifs, auquel cas les utilisateurs seraient informés de
                tout changement de propriétaire ou d&apos;utilisation de leurs informations
              </li>
            </ul>
          </CardContent>
        </Card>

        <AdBanner className="my-6" position="bottom" />

        <Card>
          <CardHeader>
            <CardTitle>Vos droits et choix</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Vous avez le droit de :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Désactiver les cookies via les paramètres de votre navigateur</li>
              <li>Refuser la publicité personnalisée en utilisant les paramètres de Google AdSense</li>
              <li>
                Demander l&apos;accès, la correction ou la suppression de vos données personnelles (bien que nous ne
                stockions pas les identités générées)
              </li>
            </ul>
            <p className="mt-4">
              Pour toute question concernant notre politique de confidentialité, veuillez nous contacter à
              privacy@tempusergenerator.com.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


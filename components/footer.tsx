import Link from "next/link"
import { Shield } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6" />
              <span className="text-xl font-bold">TempUserGenerator</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Protégez votre vie privée en ligne avec des identités temporaires générées aléatoirement.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/premium" className="text-sm text-muted-foreground hover:text-primary">
                  Version Premium
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                  Conditions d&apos;utilisation
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary">
                  Politique de cookies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Email: contact@tempusergenerator.com</li>
              <li className="text-sm text-muted-foreground">Suivez-nous sur les réseaux sociaux</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TempUserGenerator.com. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}


import { UserGenerator } from "@/components/user-generator"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { AdBanner } from "@/components/ad-banner"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Générateur d&apos;identités temporaires</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Protégez votre vie privée en ligne avec des identités temporaires générées aléatoirement
          </p>
        </div>

        <AdBanner className="mb-8" position="top" />

        <UserGenerator />
      </section>

      <AdBanner className="my-8" position="middle" />

      <Features />

      <AdBanner className="my-8" position="bottom" />

      <HowItWorks />
    </div>
  )
}


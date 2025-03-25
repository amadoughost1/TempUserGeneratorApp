"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { usePathname } from "next/navigation"
import { Shield } from "lucide-react"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6" />
          <Link href="/" className="text-xl font-bold">
            TempUserGenerator
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Accueil
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/about" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            À propos
          </Link>
          <Link
            href="/privacy"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/privacy" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Confidentialité
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button variant="outline" size="sm" className="hidden md:flex">
            Version Premium
          </Button>
        </div>
      </div>
    </header>
  )
}


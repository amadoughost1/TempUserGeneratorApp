"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface AdBannerProps {
  className?: string
  position: "top" | "middle" | "bottom" | "sidebar"
}

export function AdBanner({ className, position }: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try {
      // @ts-ignore
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error("AdSense error:", err)
    }
  }, [])

  return (
    <div
      ref={adRef}
      className={cn(
        "w-full overflow-hidden bg-muted/30 flex items-center justify-center border rounded-lg",
        position === "top" && "h-[90px] md:h-[90px]",
        position === "middle" && "h-[250px] md:h-[90px]",
        position === "bottom" && "h-[250px] md:h-[90px]",
        position === "sidebar" && "h-[600px] w-[300px]",
        className,
      )}
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", height: "100%" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={`banner-${position}`}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <span className="text-xs text-muted-foreground">Publicité</span>
    </div>
  )
}


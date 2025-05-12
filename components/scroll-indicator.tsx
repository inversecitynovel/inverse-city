"use client"

import { ChevronDown } from "lucide-react"

export function ScrollIndicator() {
  return (
    <div className="scroll-indicator">
      <ChevronDown className="h-6 w-6 animate-bounce text-white/70" />
    </div>
  )
}

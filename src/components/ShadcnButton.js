// components/ShadcnButton.jsx
"use client"

import { Button } from "@/components/ui/button"

export function ShadcnButton({ children, onClick }) {
  return (
    <Button onClick={onClick} className="h-10">
      {children}
    </Button>
  )
}

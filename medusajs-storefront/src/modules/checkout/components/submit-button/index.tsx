"use client"

import { Button } from "@medusajs/ui"
import React from "react"
import { useFormStatus } from "react-dom"

export function SubmitButton({
  children,
  variant = "primary",
  className,
}: {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "transparent" | "danger" | null
  className?: string
}) {
  const { pending } = useFormStatus()

  return (
    <Button
      size="large"
      className="bg-red-600 hover:bg-red-700 text-white"
      type="submit"
      isLoading={pending}
      variant="transparent"
    >
      {children}
    </Button>
  )
}

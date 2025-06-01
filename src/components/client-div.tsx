"use client"

import * as React from "react"

export function ClientDiv({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const [foo, setFoo] = React.useState<string | null>(null);

  return (
    <div {...props}>
      {children}
    </div>
  )
}

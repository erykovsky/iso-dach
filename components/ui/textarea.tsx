import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "brand-focus border-primary/20 placeholder:text-muted-foreground/90 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-20 w-full rounded-xl border bg-white/80 px-3.5 py-2.5 text-base shadow-[0_10px_20px_-18px_rgba(0,0,0,0.45)] transition-[color,box-shadow] outline-none focus-visible:border-primary/40 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }

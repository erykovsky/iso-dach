import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "brand-focus inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "border border-primary/35 bg-primary text-primary-foreground shadow-[0_16px_30px_-18px_rgba(75,0,18,0.8)] hover:-translate-y-0.5 hover:bg-primary/92",
        destructive:
          "border border-destructive/30 bg-destructive text-white hover:-translate-y-0.5 hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-primary/25 bg-white/85 shadow-[0_10px_20px_-16px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 hover:bg-white hover:text-primary dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        hero:
          "border border-white/45 bg-white/8 text-white shadow-[0_16px_30px_-20px_rgba(0,0,0,0.65)] backdrop-blur-sm hover:-translate-y-0.5 hover:bg-white/14 hover:text-white",
        secondary:
          "border border-secondary/30 bg-secondary text-secondary-foreground shadow-[0_12px_24px_-16px_rgba(50,205,50,0.8)] hover:-translate-y-0.5 hover:bg-secondary/88",
        ghost:
          "hover:bg-primary/10 hover:text-primary dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-11 rounded-xl px-7 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

"use client"

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group !z-[140]"
      expand
      visibleToasts={4}
      offset={{ bottom: "20px", left: "20px", right: "20px" }}
      mobileOffset={{ bottom: "14px", left: "12px", right: "12px" }}
      toastOptions={{
        duration: 4500,
        classNames: {
          toast:
            "!rounded-2xl !border !border-primary/15 !bg-white/95 !px-4 !py-3 !text-foreground !shadow-[0_24px_56px_-34px_rgba(75,0,18,0.8),0_10px_18px_-14px_rgba(0,0,0,0.25)] !backdrop-blur-xl data-[type=success]:!border-[#228B22]/30 data-[type=success]:!bg-[#f4fff5] data-[type=error]:!border-[#b91c1c]/30 data-[type=error]:!bg-[#fff6f6]",
          title: "!text-[0.95rem] !font-semibold !tracking-[-0.01em]",
          description: "!mt-1 !text-[0.85rem] !leading-relaxed !text-muted-foreground",
          actionButton:
            "!h-8 !rounded-lg !bg-primary !px-3 !text-[0.8rem] !font-medium !text-primary-foreground hover:!bg-primary/90",
          cancelButton:
            "!h-8 !rounded-lg !border !border-primary/15 !bg-white !px-3 !text-[0.8rem] !font-medium !text-foreground hover:!bg-primary/5",
          closeButton:
            "!h-7 !w-7 !rounded-md !border !border-primary/15 !bg-white/95 !text-muted-foreground !opacity-100 !shadow-sm !ring-0 hover:!bg-white hover:!text-foreground focus-visible:!bg-white focus-visible:!text-foreground",
        },
      }}
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }

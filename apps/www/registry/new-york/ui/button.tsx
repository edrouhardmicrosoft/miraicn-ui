import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--mri-color-brand-base)] text-white border border-transparent hover:bg-[var(--mri-color-brand-hover)] active:bg-[var(--mri-color-brand-active)]",
        destructive:
          "bg-[#e74c3c] text-white border border-transparent hover:bg-[#c0392b] active:bg-[#a93226]",
        outline:
          "bg-transparent text-foreground border border-border hover:bg-background-2 active:bg-background-3",
        secondary:
          "bg-background-2 text-foreground border border-transparent hover:bg-background-3 active:bg-background-4",
        ghost:
          "bg-transparent text-foreground border border-transparent hover:bg-background-2 active:bg-background-3",
        link: "text-brand-text underline-offset-4 hover:underline hover:text-[var(--mri-color-brand-hover)] active:text-brand",
      },
      size: {
        default:
          "h-[var(--mri-size-height)] px-[var(--mri-size-padding)] text-[var(--mri-size-font)] rounded-[var(--mri-border-radius)]",
        sm: "h-6 px-2 text-mri-6 rounded-[var(--mri-border-radius)]",
        lg: "h-10 px-4 text-mri-4 rounded-[var(--mri-border-radius)]",
        icon: "h-[var(--mri-size-height)] w-[var(--mri-size-height)] rounded-[var(--mri-border-radius)]",
      },
      shape: {
        default: "",
        square: "rounded-mri-small",
        rounded: "rounded-mri-medium",
        circular: "rounded-mri-circular",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, shape, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

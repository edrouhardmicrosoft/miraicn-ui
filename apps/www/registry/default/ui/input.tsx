import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "peer flex h-[var(--mri-size-height)] w-full bg-transparent px-2 py-1 text-[var(--mri-size-font)] text-foreground transition-all duration-[var(--mri-duration-rest)] placeholder:text-foreground-3 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            "border-0 border-b-2 border-b-foreground-3",
            "focus:border-b-brand",
            "hover:border-b-foreground-2",
            className
          )}
          ref={ref}
          {...props}
        />
        <span
          className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand transition-all duration-[var(--mri-duration-hover)] peer-focus:w-full"
          aria-hidden="true"
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }

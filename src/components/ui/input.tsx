import * as React from "react"

import { cn } from "@cm/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full bg-white px-4 py-3 text-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 outline-none focus:outline-none focus:ring-0 border border-blue-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 shadow-sm hover:border-blue-400",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

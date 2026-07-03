import * as React from "react"

import { cn } from "@cm/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-xl border border-blue-300 bg-white px-4 py-3 text-sm shadow-sm transition-all placeholder:text-slate-400 focus-visible:outline-none focus-visible:border-[#0859B8] focus-visible:ring-4 focus-visible:ring-[#0859B8]/10 disabled:cursor-not-allowed disabled:opacity-50 hover:border-blue-400",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }

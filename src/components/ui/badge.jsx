import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:scale-105 select-none shadow-xs",
  {
    variants: {
      variant: {
        default:
          "border-indigo-200/80 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:border-indigo-300",
        secondary:
          "border-teal-200/80 bg-teal-50 text-teal-800 hover:bg-teal-100 hover:border-teal-300",
        accent:
          "border-orange-200/80 bg-orange-50 text-orange-800 hover:bg-orange-100 hover:border-orange-300",
        destructive:
          "border-red-200/80 bg-red-50 text-red-700 hover:bg-red-100 hover:border-red-300",
        outline: "text-slate-700 border-slate-300/80 bg-white/90 backdrop-blur-xs hover:bg-slate-100 hover:border-slate-400",
        gold: "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 border border-amber-300 font-extrabold shadow-sm hover:from-amber-300 hover:to-amber-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }


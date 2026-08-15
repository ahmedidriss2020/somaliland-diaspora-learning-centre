import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-xl text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:translate-y-0.5 active:scale-[0.98] cursor-pointer relative overflow-hidden select-none",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md shadow-indigo-900/20 border border-indigo-500/30 hover:from-indigo-500 hover:to-indigo-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-600/30",
        accent:
          "bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md shadow-orange-950/20 border border-orange-400/30 hover:from-orange-400 hover:to-amber-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/30",
        emerald:
          "bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md shadow-emerald-950/20 border border-emerald-500/30 hover:from-emerald-500 hover:to-teal-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-600/30",
        gold:
          "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-extrabold shadow-md shadow-amber-950/20 border border-amber-300 hover:from-amber-300 hover:to-amber-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-400/40",
        destructive:
          "bg-red-600 text-white shadow-sm hover:bg-red-700 hover:-translate-y-0.5",
        outline:
          "border-2 border-slate-200/90 bg-white/90 backdrop-blur-md text-slate-800 shadow-sm hover:bg-slate-100 hover:border-slate-300 hover:text-slate-900 hover:-translate-y-0.5",
        secondary:
          "bg-teal-600 text-white shadow-sm border border-teal-500/30 hover:bg-teal-500 hover:-translate-y-0.5 hover:shadow-md",
        ghost: "hover:bg-slate-100/80 hover:text-slate-900 text-slate-700 rounded-lg",
        link: "text-indigo-600 underline-offset-4 hover:underline p-0 h-auto font-semibold",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-3 text-xs font-semibold",
        lg: "h-12 rounded-xl px-7 text-base font-extrabold tracking-wide",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }


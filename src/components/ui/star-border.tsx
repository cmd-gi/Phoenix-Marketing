import { cn } from "@/lib/utils"

interface StarBorderProps {
  as?: keyof JSX.IntrinsicElements
  color?: string
  speed?: string
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export function StarBorder({
  as = "div",
  className,
  color,
  speed = "6s",
  children,
  onClick,
  ...props
}: StarBorderProps) {
  const Component = as
  const defaultColor = color || "hsl(var(--foreground))"

  return (
    <Component 
      className={cn(
        "relative inline-block py-[1px] overflow-hidden rounded-[20px]",
        className
      )} 
      onClick={onClick}
      {...(props as any)}
    >
      <div
        className={cn(
          "absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0",
          "opacity-20 dark:opacity-70" 
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className={cn(
          "absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0",
          "opacity-20 dark:opacity-70"
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className={cn(
        "relative z-10 border text-foreground text-center text-base py-2 px-4 rounded-[16px]",
        "bg-gradient-to-b from-background/95 to-card/95 border-border/60 backdrop-blur-sm",
        "dark:from-background/95 dark:to-card/95 dark:border-border/60"
      )}>
        {children}
      </div>
    </Component>
  )
}
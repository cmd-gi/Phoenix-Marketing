"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-background text-foreground transition-colors duration-300",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--light-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--aurora-dark:repeating-linear-gradient(100deg,var(--white)_10%,var(--gray-200)_15%,var(--white)_20%,var(--gray-300)_25%,var(--white)_30%)]
            [--aurora-light:repeating-linear-gradient(100deg,var(--black)_10%,var(--gray-800)_15%,var(--black)_20%,var(--gray-700)_25%,var(--black)_30%)]
            [background-image:var(--dark-gradient),var(--aurora-dark)]
            light:[background-image:var(--light-gradient),var(--aurora-light)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px]
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora-dark)] 
            after:light:[background-image:var(--light-gradient),var(--aurora-light)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-screen light:after:mix-blend-multiply
            pointer-events-none
            absolute -inset-[10px] opacity-60 will-change-transform`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  onNavItemClick?: (item: NavItem) => void
  activeItem?: string
}

export function TubelightNavBar({ items, className, onNavItemClick, activeItem }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(activeItem || items[0]?.name || '')
  const [isMobile, setIsMobile] = useState(false)

  // Update activeTab when activeItem changes (for route-based navigation)
  useEffect(() => {
    if (activeItem) {
      setActiveTab(activeItem)
    }
  }, [activeItem])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleNavClick = (item: NavItem) => {
    setActiveTab(item.name)
    onNavItemClick?.(item)
  }

  return (
    <div className={cn("", className)}>
      <div className="flex items-center gap-2 bg-background/20 border border-border/50 backdrop-blur-xl py-2 px-2 rounded-full shadow-2xl ring-1 ring-white/10">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <button
              key={item.name}
              onClick={() => handleNavClick(item)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-300",
                "text-foreground/60 hover:text-foreground",
                isActive && "text-foreground",
                "min-w-[44px] flex items-center justify-center"
              )}
            >
              <span className="hidden md:inline px-2">{item.name}</span>
              <span className="md:hidden">
                <Icon size={20} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="tubelight"
                  className="absolute inset-0 w-full bg-foreground/15 rounded-full -z-10 ring-1 ring-foreground/10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-foreground/80 rounded-t-full">
                    <div className="absolute w-12 h-6 bg-foreground/20 rounded-full blur-md -top-2 -left-1" />
                    <div className="absolute w-8 h-4 bg-foreground/25 rounded-full blur-sm -top-1 left-1" />
                    <div className="absolute w-4 h-3 bg-foreground/30 rounded-full blur-[2px] top-0 left-3" />
                  </div>
                </motion.div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
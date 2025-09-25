import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MoreHorizontal, X } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

interface MobileMenuProps {
  items: Array<{
    name: string
    url: string
    icon: React.ComponentType<any>
  }>
}

export function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (item: any) => {
    navigate(item.url)
    setIsOpen(false)
  }

  return (
    <>
      {/* Menu Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-background/90 border border-border backdrop-blur-lg p-2.5 rounded-full shadow-xl ring-1 ring-foreground/5 text-foreground/60 hover:text-foreground transition-all duration-300"
      >
        {isOpen ? <X size={16} /> : <MoreHorizontal size={16} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 bg-background/95 border border-border backdrop-blur-lg rounded-2xl shadow-xl ring-1 ring-foreground/5 p-2 min-w-[160px]"
          >
            {items.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.url

              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-200 ${
                    isActive
                      ? 'bg-foreground/10 text-foreground'
                      : 'text-foreground/70 hover:bg-foreground/5 hover:text-foreground'
                  }`}
                >
                  <Icon size={16} />
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
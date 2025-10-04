import { Home, User, Briefcase, Eye, FileText, MessageCircle, Menu, X } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { TubelightNavBar } from "@/components/ui/tubelight-navbar"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import phoenixCrest from '@/assets/phoenix-crest.png'

export function PhoenixNavBar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Services', url: '/services', icon: Briefcase },
    { name: 'Work', url: '/work', icon: Eye },
    { name: 'Insights', url: '/insights', icon: FileText },
    { name: 'Contact', url: '/contact', icon: MessageCircle }
  ]

  const handleNavClick = (item: any) => {
    navigate(item.url)
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  const handleLogoClick = () => {
    navigate('/')
    setIsMobileMenuOpen(false)
  }

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Find current active item based on location
  const currentItem = navItems.find(item => item.url === location.pathname) || navItems[0]

  // Helper function for page descriptions
  const getPageDescription = (pageName: string): string => {
    const descriptions: Record<string, string> = {
      'Home': 'Welcome & Overview',
      'About': 'Our Story & Journey',
      'Services': 'What We Offer',
      'Work': 'Portfolio & Cases',
      'Insights': 'Blog & Resources',
      'Contact': 'Get In Touch'
    }
    return descriptions[pageName] || 'Explore More'
  }

  return (
    <>
      {/* Desktop Layout - Logo on side */}
      <div className="hidden md:flex fixed top-6 left-6 z-[100]">
        {/* Logo */}
        <button 
          onClick={handleLogoClick}
          className="bg-background/20 border border-border/50 backdrop-blur-xl p-3 rounded-full shadow-2xl ring-1 ring-white/10 hover:bg-background/30 hover:scale-105 transition-all duration-300 group"
        >
          <img src={phoenixCrest} alt="Phoenix" className="h-8 w-8 group-hover:rotate-3 transition-transform duration-300" />
        </button>
      </div>

      {/* Desktop Navigation - Center */}
      <div className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-[100]">
        <TubelightNavBar 
          items={navItems} 
          onNavItemClick={handleNavClick}
          activeItem={currentItem.name}
        />
      </div>

      {/* Desktop Theme Toggle - Right side */}
      <div className="hidden md:flex fixed top-6 right-6 z-[100]">
        <div className="bg-background/20 border border-border/50 backdrop-blur-xl py-2 px-2 rounded-full shadow-2xl ring-1 ring-white/10">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Layout - Clean header with hamburger */}
      <div className="md:hidden fixed top-4 left-4 right-4 z-[100] flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={handleLogoClick}
          className="bg-background/20 border border-border/50 backdrop-blur-xl p-2.5 rounded-full shadow-2xl ring-1 ring-white/10 hover:bg-background/30 hover:scale-105 transition-all duration-300 group"
        >
          <img src={phoenixCrest} alt="Phoenix" className="h-6 w-6 group-hover:rotate-3 transition-transform duration-300" />
        </button>

        {/* Center - Current page indicator */}
        <div className="bg-background/20 border border-border/50 backdrop-blur-xl px-4 py-2 rounded-full shadow-2xl ring-1 ring-white/10">
          <div className="flex items-center gap-2">
            <currentItem.icon size={16} strokeWidth={2.5} className="text-foreground" />
            <span className="text-sm font-medium text-foreground">{currentItem.name}</span>
          </div>
        </div>

        {/* Right side - Menu toggle + Theme */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <div className="bg-background/20 border border-border/50 backdrop-blur-xl p-2 rounded-full shadow-2xl ring-1 ring-white/10">
            <ThemeToggle />
          </div>
          
          {/* Hamburger Menu */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="bg-background/20 border border-border/50 backdrop-blur-xl p-2.5 rounded-full shadow-2xl ring-1 ring-white/10 hover:bg-background/30 hover:scale-105 transition-all duration-300"
          >
            {isMobileMenuOpen ? (
              <X size={18} strokeWidth={2.5} className="text-foreground" />
            ) : (
              <Menu size={18} strokeWidth={2.5} className="text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[90] bg-background/95 backdrop-blur-xl mobile-menu-enter">
          <div className="flex flex-col items-center justify-center h-full p-8">
            {/* Menu Items */}
            <div className="space-y-4 w-full max-w-sm">
              {navItems.map((item, index) => {
                const Icon = item.icon
                const isActive = currentItem.name === item.name

                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className={`w-full group relative overflow-hidden rounded-2xl p-4 transition-all duration-300 mobile-nav-item mobile-nav-button ${
                      isActive 
                        ? 'bg-foreground/10 border border-foreground/20' 
                        : 'bg-background/20 border border-border/50 hover:bg-foreground/5 hover:border-foreground/10'
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    {/* Tubelight effect for active item */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent animate-pulse" />
                    )}
                    
                    <div className="relative flex items-center gap-4">
                      <div className={`p-3 rounded-full transition-all duration-300 ${
                        isActive 
                          ? 'bg-foreground/20 text-foreground' 
                          : 'bg-foreground/10 text-foreground/70 group-hover:bg-foreground/20 group-hover:text-foreground'
                      }`}>
                        <Icon size={20} strokeWidth={2.5} />
                      </div>
                      
                      <div className="flex-1 text-left">
                        <h3 className={`font-semibold transition-colors duration-300 ${
                          isActive ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground'
                        }`}>
                          {item.name}
                        </h3>
                        <p className={`text-sm transition-colors duration-300 ${
                          isActive ? 'text-foreground/60' : 'text-foreground/50 group-hover:text-foreground/70'
                        }`}>
                          {getPageDescription(item.name)}
                        </p>
                      </div>
                      
                      {/* Active indicator */}
                      {isActive && (
                        <div className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
                      )}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Footer text */}
            <div className="mt-12 text-center">
              <p className="text-foreground/50 text-sm">Phoenix Crest Marketing</p>
              <p className="text-foreground/30 text-xs mt-1">Elevating brands through excellence</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
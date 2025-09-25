import { Home, User, Briefcase, Eye, FileText, MessageCircle } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import { TubelightNavBar } from "@/components/ui/tubelight-navbar"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import phoenixCrest from '@/assets/phoenix-crest.png'

export function PhoenixNavBar() {
  const navigate = useNavigate()
  const location = useLocation()

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
  }

  const handleLogoClick = () => {
    navigate('/')
  }

  // Find current active item based on location
  const currentItem = navItems.find(item => item.url === location.pathname) || navItems[0]

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

      {/* Mobile Layout - All icons visible */}
      <div className="md:hidden fixed top-4 left-4 right-4 z-[100] flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={handleLogoClick}
          className="bg-background/20 border border-border/50 backdrop-blur-xl p-2.5 rounded-full shadow-2xl ring-1 ring-white/10 hover:bg-background/30 hover:scale-105 transition-all duration-300 group"
        >
          <img src={phoenixCrest} alt="Phoenix" className="h-6 w-6 group-hover:rotate-3 transition-transform duration-300" />
        </button>

        {/* All Navigation Icons */}
        <div className="bg-background/20 border border-border/50 backdrop-blur-xl py-1.5 px-1.5 rounded-full shadow-2xl ring-1 ring-white/10">
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = currentItem.name === item.name

              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`relative p-2 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'text-foreground bg-foreground/20' 
                      : 'text-foreground/60 hover:text-foreground hover:bg-foreground/10'
                  }`}
                >
                  <Icon size={15} strokeWidth={2.5} />
                </button>
              )
            })}
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="bg-background/20 border border-border/50 backdrop-blur-xl py-2 px-2 rounded-full shadow-2xl ring-1 ring-white/10">
          <ThemeToggle />
        </div>
      </div>
    </>
  )
}
// Demo showing how to use the Tubelight NavBar
import { Home, User, Briefcase, FileText, MessageCircle, Eye } from 'lucide-react'
import { TubelightNavBar } from "@/components/ui/tubelight-navbar"

export function TubelightNavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Projects', url: '/work', icon: Briefcase },
    { name: 'Blog', url: '/insights', icon: FileText },
    { name: 'Contact', url: '/contact', icon: MessageCircle }
  ]

  const handleNavClick = (item: any) => {
    console.log('Navigation clicked:', item)
    // Handle navigation logic here
  }

  return (
    <div className="fixed bottom-6 sm:top-6 left-1/2 -translate-x-1/2 z-50">
      <TubelightNavBar 
        items={navItems} 
        onNavItemClick={handleNavClick}
      />
    </div>
  )
}
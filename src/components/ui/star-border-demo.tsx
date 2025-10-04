import { cn } from "@/lib/utils"
import { StarBorder } from "@/components/ui/star-border"
import { ArrowRight, Zap, Globe } from "lucide-react"

export function StarBorderDemo() {
  return (
    <div className="space-y-8 p-8 bg-black min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-2xl font-bold mb-8">StarBorder Component Demo</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {/* Basic StarBorder */}
        <StarBorder>
          Theme-aware Border
        </StarBorder>

        {/* Button with icon */}
        <StarBorder 
          as="button"
          className="hover:scale-105 transition-transform duration-300"
          color="#60a5fa"
          speed="4s"
        >
          <div className="flex items-center gap-2">
            <Zap size={16} />
            Interactive Button
            <ArrowRight size={16} />
          </div>
        </StarBorder>

        {/* Timeline year style */}
        <StarBorder
          className="inline-block"
          color="rgba(255,255,255,0.8)"
          speed="5s"
        >
          <div className="px-4 py-2 text-sm font-bold text-white">
            2024
          </div>
        </StarBorder>

        {/* CTA style */}
        <StarBorder 
          as="button"
          className="group hover:scale-105 transition-transform duration-300"
          color="#22c55e"
          speed="3s"
        >
          <div className="flex items-center gap-2 px-6 py-3">
            <Globe size={18} />
            Start Your Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </StarBorder>

        {/* Different speeds and colors */}
        <StarBorder color="#f59e0b" speed="2s">
          Fast Animation
        </StarBorder>

        <StarBorder color="#ef4444" speed="8s">
          Slow Animation
        </StarBorder>

        {/* Custom styling */}
        <StarBorder 
          className="text-center font-bold text-lg"
          color="#8b5cf6"
          speed="4s"
        >
          Custom Styled Border
        </StarBorder>

        {/* Clickable div */}
        <StarBorder 
          as="div"
          className="cursor-pointer hover:scale-105 transition-transform duration-300"
          color="#06b6d4"
          speed="6s"
          onClick={() => alert('StarBorder clicked!')}
        >
          Clickable Div Element
        </StarBorder>
      </div>
    </div>
  )
}
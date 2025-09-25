import { motion, Variants } from 'framer-motion'
import { useInView } from '@/hooks/use-in-view'
import { ReactNode } from 'react'

interface StaggerRevealProps {
  children: ReactNode
  staggerDelay?: number
  initialDelay?: number
  className?: string
  threshold?: number
  triggerOnce?: boolean
}

export function StaggerReveal({
  children,
  staggerDelay = 0.1,
  initialDelay = 0,
  className = '',
  threshold = 0.1,
  triggerOnce = true,
}: StaggerRevealProps) {
  const { ref, isInView } = useInView({ threshold, triggerOnce })

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: initialDelay,
        staggerChildren: staggerDelay,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.8, 0.25, 1] as const,
      },
    },
  }

  return (
    <motion.div
      ref={ref as any}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={itemVariants}>{children}</motion.div>
      }
    </motion.div>
  )
}
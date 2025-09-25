'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/use-in-view'

type AnimationType = 
  | 'fade-in-up' 
  | 'fade-in-down' 
  | 'fade-in-left' 
  | 'fade-in-right' 
  | 'scale-in' 
  | 'slide-in-up'
  | 'slide-in-down'
  | 'noise'

interface ScrollRevealProps {
  children: React.ReactNode
  animation?: AnimationType
  delay?: number
  duration?: number
  className?: string
  threshold?: number
  triggerOnce?: boolean
}

const animationVariants = {
  'fade-in-up': {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  },
  'fade-in-down': {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 }
  },
  'fade-in-left': {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  },
  'fade-in-right': {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  },
  'scale-in': {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  },
  'slide-in-up': {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  'slide-in-down': {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  },
  'noise': {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    }
  }
}

export function ScrollReveal({
  children,
  animation = 'fade-in-up',
  delay = 0,
  duration = 0.6,
  className = '',
  threshold = 0.1,
  triggerOnce = true,
}: ScrollRevealProps) {
  const { ref, isInView } = useInView({ threshold, triggerOnce })

  return (
    <motion.div
      ref={ref as any}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={animationVariants[animation]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.8, 0.25, 1] as const
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/motion-variants'
import { cn } from '@/utils/cn'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

/**
 * Scroll-triggered fade-in wrapper.
 * Animates once on viewport entry — never re-animates on scroll back.
 * Uses centralized fadeIn variant from motion-variants.ts.
 */
export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '100px' }}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

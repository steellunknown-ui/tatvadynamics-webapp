'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

/**
 * LenisProvider — initializes smooth scroll for the entire site.
 * Must be rendered in root layout, wrapping all page content.
 *
 * Configuration:
 * - duration 1.2s with expo-out easing (matches industrial motion curve)
 * - wheelMultiplier 0.8 (slightly slower = premium feel)
 * - Cleanup on unmount prevents memory leaks
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration:         1.0,
      easing:           (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation:      'vertical',
      smoothWheel:      true,
      wheelMultiplier:  1.0,
      touchMultiplier:  1.5,
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}

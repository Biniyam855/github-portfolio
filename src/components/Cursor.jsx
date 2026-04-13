'use client'
// ── Cursor.jsx ─────────────────────────────────────────────────────────────
// GSAP smoothly moves the dot to follow the mouse.
// mix-blend-mode:difference makes it invert whatever color is behind it.

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Const } from 'three/tsl'

export default function Cursor() {
  const dot = useRef(null)

  useEffect(() => {
    // gsap.to on mousemove = butter-smooth lag
    const onMove = (e) =>
      gsap.to(dot.current, { x: e.clientX, y: e.clientY, duration: 0.15, ease: 'power2.out' })

    const grow   = () => gsap.to(dot.current, { scale: 3,  duration: 0.3 })
    const shrink = () => gsap.to(dot.current, { scale: 1,  duration: 0.3 })

    window.addEventListener('mousemove', onMove)

    // Grow on any interactive element
    document.querySelectorAll('a, button, .btn').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    

    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      ref={dot}
      style={{
        position: 'fixed', top: 0, left: 0,
        width: 14, height: 14,
        borderRadius: '50%',
        background: '#d0d308ff',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        transform: 'translate(-50%, -50%)',
      }}
    />
  )
}

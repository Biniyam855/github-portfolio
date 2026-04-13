import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ProgressBar = () => {
  const progressBarRef = useRef(null)
  const progressFillRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const animation = gsap.to(progressFillRef.current, {
      width: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
        onUpdate: (self) => {
          const progress = self.progress.toFixed(2)

          if (progress > 0.75) {
            gsap.to(progressFillRef.current, { backgroundColor: '#deb212', duration: 0.5 })
          } else if (progress > 0.5) {
            gsap.to(progressFillRef.current, { backgroundColor: '#0411a1', duration: 0.5 })
          } else if (progress > 0.1) {
            gsap.to(progressFillRef.current, { backgroundColor: '#d6ff33', duration: 0.5 })
          } else {
            gsap.to(progressFillRef.current, { backgroundColor: '#ffff0f', duration: 0.5 })
          }
        }
      }
    })

    return () => {
      animation.scrollTrigger?.kill()
      animation.kill()
    }
  }, []) // ✅ important

  return (
    <div
      ref={progressBarRef}
      className="fixed top-0 left-0 w-full h-[5px] bg-gray-800 z-50"
    >
      <div
        ref={progressFillRef}
        className="w-0 h-full transition-colors duration-300"
        style={{ width: '0%' }}
      />
    </div>
  )
}

export default ProgressBar
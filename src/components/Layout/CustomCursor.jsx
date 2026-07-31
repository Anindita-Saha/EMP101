import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [isFinePointer, setIsFinePointer] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    setIsFinePointer(mq.matches)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!mq.matches || reduceMotion) return

    let ringX = 0, ringY = 0, targetX = 0, targetY = 0
    let raf

    function onMove(e) {
      targetX = e.clientX
      targetY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${targetX}px, ${targetY}px)`
      }
    }

    function loop() {
      ringX += (targetX - ringX) * 0.18
      ringY += (targetY - ringY) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`
      }
      raf = requestAnimationFrame(loop)
    }

    function onOver(e) {
      const interactive = e.target.closest('a, button, input, textarea, [data-cursor-hover]')
      setHovering(Boolean(interactive))
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!isFinePointer) return null

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[90] h-1.5 w-1.5 -ml-[3px] -mt-[3px] rounded-full bg-signal"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[90] rounded-full border border-signal/60 transition-[width,height,margin,opacity] duration-200 ease-out ${
          hovering ? 'h-10 w-10 -ml-5 -mt-5 opacity-100 bg-signal/10' : 'h-7 w-7 -ml-[14px] -mt-[14px] opacity-70'
        }`}
        style={{ willChange: 'transform' }}
      />
    </>
  )
}

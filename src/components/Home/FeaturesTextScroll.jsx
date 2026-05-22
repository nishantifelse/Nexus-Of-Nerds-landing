import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const features = [
  'Mentorship',
  'Startup Pitch Prep',
  'Roadmaps',
  'Interview Prep',
  '1000+ Live Opportunities',
]

const FeaturesTextScroll = () => {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const clone = track.cloneNode(true)
    track.parentNode.appendChild(clone)

    const totalWidth = track.scrollWidth

    const tween = gsap.fromTo(
      [track, clone],
      { x: 0 },
      {
        x: -totalWidth,
        duration: 18,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
        },
      }
    )

    return () => {
      tween.kill()
      if (clone.parentNode) clone.parentNode.removeChild(clone)
    }
  }, [])

  return (
    <section>
      <div
        style={{
          overflow: 'hidden',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          height: 'clamp(48px, 8vw, 72px)',
        }}
      >
        {/* Left fade */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: 'clamp(20px, 4vw, 50px)',
            background:
              'linear-gradient(to right, #000000 20%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.3) 80%, transparent 100%)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Right fade */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            height: '100%',
            width: 'clamp(20px, 4vw, 50px)',
            background:
              'linear-gradient(to left, #000000 20%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.3) 80%, transparent 100%)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Scrolling track */}
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            willChange: 'transform',
            height: '100%',
          }}
        >
          {features.map((text, i) => (
            <React.Fragment key={i}>
              <span
                style={{
                  color: 'white',
                  fontSize: 'clamp(0.95rem, 2.5vw, 1.5rem)',
                  fontWeight: 500,
                  lineHeight: 1,
                  padding: '0 clamp(1rem, 3vw, 3.5rem)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                {text}
              </span>
              <span
                style={{
                  color: 'rgba(255,255,255,0.35)',
                  fontSize: 'clamp(0.4rem, 0.8vw, 0.5rem)',
                  flexShrink: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: '100%',
                  lineHeight: 1,
                }}
              >
                ◆
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesTextScroll
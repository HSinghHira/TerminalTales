import gsap from 'gsap'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const usePageTransition = (pageRef, curtainRef, loadingRef) => {
  const location = useLocation()

  // Initial page load animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        pageRef.current,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.1, // Reduced duration
          ease: 'power2.out',
          delay: 0.05 // Reduced delay
        }
      )
    })

    return () => ctx.revert()
  }, [])

  // Page transition animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo(
        curtainRef.current,
        {
          scaleY: 0
        },
        {
          scaleY: 1,
          duration: 0.1, // Reduced duration
          ease: 'power4.inOut'
        }
      )
        .to(pageRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.2 // Reduced duration
        })
        .fromTo(
          loadingRef.current,
          {
            opacity: 0,
            scale: 0.8
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.2 // Reduced duration
          },
          '-=0.1'
        )
        .to({}, { duration: 0.3 }) // Reduced duration
        .to(loadingRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.05 // Reduced duration
        })
        .to(curtainRef.current, {
          scaleY: 0,
          duration: 0.05, // Reduced duration
          ease: 'power4.inOut'
        })
        .fromTo(
          pageRef.current,
          {
            opacity: 0,
            y: 20
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.05, // Reduced duration
            ease: 'power2.out'
          },
          '-=0.1'
        )
    })

    return () => ctx.revert()
  }, [location.pathname])
}

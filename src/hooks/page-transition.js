import gsap from 'gsap'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const usePageTransition = (pageRef, curtainRef) => {
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
          duration: 0.1,
          ease: 'power2.out',
          delay: 0.05
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
          duration: 0.1,
          ease: 'power4.inOut'
        }
      )
        .to(pageRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.2
        })
        .to(curtainRef.current, {
          scaleY: 0,
          duration: 0.1,
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
            duration: 0.1,
            ease: 'power2.out'
          },
          '-=0.05'
        )
    })

    return () => ctx.revert()
  }, [location.pathname])
}

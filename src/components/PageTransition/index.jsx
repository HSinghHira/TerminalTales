import React, { useRef } from 'react'

import { usePageTransition } from '../../hooks/page-transition'

const PageTransition = ({ children }) => {
  const pageRef = useRef(null)
  const curtainRef = useRef(null)
  const loadingRef = useRef(null)

  usePageTransition(pageRef, curtainRef, loadingRef)

  return (
    <div className="relative">
      {/* Transition curtain */}
      <div
        ref={curtainRef}
        className="pointer-events-none fixed inset-0 z-50 origin-top bg-primary/10 backdrop-blur-sm"
        style={{ scaleY: 0 }}
      />

      {/* Loading indicator */}
      <div
        ref={loadingRef}
        className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center"
        style={{ opacity: 0 }}
      >
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>

      {/* Page content */}
      <div ref={pageRef} className="transition-wrapper">
        {children}
      </div>
    </div>
  )
}

export default PageTransition

"use client"

import React from "react"

import { useEffect, useRef } from "react"

export const Reveal = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(50px)",
        transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
    >
      {children}
    </div>
  )
}

function useInView(ref) {
  const [isIntersecting, setIsIntersecting] = React.useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      {
        rootMargin: "-50px",
      },
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.unobserve(ref.current)
    }
  }, [ref])

  return isIntersecting
}


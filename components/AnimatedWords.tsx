'use client'
import { useMemo } from 'react'

export default function AnimatedWords({
  text,
  startDelay = 0.1,
  step = 0.06,
  className = '',
}: {
  text: string
  startDelay?: number
  step?: number
  className?: string
}) {
  const words = useMemo(() => text.split(/\s+/).filter(Boolean), [text])
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          className="word inline-block align-baseline"
          style={{ animationDelay: `${startDelay + i * step}s` }}
        >
          {w}
        </span>
      ))}
    </span>
  )
}

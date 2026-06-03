import clsx from 'clsx'
import { Landmark } from 'lucide-react'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { className } = props

  return (
    <span className={clsx('flex items-center gap-3', className)}>
      <span className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-primary/10 text-primary">
        <Landmark aria-hidden className="size-6" />
      </span>
      <span className="leading-tight">
        <span className="block text-xl font-bold tracking-tight text-current">
          Raipur District Government
        </span>
        <span className="block text-xs font-semibold text-current/70">
          Chhattisgarh, India
        </span>
      </span>
    </span>
  )
}

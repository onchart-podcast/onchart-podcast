import clsx from 'clsx'
import type { ReactNode } from 'react'

type CalloutProps = {
  title?: string
  children: ReactNode
  tone?: 'rose' | 'sky' | 'amber'
}

const toneMap: Record<NonNullable<CalloutProps['tone']>, string> = {
  rose: 'bg-rose-50 border-rose-200 text-rose-900',
  sky: 'bg-sky-50 border-sky-200 text-sky-900',
  amber: 'bg-amber-50 border-amber-200 text-amber-900',
}

export default function Callout({ title, children, tone = 'rose' }: CalloutProps) {
  return (
    <div className={clsx('my-10 rounded-2xl border px-6 py-5 text-base leading-relaxed', toneMap[tone])}>
      {title && <p className="text-sm font-semibold uppercase tracking-[0.3em] mb-2">{title}</p>}
      <div className="space-y-3">{children}</div>
    </div>
  )
}

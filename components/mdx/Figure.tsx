import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

type FigureProps = ImageProps & {
  caption?: string
}

export default function Figure({ caption, className, ...imageProps }: FigureProps) {
  return (
    <figure className="my-10 space-y-4">
      <Image
        {...imageProps}
        className={clsx('w-full rounded-3xl border border-white/50 object-cover shadow-xl', className)}
        sizes="(min-width: 768px) 768px, 100vw"
      />
      {caption && <figcaption className="text-sm text-neutral-500">{caption}</figcaption>}
    </figure>
  )
}

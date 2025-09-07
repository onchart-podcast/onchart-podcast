// components/Polaroid.tsx
import Image from 'next/image'
import { Dancing_Script } from 'next/font/google'

const handwriting = Dancing_Script({
  subsets: ['latin'],
  weight: '400',
})

type Props = {
  src: string
  name: string
  /** Optional Tailwind rotate class like 'rotate-2' or '-rotate-3' */
  rotate?: string
  /** Optional object-position tweak, e.g. 'object-[center_20%]' to avoid cropping foreheads */
  imgPos?: string
}

export default function Polaroid({ src, name, rotate, imgPos = 'object-top' }: Props) {
  return (
    <div
      className={`relative bg-white shadow-lg rounded-md p-2 ${rotate || ''}`}
      style={{ width: 180 }}
    >
      {/* Photo */}
      <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden rounded-sm">
        <Image
          src={src}
          alt={name}
          fill
          className={`object-cover ${imgPos} grayscale hover:grayscale-0 transition duration-300`}
          sizes="180px"
          priority={false}
        />
      </div>

      {/* Handwritten caption */}
      <p className={`${handwriting.className} mt-3 text-center text-xl text-neutral-800`}>
        {name}
      </p>
    </div>
  )
}

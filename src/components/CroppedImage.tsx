import type { CSSProperties } from 'react'

/**
 * Reproduces a Figma image crop. Figma exports crops as the image's size and
 * offset relative to its frame (percentages). Give the wrapper the frame's
 * aspect ratio and the crop stays exact at any width.
 */
export type Crop = { w: number; h: number; left: number; top: number }

type Props = {
  src: string
  alt: string
  className?: string
  crop?: Crop
  /**
   * 'sm' / 'lg' apply the crop from that breakpoint up and uses `fit` below it,
   * for frames whose aspect ratio changes on phones.
   */
  cropFrom?: 'all' | 'sm' | 'lg'
  /** Used when there's no crop (or below `cropFrom`): e.g. "object-cover object-bottom" */
  fit?: string
  loading?: 'lazy' | 'eager'
}

export default function CroppedImage({
  src,
  alt,
  className = '',
  crop,
  cropFrom = 'all',
  fit = 'object-cover',
  loading = 'lazy',
}: Props) {
  const vars = crop
    ? ({ '--cw': `${crop.w}%`, '--ch': `${crop.h}%`, '--cl': `${crop.left}%`, '--ct': `${crop.top}%` } as CSSProperties)
    : undefined

  let imgClass = `absolute inset-0 size-full ${fit}`
  if (crop && cropFrom === 'all') imgClass = 'absolute max-w-none w-(--cw) h-(--ch) left-(--cl) top-(--ct)'
  if (crop && cropFrom === 'sm')
    imgClass += ' sm:inset-auto sm:max-w-none sm:w-(--cw) sm:h-(--ch) sm:left-(--cl) sm:top-(--ct) sm:object-fill'

  if (crop && cropFrom === 'lg')
    imgClass += ' lg:inset-auto lg:max-w-none lg:w-(--cw) lg:h-(--ch) lg:left-(--cl) lg:top-(--ct) lg:object-fill'

  return (
    <div className={`relative overflow-hidden ${className}`} style={vars}>
      <img src={src} alt={alt} loading={loading} decoding="async" className={imgClass} />
    </div>
  )
}

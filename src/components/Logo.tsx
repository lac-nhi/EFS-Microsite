import CroppedImage from './CroppedImage'

/** ASU University Design Institute logo (white), cropped as in Figma (190.313 × 45). */
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <CroppedImage
      src="/images/asu-udi-logo-white.png"
      alt="ASU University Design Institute"
      loading="eager"
      className={`aspect-[190.313/45] shrink-0 ${className}`}
      crop={{ w: 105.42, h: 143, left: 0, top: -23.43 }}
    />
  )
}

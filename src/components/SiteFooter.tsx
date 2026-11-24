import Logo from './Logo'

/** `bg` overrides the background color (the Four Futures pages use a darker navy, #171C27). */
export default function SiteFooter({ bg = 'bg-navy' }: { bg?: string }) {
  return (
    <footer className={`${bg} text-white`}>
      <div className="container-wide flex flex-col gap-4 py-[42px]">
        <div className="flex flex-col items-start gap-4 border-b border-rule pb-4 sm:flex-row sm:items-center sm:justify-between">
          <Logo className="w-[190.313px]" />
          <p className="p-[2px] text-[18px] leading-[1.1] font-bold tracking-[-0.02em]">Emerging Futures Studio 2026</p>
        </div>
        <p className="p-[2px] text-[16px] leading-[1.1]">
          For more information, please contact{' '}
          <a href="mailto:udi@asu.edu" className="font-medium underline hover:text-link">
            udi@asu.edu
          </a>
          .
        </p>
      </div>
    </footer>
  )
}

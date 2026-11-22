import { useEffect, useState } from 'react'

export type NavSection = { id: string; label: string }

/** Tracks which section is being read: the first one whose top part is on screen. */
function useActiveSection(sections: readonly NavSection[]): string {
  const [active, setActive] = useState(sections[0]?.id ?? '')

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter((el): el is HTMLElement => !!el)
    const visible = new Map<string, boolean>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visible.set(e.target.id, e.isIntersecting)
        const first = sections.find((s) => visible.get(s.id))
        if (first) setActive(first.id)
      },
      { rootMargin: '-15% 0px -60% 0px' },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sections])

  return active
}

/**
 * Sticky "jump to section" list used in the left column of the big idea and About pages.
 * `label` is the small caps heading above the list (the About page has none).
 */
export default function SectionNav({
  sections,
  label,
  ariaLabel,
}: {
  sections: readonly NavSection[]
  label?: string
  ariaLabel: string
}) {
  const active = useActiveSection(sections)

  return (
    <nav aria-label={ariaLabel} className="sticky top-8 flex flex-col gap-3.5">
      {label && <p className="text-[15px] leading-[1.5] font-medium tracking-[0.06em] text-muted uppercase">{label}</p>}
      <ul className="flex flex-col gap-1.5">
        {sections.map((s) => {
          const isActive = s.id === active
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={isActive ? 'location' : undefined}
                className={`block border-l-2 py-1 pl-3 text-[16px] leading-[1.5] transition-colors ${
                  isActive ? 'border-accent-blue font-medium text-ink' : 'border-rule text-muted hover:text-ink'
                }`}
              >
                {s.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

import { useActiveSection } from '../hooks/useActiveSection'

export type NavSection = { id: string; label: string }

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
  const { active, select } = useActiveSection(sections.map((s) => s.id))

  return (
    <nav aria-label={ariaLabel} className="sticky top-[132px] flex flex-col gap-3.5">
      {label && <p className="text-[15px] leading-[1.5] font-medium tracking-[0.06em] text-muted uppercase">{label}</p>}
      <ul className="flex flex-col gap-1.5">
        {sections.map((s) => {
          const isActive = s.id === active
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={() => select(s.id)}
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

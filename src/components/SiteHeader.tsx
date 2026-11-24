import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FOUR_FUTURES_URL } from '../content/links'
import Logo from './Logo'

type NavItem = { to: string; label: string; end?: boolean; external?: boolean }

const NAV: NavItem[] = [
  { to: '/', label: 'Big Ideas', end: true },
  { to: '/about', label: 'About' },
  // The Four Futures section opens in a new tab (Figma 253:1302: last, with an "opens outside" icon)
  { to: FOUR_FUTURES_URL, label: 'The Four Futures', external: true },
]

/** Router link, or a plain new-tab link for items marked external. */
function NavItemLink({ item, className }: { item: NavItem; className: (isActive: boolean) => string }) {
  if (item.external) {
    return (
      <a href={item.to} target="_blank" rel="noopener noreferrer" className={`${className(false)} items-start gap-2`}>
        {item.label}
        <img src="/images/arrow-square-out.svg" alt="" width={18} height={18} className="size-[18px] shrink-0" />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    )
  }
  return (
    <NavLink to={item.to} end={item.end} className={({ isActive }) => `${className(isActive)} items-center`}>
      {item.label}
    </NavLink>
  )
}

export default function SiteHeader() {
  const { pathname } = useLocation()
  // The menu is tied to the page it was opened on, so it closes after navigating
  const [openOn, setOpenOn] = useState<string | null>(null)
  const open = openOn === pathname
  const setOpen = (fn: (v: boolean) => boolean) => setOpenOn(fn(open) ? pathname : null)

  return (
    <header className="sticky top-0 z-50 bg-navy text-white">
      <div className="container-wide flex h-[76px] items-center justify-between sm:h-[100px]">
        <Link to="/" className="flex items-center gap-4" aria-label="Emerging Futures Studio home">
          <Logo className="w-[150px] sm:w-[190.313px]" />
          <img src="/images/divider-line.svg" alt="" width={50} height={1.2} className="hidden w-[50px] -rotate-90 sm:block -mx-[25px]" />
          <span className="hidden p-[2px] text-[19px] leading-[1.1] font-bold tracking-[-0.02em] whitespace-nowrap sm:block">
            Emerging Futures Studio
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 p-[2px] lg:flex">
          {NAV.map((item) => (
            <NavItemLink
              key={item.to}
              item={item}
              className={(isActive) =>
                `flex h-[26px] border-b-[1.5px] pb-[6px] text-[18px] leading-[1.1] whitespace-nowrap transition-colors ${
                  isActive ? 'border-accent-blue' : 'border-transparent hover:border-white/50'
                }`
              }
            />
          ))}
        </nav>

        <button
          type="button"
          className="-mr-2 flex size-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="container-wide border-t border-white/15 pb-6 lg:hidden">
          <p className="pt-5 pb-2 text-[17px] leading-[1.1] font-bold tracking-[-0.02em] sm:hidden">Emerging Futures Studio</p>
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavItemLink
                  item={item}
                  className={(isActive) =>
                    `flex border-l-2 py-3 pl-3 text-[18px] leading-[1.1] ${isActive ? 'border-accent-blue' : 'border-transparent'}`
                  }
                />
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

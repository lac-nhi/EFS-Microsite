import { useEffect, useRef, useState } from 'react'

/**
 * Which section of a "jump to section" side nav is being read.
 *
 * - The active section is the last one whose top has passed a line 35% down the screen.
 * - At the very bottom of the page the last section wins. Short closing sections
 *   (e.g. "ASU student team") can never scroll up to that line on their own.
 * - A clicked item stays highlighted until the visitor scrolls by hand
 *   (wheel, touch or keys). Otherwise, landing at the page bottom could highlight
 *   a different section than the one they picked.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0] ?? '')
  const locked = useRef<string | null>(null)

  useEffect(() => {
    // A handful of getBoundingClientRect calls per scroll event is cheap, so no throttling
    const compute = () => {
      if (locked.current) return
      const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el)
      if (!els.length) return
      const line = window.innerHeight * 0.35
      let current = els[0].id
      for (const el of els) if (el.getBoundingClientRect().top <= line) current = el.id
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      if (atBottom) current = els[els.length - 1].id
      setActive(current)
    }
    const schedule = compute
    const unlock = () => {
      locked.current = null
    }
    const onKey = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(e.key)) unlock()
    }

    // Arriving from a link with #section, highlight that section
    const hash = decodeURIComponent(window.location.hash.slice(1))
    if (ids.includes(hash)) {
      locked.current = hash
      setActive(hash)
    } else {
      schedule()
    }

    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    window.addEventListener('wheel', unlock, { passive: true })
    window.addEventListener('touchstart', unlock, { passive: true })
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      window.removeEventListener('wheel', unlock)
      window.removeEventListener('touchstart', unlock)
      window.removeEventListener('keydown', onKey)
    }
    // ids is a fresh array each render in some callers; compare by content
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join('|')])

  /** Call from a nav item's onClick */
  const select = (id: string) => {
    locked.current = id
    setActive(id)
  }

  return { active, select }
}

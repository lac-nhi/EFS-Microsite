import { useEffect, type ReactNode } from 'react'
import CroppedImage from '../components/CroppedImage'
import SectionNav from '../components/SectionNav'
import { ABOUT_BODY, ABOUT_INTRO, ATTENDEES, STUDENT_TEAM, UDI_TEAM, type Person } from '../content/about'

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'attendees', label: 'Attendees' },
  { id: 'udi-team', label: 'UDI team' },
  { id: 'asu-student-team', label: 'ASU student team' },
] as const

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="flex scroll-mt-8 flex-col gap-6">
      <h2 className="type-h2 max-w-[750px]">{title}</h2>
      {children}
    </section>
  )
}

/** Names with a top rule, three across on desktop (Figma: 18px column gap, 18px vertical padding). */
function PeopleGrid({ people }: { people: Person[] }) {
  return (
    <ul className="grid grid-cols-1 gap-x-[18px] sm:grid-cols-2 md:grid-cols-3">
      {people.map((p) => (
        <li key={`${p.name}-${p.role}`} className="flex flex-col gap-0.5 border-t border-rule py-[18px]">
          <p className="type-body font-medium">{p.name}</p>
          <p className="type-small">{p.role}</p>
        </li>
      ))}
    </ul>
  )
}

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About | Emerging Futures Studio'
  }, [])

  return (
    <>
      {/* Title + summary */}
      <div className="container-wide flex flex-col gap-5 pt-10 pb-8 lg:pt-[60px] lg:pb-[42px] xl:flex-row xl:items-start xl:justify-between xl:gap-12">
        <h1 className="type-h1 xl:max-w-[650px]">Designing the Career-Ready University</h1>
        <p className="type-lede max-w-[720px] xl:w-[646px] xl:max-w-none xl:shrink">{ABOUT_INTRO}</p>
      </div>

      <CroppedImage
        src="/images/about-hero.jpg"
        alt="A large group of conference attendees pose for a photo in a hotel meeting room, smiling beneath a ceiling light; business attire and name badges suggest a professional networking event."
        loading="eager"
        crop={{ w: 100, h: 162.54, left: 0.02, top: -45.38 }}
        cropFrom="sm"
        fit="object-cover object-[50%_55%]"
        className="mx-auto aspect-[4/3] w-full max-w-[1512px] sm:aspect-[1512/620]"
      />

      <div className="mx-auto flex w-full max-w-[1512px] gap-12 px-(--gutter) pt-12 pb-20 lg:pt-20 lg:pb-[120px] xl:gap-[90px] xl:px-[100px]">
        <aside className="hidden w-[220px] shrink-0 lg:block">
          <SectionNav sections={SECTIONS} ariaLabel="On this page" />
        </aside>

        <div className="flex w-full max-w-[900px] min-w-0 flex-col gap-14 lg:gap-[72px]">
          <Section id="about" title="About">
            <p className="type-body">{ABOUT_BODY}</p>
          </Section>
          <Section id="attendees" title="Attendees">
            <PeopleGrid people={ATTENDEES} />
          </Section>
          <Section id="udi-team" title="UDI team">
            <PeopleGrid people={UDI_TEAM} />
          </Section>
          <Section id="asu-student-team" title="ASU student team">
            <PeopleGrid people={STUDENT_TEAM} />
          </Section>
        </div>
      </div>
    </>
  )
}

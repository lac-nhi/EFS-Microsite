import { useEffect, useRef, type ReactNode } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import CroppedImage from '../components/CroppedImage'
import SectionNav from '../components/SectionNav'
import { BIG_IDEAS, type BigIdeaDetail, type InfoCard, type Persona } from '../content/bigIdeas'

const SECTIONS = [
  { id: 'at-a-glance', label: 'At a glance' },
  { id: 'big-idea', label: 'Big idea' },
  { id: 'challenge', label: 'Challenge' },
  { id: 'opportunity', label: 'Opportunity' },
  { id: 'potential-impact', label: 'Potential impact' },
  { id: 'disruptions', label: 'Disruptions' },
  { id: 'a-day-in-this-future', label: 'A day in this future' },
] as const

type SectionId = (typeof SECTIONS)[number]['id']

/* ---------- Tab bar: one tab per big idea ---------- */

function IdeaTabs({ activeSlug }: { activeSlug: string }) {
  const activeRef = useRef<HTMLAnchorElement>(null)

  // On narrow screens the tabs scroll sideways; keep the current one in view
  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: 'nearest', inline: 'center' })
  }, [activeSlug])

  return (
    <nav aria-label="Big ideas" className="border-b border-tab-rule bg-white">
      <div className="container-wide overflow-x-auto pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="flex gap-2 lg:gap-6">
          {BIG_IDEAS.map((idea) => (
            <li key={idea.slug} className="shrink-0">
              <NavLink
                to={`/big-ideas/${idea.slug}`}
                ref={idea.slug === activeSlug ? activeRef : undefined}
                className={({ isActive }) =>
                  `-mb-px flex items-center border-b-3 px-4 py-2.5 text-[16px] leading-[1.1] font-medium whitespace-nowrap transition-colors sm:px-6 ${
                    isActive ? 'border-accent-blue text-ink' : 'border-transparent text-muted hover:text-ink'
                  }`
                }
              >
                {idea.tabLabel}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

/* ---------- Content building blocks ---------- */

function Section({ id, title, children }: { id: SectionId; title: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className="flex scroll-mt-8 flex-col gap-6">
      <h2 className="type-h2 max-w-[750px]">{title}</h2>
      {children}
    </section>
  )
}

function CardGrid({ cards, variant }: { cards: InfoCard[]; variant: 'filled' | 'outlined' }) {
  const look =
    variant === 'filled' ? 'border-t-2 border-accent-blue bg-mist' : 'border border-card-line'
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {cards.map((c) => (
        <div key={c.title} className={`flex flex-col gap-1.5 px-5 pt-[22px] pb-5 leading-[1.45] ${look}`}>
          <h3 className="type-body font-medium">{c.title}</h3>
          <p className="type-small">{c.body}</p>
        </div>
      ))}
    </div>
  )
}

function PersonaStory({ persona, last }: { persona: Persona; last: boolean }) {
  return (
    <article className={`flex flex-col gap-[22px] pt-6 ${last ? '' : 'border-b border-rule pb-8'}`}>
      <h3 className="type-h3">{persona.role}</h3>
      <p className="type-body">{persona.story}</p>
      <div className="flex items-center gap-3.5">
        <CroppedImage
          src={persona.avatar.src}
          alt=""
          crop={persona.avatar.crop}
          className="size-14 shrink-0 rounded-full"
        />
        <div className="type-small flex flex-col gap-1">
          <p>
            <span className="font-medium">{persona.name}</span> — {persona.descriptor}
          </p>
          {persona.personaHref && (
            <a href={persona.personaHref} target="_blank" rel="noopener noreferrer" className="text-navy underline hover:no-underline">
              View persona →<span className="sr-only"> for {persona.name} (opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function IdeaBody({ d }: { d: BigIdeaDetail }) {
  return (
    <div className="flex min-w-0 flex-col gap-14 lg:gap-[72px]">
      <Section id="at-a-glance" title="At a glance">
        <div className="type-body grid grid-cols-1 gap-7 sm:grid-cols-2">
          <div className="flex flex-col gap-2.5">
            <h3 className="font-medium">Design question</h3>
            <p>{d.atAGlance.designQuestion}</p>
          </div>
          <div className="flex flex-col gap-2.5">
            <h3 className="font-medium">The shift it proposes</h3>
            <p>{d.atAGlance.shift}</p>
          </div>
        </div>
      </Section>

      <Section id="big-idea" title="Big idea">
        <div className="type-body flex flex-col gap-3">
          {d.bigIdea.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </Section>

      <Section id="challenge" title="Challenge">
        <p className="type-body">{d.challenge}</p>
      </Section>

      <Section id="opportunity" title="Opportunity">
        <p className="type-body">{d.opportunity}</p>
      </Section>

      <Section id="potential-impact" title="Potential impact">
        {d.potentialImpact.intro && <p className="type-body leading-[1.5]">{d.potentialImpact.intro}</p>}
        <CardGrid cards={d.potentialImpact.cards} variant="filled" />
      </Section>

      <Section id="disruptions" title="Disruptions">
        <p className="type-body italic">{d.disruptions.intro}</p>
        <CardGrid cards={d.disruptions.cards} variant="outlined" />
      </Section>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {d.photos.map((p) => (
          <CroppedImage
            key={p.src}
            src={p.src}
            alt={p.alt}
            crop={p.crop}
            className="aspect-[442/267] border border-card-line"
          />
        ))}
      </div>

      <Section id="a-day-in-this-future" title={d.dayInTheFuture.heading}>
        <p className="type-body leading-[1.5]">{d.dayInTheFuture.intro}</p>
        <p className="type-small border-l-2 border-note-rule px-2 leading-[1.5] text-quiet italic">{d.dayInTheFuture.note}</p>
        <div className="flex flex-col gap-6">
          {d.dayInTheFuture.personas.map((p, i, all) => (
            <PersonaStory key={p.name} persona={p} last={i === all.length - 1} />
          ))}
        </div>
      </Section>
    </div>
  )
}

/* ---------- Page ---------- */

export default function BigIdeaPage() {
  const { slug } = useParams()
  const idea = BIG_IDEAS.find((i) => i.slug === slug)

  useEffect(() => {
    if (idea) document.title = `${idea.title} | Emerging Futures Studio`
  }, [idea])

  if (!idea) {
    return (
      <section className="container-content py-24">
        <h1 className="type-h2">We couldn’t find that big idea.</h1>
        <Link to="/" className="mt-4 inline-block underline">
          Back to all six big ideas
        </Link>
      </section>
    )
  }

  const d = idea.detail

  return (
    <>
      <IdeaTabs activeSlug={idea.slug} />

      {/* Title + summary */}
      <div className="container-wide flex flex-col gap-5 pt-10 pb-8 lg:pt-[60px] lg:pb-[42px] xl:flex-row xl:items-start xl:justify-between xl:gap-12">
        <h1 className={`type-h1 ${d?.wideTitle ? 'xl:max-w-[650px]' : 'xl:max-w-[600px]'}`}>{idea.title}</h1>
        <p className="type-body max-w-[720px] leading-[1.5] xl:w-[550px] xl:max-w-none xl:shrink-0">{d?.intro ?? idea.body}</p>
      </div>

      {d ? (
        <>
          <CroppedImage
            src={d.hero.src}
            alt={d.hero.alt}
            loading="eager"
            crop={d.hero.crop}
            cropFrom="sm"
            fit="object-cover object-[45%_50%]"
            className="mx-auto aspect-[4/3] w-full max-w-[1512px] sm:aspect-[1512/620]"
          />

          <div className="mx-auto flex w-full max-w-[1512px] gap-12 px-(--gutter) pt-12 pb-20 lg:pt-20 lg:pb-[120px] xl:gap-[90px] xl:px-[100px]">
            <aside className="hidden w-[220px] shrink-0 lg:block">
              <SectionNav sections={SECTIONS} label="In this idea" ariaLabel="In this idea" />
            </aside>
            <div className="w-full max-w-[900px] min-w-0">
              <IdeaBody d={d} />
            </div>
          </div>
        </>
      ) : (
        <section className="container-wide pb-24">
          <p className="type-body text-muted">The full write-up for this big idea is coming soon.</p>
        </section>
      )}
    </>
  )
}

import { useEffect, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import CroppedImage, { type Crop } from '../components/CroppedImage'
import FuturesFramework from '../components/FuturesFramework'
import { BIG_IDEAS, type BigIdea } from '../content/bigIdeas'
import { FOUR_FUTURES_URL } from '../content/links'

type Photo = { src: string; alt: string; crop?: Crop; fit?: string }

// Three-up photo rows: each frame is 405.33 × 300 in Figma
const THIRD = 'aspect-[405.33/300]'

const STRIP_PHOTOS: Photo[] = [
  { src: '/images/strip-1.jpg', alt: 'A business meeting in a conference room, with six colleagues seated around a table as a man in a suit speaks and gestures; attentive, collaborative atmosphere.', crop: { w: 131, h: 118.14, left: -14.27, top: -9.07 } },
  { src: '/images/strip-2.jpg', alt: 'At a team brainstorming workshop, a man points to yellow sticky notes on a planning board while a woman reviews ideas, creating a focused, collaborative atmosphere.', crop: { w: 119.34, h: 107.63, left: -9.64, top: -3.81 } },
  { src: '/images/strip-3.jpg', alt: 'A woman writes a note on a yellow sticky note beside a workplace poster reading “Transformation” and “Survival stopped depending on the job,” conveying reflection and change.' },
]

const STUDIO_TOP: Photo[] = [
  { src: '/images/studio-1.jpg', alt: 'A diverse group studies posters at a workshop, while a woman in a floral dress warmly embraces a seated colleague, creating a supportive, collaborative atmosphere.', crop: { w: 133.09, h: 120.02, left: -16.54, top: -0.09 } },
  { src: '/images/studio-2.jpg', alt: 'A PSU welcome table displays Aiyana’s “The Experimenter” profile and a colorful “Growth” card, with QR-code signs and a water cup behind.', crop: { w: 135, h: 121.75, left: -17.5, top: -6.45 } },
  { src: '/images/studio-3.jpg', alt: 'A diverse group listens intently during a workshop, seated beside growth strategy posters and presentation screens in a bright conference room.', crop: { w: 145.5, h: 131.21, left: -45.45, top: -10.4 } },
]

const STUDIO_BOTTOM: Photo[] = [
  { src: '/images/studio-4.png', alt: 'A newspaper-style poster on a gallery wall asks, “Is this the end of the beginner?” beneath The Liminal Times masthead; the tone is reflective and editorial.', fit: 'object-cover object-[50%_28%]' },
  { src: '/images/studio-5.jpg', alt: 'At a conference table, a bald man in glasses gestures while speaking with a ponytailed attendee; brochures and papers suggest an engaged discussion.', crop: { w: 133, h: 119.99, left: -16.5, top: -5.33 } },
  { src: '/images/studio-6.jpg', alt: 'At a bright indoor event, a smiling woman in a white floral-embroidered dress stands behind a seated man holding a microphone, sharing a warm moment.', crop: { w: 127.75, h: 115.21, left: -11.16, top: -2.94 } },
]

function PhotoRow({ photos }: { photos: Photo[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-4 lg:gap-8">
      {photos.map((p) => (
        <CroppedImage key={p.src} src={p.src} alt={p.alt} crop={p.crop} fit={p.fit} className={THIRD} />
      ))}
    </div>
  )
}

/** Heading on the left, 600px intro paragraph on the right (stacks on smaller screens). */
function SectionIntro({ title, children, leading = 'leading-[1.45]' }: { title: string; children: ReactNode; leading?: string }) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
      <h2 className="type-h2 flex-1">{title}</h2>
      <p className={`type-body w-full lg:w-[600px] lg:shrink-0 ${leading}`}>{children}</p>
    </div>
  )
}

function BigIdeaCard({ idea }: { idea: BigIdea }) {
  return (
    <Link
      to={`/big-ideas/${idea.slug}`}
      className={`group flex flex-col items-end justify-between gap-4 md:gap-0 rounded-[6.3px] border-t-6 bg-navy p-6 text-white transition-[filter] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue sm:p-7 ${idea.accent}`}
    >
      <div className="flex w-full flex-col gap-4">
        <h3 className="type-h3">{idea.title}</h3>
        <div className="type-body">
          <p className="mb-3">{idea.body}</p>
          <p>
            <strong className="font-bold">The shift it proposes:</strong> {idea.shift}
          </p>
        </div>
      </div>
      <img
        src="/images/card-arrow.svg"
        alt=""
        width={36}
        height={36}
        className="size-9 shrink-0 transition-transform group-hover:translate-x-1"
      />
      <span className="sr-only">Read more about {idea.title}</span>
    </Link>
  )
}

export default function Home() {
  useEffect(() => {
    document.title = 'Six big ideas for career readiness | Emerging Futures Studio'
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white lg:flex lg:items-center lg:justify-between">
        <div className="container-wide py-12 sm:py-16 lg:mx-0 lg:w-auto lg:max-w-none lg:flex-1 lg:py-12 lg:pr-12 lg:pl-[max(var(--gutter),calc((100vw-1352px)/2))]">
          <div className="flex max-w-[616px] flex-col gap-6">
            <h1 className="type-h1 max-w-[594px]">Six big ideas for career readiness</h1>
            <p className="type-body">
              In September 2026, the University Design Institute at Arizona State University (UDI) brought national leaders from
              higher education, industry, philanthropy and public policy to Tempe, Arizona, for the Emerging Futures Studio:
              Designing the Career-Ready University. In this working design studio, participants reimagined the university with
              career readiness at the center of its purpose and of how it operates. Starting from{' '}
              <a href={FOUR_FUTURES_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-white underline hover:no-underline">
                four very different possible futures
                <span className="sr-only"> (opens in a new tab)</span>
              </a>{' '}
              for higher education, they explored how career readiness might change across the country.
            </p>
          </div>
        </div>
        <CroppedImage
          src="/images/hero.jpg"
          alt="At a bright conference, an older man smiles among seated attendees, with brochures and QR codes on the table; the mood is warm and social."
          loading="eager"
          className="aspect-[756/700] w-full sm:aspect-video lg:aspect-[756/700] lg:w-1/2 lg:shrink-0"
          crop={{ w: 156, h: 112.46, left: -34.61, top: -8.66 }}
          cropFrom="lg"
          fit="object-cover object-[62%_55%]"
        />
      </section>

      {/* The six big ideas */}
      <section className="bg-white pt-16 pb-16 sm:pt-20 lg:pt-[120px] lg:pb-[100px]">
        <div className="container-content flex flex-col gap-10 lg:gap-12">
          <SectionIntro title="The six big ideas">
            Participants were challenged to think boldly: not to improve today’s model, but to imagine what universities would need
            to become to keep driving career outcomes, whichever future arrives. Their work produced six Big Ideas, offered as bold
            starting points for institutions and systems as they set career readiness priorities in a changing world.
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {BIG_IDEAS.map((idea) => (
              <BigIdeaCard key={idea.slug} idea={idea} />
            ))}
          </div>

          <p className="type-body italic">
            <strong className="font-bold">About this content: </strong>
            the Big Ideas, the challenges behind them, and their disruptions and assumptions came from the work of Studio
            participants. Descriptions and scenarios were developed by UDI to create a coherent narrative and to illustrate these
            Big Ideas in action.
          </p>
        </div>
      </section>

      {/* Photo strip */}
      <section className="bg-mist py-16 lg:py-[100px]">
        <div className="container-content">
          <PhotoRow photos={STRIP_PHOTOS} />
        </div>
      </section>

      {/* How the ideas emerged */}
      <section className="bg-white py-16 lg:py-[100px]">
        <div className="container-content flex flex-col gap-10 lg:gap-12">
          <SectionIntro title="How the ideas emerged" leading="leading-[1.5]">
            Over two days, participants worked inside four very different futures for higher education and identified the design
            challenges that each one exposed. Those challenges converged into six “How might we…” questions, and teams generated
            three design options for each question. Each team then shaped its options into a single Big Idea, which the full
            convening tested to identify the major disruptions to the status quo that the Big Idea would create.
          </SectionIntro>

          {/* The framework diagram is laid out for desktop: let it scroll sideways on narrow screens so it stays legible */}
          <div className="-mx-[var(--gutter)] overflow-x-auto px-[var(--gutter)] md:mx-0 md:overflow-visible md:px-0">
            <FuturesFramework className="w-full min-w-[720px] md:min-w-0" />
          </div>
          <p className="-mt-6 text-[14px] text-ink/60 md:hidden">Scroll sideways to see the full diagram.</p>
        </div>
      </section>

      {/* Inside the studio */}
      <section className="bg-mist pt-16 pb-20 lg:pt-[100px] lg:pb-[120px]">
        <div className="container-content flex flex-col gap-10 lg:gap-12">
          <h2 className="type-h2">Inside the studio</h2>
          <div className="flex flex-col gap-5 sm:gap-4 lg:gap-8">
            <PhotoRow photos={STUDIO_TOP} />
            <CroppedImage
              src="/images/studio-wide.jpg"
              alt="A diverse group of conference attendees poses together in a hotel meeting room, smiling beneath a large ceiling light; the mood is warm and celebratory."
              className="aspect-[4/3] sm:aspect-[1280/489]"
              crop={{ w: 103.09, h: 152.05, left: -3.13, top: -21.97 }}
              cropFrom="sm"
            />
            <PhotoRow photos={STUDIO_BOTTOM} />
          </div>
        </div>
      </section>
    </>
  )
}

import type { CSSProperties, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { BIG_IDEAS } from '../content/bigIdeas'
import { FUTURE_URLS } from '../content/links'

/*
  "How ideas emerged" diagram, rebuilt in code from the original image
  (futures-framework-desktop-1280@2x) so it uses the site's Neue Haas Grotesk.

  Everything is laid out in the image's own 1280 × 1138 coordinate system, in units of
  --u, so it scales with its container exactly like the image did. The outer frame
  reproduces the Figma crop of that image (shown at 105%, shifted −2.5% / −2%).
*/

const ROW_TOP = 141
const ROW_STEP = 163
const ROW_H = 145

const COL = {
  futures: { left: 40, width: 171 },
  spine: 230,
  challenges: { left: 250, width: 338 },
  options: { left: 644, width: 324 },
  ideas: { left: 1024, width: 216 },
}

const LINE = '#9aa3b5'
const CARD_BORDER = '#c9cdd6'
const TEXT = '#3a4050'
const LABEL = '#6b7280'
const PILL_BG = '#f5f6f8'

const FUTURES = [
  { label: 'Growth', href: FUTURE_URLS.growth, top: 493 },
  { label: 'Transformation', href: FUTURE_URLS.transformation, top: 565 },
  { label: 'Constraint', href: FUTURE_URLS.constraint, top: 637 },
  { label: 'Collapse', href: FUTURE_URLS.collapse, top: 709 },
]

/**
 * Rows top to bottom, as in the original diagram. The design question comes from the big idea content;
 * `lines` keeps the big idea name wrapping exactly as in the original image.
 */
const ROWS = [
  { slug: 'industry-co-educators', lines: ['Industry becomes', 'co-educators'], options: ['Partnerships become mission critical', 'Seamless career readiness pathways', 'Industry becomes co-educators'] },
  { slug: 'hyper-local-experimentation', lines: ['System-level innovation', 'powered by hyper-', 'local experimentation'], options: ['Hyper local', 'Shared ownership', 'Culture of experimentation'] },
  { slug: 'no-degree-future', lines: ['No degree future'], options: ['Nature of work in the world of AI', 'No degree future', 'Applied work experience required'] },
  { slug: 'faculty-incentive-pay', lines: ['New incentive pay', 'model for faculty'], options: ['Create parallel university', 'Variable faculty pay', 'Faculty organized around competencies'] },
  { slug: 'holistic-credentialing', lines: ['Holistic credentialing', 'for purpose-driven lives'], options: ['Discernment of purpose', 'Beyond the bachelors', 'Holistic credentialing'] },
  { slug: 'pathways-without-walls', lines: ['Pathways without walls'], options: ['Student-centered experience', 'Flexible teaching & learning', 'Institutional design'] },
]

const HEADERS = [
  { n: '4', label: 'Futures', center: COL.futures.left + COL.futures.width / 2 },
  { n: '6', label: 'Design challenges', center: COL.challenges.left + COL.challenges.width / 2 },
  { n: '18', label: 'Design options', center: COL.options.left + COL.options.width / 2 },
  { n: '6', label: 'Big ideas', center: COL.ideas.left + COL.ideas.width / 2 },
]

/** n design units → CSS length */
const u = (n: number) => `calc(${n} * var(--u))`

/** Absolutely positioned box in design units */
function box(left: number, top: number, width: number, height: number): CSSProperties {
  return { position: 'absolute', left: u(left), top: u(top), width: u(width), height: u(height) }
}

function HLine({ from, to, y }: { from: number; to: number; y: number }) {
  return <div aria-hidden style={{ ...box(from, y - 0.75, to - from, 1.5), background: LINE }} />
}

function Arrow({ from, to, y }: { from: number; to: number; y: number }) {
  const head = 7
  return (
    <>
      <HLine from={from} to={to - head + 1} y={y} />
      <div
        aria-hidden
        style={{
          ...box(to - head, y - 5, head, 10),
          background: LINE,
          clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
        }}
      />
    </>
  )
}

function Text({ size, lh, weight, color, children, style }: { size: number; lh: number; weight: 'normal' | 'medium' | 'bold'; color: string; children: ReactNode; style?: CSSProperties }) {
  const w = weight === 'bold' ? 'var(--font-weight-bold)' : weight === 'medium' ? 'var(--font-weight-medium)' : 'var(--font-weight-normal)'
  return <span style={{ fontSize: u(size), lineHeight: u(lh), fontWeight: w, color, ...style }}>{children}</span>
}

export default function FuturesFramework({ className = '' }: { className?: string }) {
  return (
    <div className={`relative aspect-[1280/1149] overflow-hidden [container-type:inline-size] ${className}`}>
      <div
        className="absolute"
        style={
          {
            '--u': 'calc(100cqw / 1280 * 1.05)',
            left: 'calc(-32 * 100cqw / 1280)',
            top: 'calc(-23 * 100cqw / 1280)',
            width: u(1280),
            height: u(1138),
          } as CSSProperties
        }
      >
        {/* Column headers */}
        {HEADERS.map((h) => (
          <div key={h.label} className="absolute flex flex-col items-center text-center" style={{ left: u(h.center - 120), width: u(240), top: u(38) }}>
            <span className="font-heading text-navy" style={{ fontSize: u(48), lineHeight: u(52), fontWeight: 700 }}>
              {h.n}
            </span>
            <Text size={14} lh={18} weight="medium" color={LABEL} style={{ marginTop: u(7) }}>
              {h.label}
            </Text>
          </div>
        ))}

        {/* Spine linking the futures to every design challenge */}
        <div aria-hidden style={{ ...box(COL.spine, ROW_TOP, 2, ROW_H * 6 + (ROW_STEP - ROW_H) * 5), background: LINE }} />

        {/* Four futures (link to the original site) */}
        {FUTURES.map((f) => (
          <div key={f.label}>
            <a
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full bg-navy text-white transition-colors hover:bg-[#3a4562] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue"
              style={box(COL.futures.left, f.top, COL.futures.width, 38)}
            >
              <Text size={16} lh={20} weight="bold" color="white">
                {f.label}
              </Text>
              <span className="sr-only"> future (opens in a new tab)</span>
            </a>
            <HLine from={COL.futures.left + COL.futures.width} to={COL.spine} y={f.top + 19} />
          </div>
        ))}

        {/* One row per big idea: design challenge → three design options → big idea */}
        {ROWS.map((row, i) => {
          const idea = BIG_IDEAS.find((b) => b.slug === row.slug)!
          const top = ROW_TOP + i * ROW_STEP
          const mid = top + ROW_H / 2
          return (
            <div key={row.slug}>
              <HLine from={COL.spine + 1} to={COL.challenges.left} y={mid} />

              <div
                className="flex items-center"
                style={{ ...box(COL.challenges.left, top, COL.challenges.width, ROW_H), border: `1px solid ${CARD_BORDER}`, borderRadius: u(6), padding: `0 ${u(19)}` }}
              >
                <Text size={15} lh={21} weight="normal" color={TEXT}>
                  {idea.detail?.atAGlance.designQuestion}
                </Text>
              </div>

              <Arrow from={COL.challenges.left + COL.challenges.width} to={COL.options.left} y={mid} />

              <ul style={{ ...box(COL.options.left, top, COL.options.width, ROW_H), border: `1px solid ${CARD_BORDER}`, borderRadius: u(6) }}>
                {row.options.map((o, j) => (
                  <li
                    key={o}
                    className="flex items-center justify-center rounded-full text-center"
                    style={{ ...box(13, 13 + j * 42, COL.options.width - 28, 34), background: PILL_BG }}
                  >
                    <Text size={14} lh={18} weight="normal" color={TEXT}>
                      {o}
                    </Text>
                  </li>
                ))}
              </ul>

              <Arrow from={COL.options.left + COL.options.width} to={COL.ideas.left} y={mid} />

              <Link
                to={`/big-ideas/${row.slug}`}
                aria-label={idea.title}
                className={`flex items-center justify-center bg-navy text-center transition-[filter] hover:brightness-125 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue ${idea.accent}`}
                style={{ ...box(COL.ideas.left, top, COL.ideas.width, ROW_H), borderTopWidth: u(5), borderTopStyle: 'solid', borderRadius: u(6), padding: `0 ${u(14)}` }}
              >
                <Text size={16} lh={20} weight="bold" color="white">
                  {row.lines.map((line) => (
                    <span key={line} className="block whitespace-nowrap">
                      {line}
                    </span>
                  ))}
                </Text>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

import { Link } from "react-router-dom";
import { futures } from "../data/futures";
import { personas } from "../data/personas";
import { asset } from "../lib/asset";
import SiteFooter from "../../components/SiteFooter";
import { FutureListRow } from "./FutureListRow";
import { HowItWorksSection } from "./HowItWorksSection";
import { InstitutionMark } from "./InstitutionMark";
import { PersonaPicker } from "./PersonaPicker";
import { Reveal } from "./Reveal";

export function ExplorerSection() {
  return (
    <div>
      <header className="sticky top-0 z-50 bg-navy">
        <div className="container-wide flex h-[76px] items-center sm:h-[100px]">
          <InstitutionMark tone="light" />
        </div>
      </header>

      {/* hero */}
      <section className="atmosphere grain relative overflow-hidden">
        <div className="container-wide relative z-10 pb-36 pt-28 md:pb-48 md:pt-40 lg:pb-64 lg:pt-48">
          <div className="max-w-[1150px]">
            <Reveal>
              <h1 className="type-h1 text-white">
                Welcome to 2036
              </h1>
            </Reveal>
            <Reveal delay={1}>
              <p className="type-lede mt-6 text-balance text-white">
                What does it mean to be career-ready when the goalpost keeps moving?
              </p>
            </Reveal>
            <Reveal delay={2}>
              {/* Stacked at full, equal width on small phones; side by side from 430px */}
              <div className="mt-9 flex flex-col gap-4 min-[430px]:flex-row min-[430px]:flex-wrap min-[430px]:items-center">
                <a
                  href="#personas"
                  className="type-body rounded-[4px] border border-explorer-cyan bg-explorer-cyan px-6 py-3 text-center text-ink-deep transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Select your persona
                </a>
                <a
                  href="#futures"
                  className="type-body rounded-[4px] border border-white px-6 py-3 text-center text-white transition-colors duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Explore the futures
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 -bottom-6 z-0 hidden justify-center sm:flex">
          <div className="w-[120%] max-w-[1900px] shrink-0">
            <Reveal delay={2}>
              <img src={asset("hero-ribbon.png")} alt="" className="block h-auto w-full" />
            </Reveal>
          </div>
        </div>
      </section>

      <HowItWorksSection />

      {/* personas */}
      {/* Figma: Working designs, node 563:201 */}
      <section id="personas" className="scroll-mt-[76px] bg-paper py-12 text-ink sm:scroll-mt-[100px] lg:py-[100px]">
        <div className="container-wide">
          <div className="mx-auto flex max-w-[1152px] flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="flex flex-col gap-2 lg:w-[380px] lg:shrink-0">
              <Reveal>
                <p className="type-small font-medium text-muted uppercase">Personas</p>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="type-h2 lg:pb-4">
                  Whose 2036 is it?
                </h2>
              </Reveal>
            </div>
            <Reveal delay={2} className="max-w-[600px] lg:w-[600px] lg:shrink">
              <p className="type-body leading-[1.5]">
                Every future looks different depending on where you stand.
                Select your persona and experience it from their perspective.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={3} className="container-wide mt-10 lg:mt-12">
          <div className="mx-auto max-w-[1080px]">
            <PersonaPicker personas={personas} />
          </div>
        </Reveal>
      </section>

      {/* futures (Figma: Working designs, node 563:296) */}
      <section id="futures" className="scroll-mt-[76px] bg-paper pt-16 pb-24 text-ink sm:scroll-mt-[100px] lg:pt-[120px] lg:pb-[200px]">
        <div className="container-wide">
          <div className="mx-auto flex max-w-[1152px] flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="flex flex-col gap-2 lg:w-[414px] lg:shrink-0">
              <Reveal>
                <p className="type-small font-medium text-muted uppercase">Futures</p>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="type-h2 pb-4 max-lg:pb-0">Choose your future</h2>
              </Reveal>
            </div>
            <Reveal delay={2} className="max-w-[600px] lg:w-[600px] lg:shrink">
              <p className="type-body mb-3 leading-[1.5]">
                Each future is a possible 2036, told from multiple angles: how
                it started, how it unfolded, who lives with the consequences,
                and what questions remain.
              </p>
              <Link
                to="/four-futures/how-to-read"
                className="type-body leading-[1.5] underline decoration-from-font underline-offset-auto hover:no-underline"
              >
                How to read the futures →
              </Link>
            </Reveal>
          </div>
        </div>

        <Reveal delay={3} className="container-wide mt-10 lg:mt-12">
          <div className="mx-auto flex max-w-[1080px] flex-col gap-5 sm:gap-7">
            {futures.map((future) => (
              <FutureListRow key={future.id} future={future} />
            ))}
          </div>
        </Reveal>
      </section>

      <SiteFooter bg="bg-[#171c27]" />
    </div>
  );
}

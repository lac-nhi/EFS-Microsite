import { Link } from "react-router-dom";
import { futures } from "../data/futures";
import { personas } from "../data/personas";
import { asset } from "../lib/asset";
import { FuturePageFooter } from "./FuturePageFooter";
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
        <div className="container-editorial relative z-10 pb-36 pt-28 md:pb-48 md:pt-40 lg:pb-64 lg:pt-48">
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
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#personas"
                  className="type-body rounded-[4px] bg-explorer-cyan px-6 py-3 text-ink-deep transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Select your persona
                </a>
                <a
                  href="#futures"
                  className="type-body rounded-[4px] border border-white px-6 py-3 text-white transition-colors duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
      <section id="personas" className="scroll-mt-[76px] sm:scroll-mt-[100px] bg-paper py-20 text-ink-deep md:py-28">
        <div className="container-editorial">
          <div className="mx-auto grid max-w-[1152px] grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <Reveal>
                <p className="label-mono !font-medium text-[#747474]">Personas</p>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="text-balance mt-4 font-sans text-display-3 font-bold leading-[1.05] text-ink-deep">
                  Whose 2036 is it?
                </h2>
              </Reveal>
            </div>
            <Reveal delay={2} className="md:col-span-6 md:col-start-7">
              <p className="text-copy font-normal leading-relaxed text-ink-deep/60">
                Every future looks different depending on where you stand.
                Select your persona and experience it from their perspective.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={3} className="container-editorial mt-14">
          <div className="mx-auto max-w-[1080px]">
            <PersonaPicker personas={personas} />
          </div>
        </Reveal>
      </section>

      {/* futures */}
      <section id="futures" className="scroll-mt-[76px] sm:scroll-mt-[100px] bg-paper py-20 text-ink-deep md:py-28">
        <div className="container-editorial">
          <div className="mx-auto grid max-w-[1152px] grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <Reveal>
                <p className="label-mono !font-medium text-[#747474]">Futures</p>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="text-balance mt-4 font-sans text-display-3 font-bold leading-[1.05] text-ink-deep">
                  Choose your future
                </h2>
              </Reveal>
            </div>
            <Reveal delay={2} className="md:col-span-6 md:col-start-7">
              <p className="text-copy font-normal leading-relaxed text-ink-deep/60">
                Each future is a possible 2036, told from multiple angles: how
                it started, how it unfolded, who lives with the consequences,
                and what questions remain.
              </p>
              <Link
                to="/four-futures/how-to-read"
                className="mt-4 inline-block rounded-none border border-ink-deep/30 px-5 py-2.5 font-sans text-sm text-ink-deep transition-colors duration-300 hover:border-ink-deep"
              >
                How to read the futures →
              </Link>
            </Reveal>
          </div>
        </div>

        <Reveal delay={3} className="container-editorial mt-14">
          <div className="mx-auto flex max-w-[1080px] flex-col">
            {futures.map((future) => (
              <FutureListRow key={future.id} future={future} />
            ))}
          </div>
        </Reveal>
      </section>

      <FuturePageFooter />
    </div>
  );
}

import { Navigate, useParams } from "react-router-dom";
import { getFutureBySlug } from "../data/futures";
import { getFutureAccent } from "../data/futureAccents";
import { asset } from "../lib/asset";
import { CollapseIndicatorChart } from "./CollapseIndicatorChart";
import { ConstraintRegionsMap } from "./ConstraintRegionsMap";
import { FutureAxisTable } from "./FutureAxisTable";
import { FuturePageFooter } from "./FuturePageFooter";
import { FutureSidebarNav } from "./FutureSidebarNav";
import { FutureTopNav } from "./FutureTopNav";
import { FutureVoices } from "./FutureVoices";
import { GrowthIndicatorChart } from "./GrowthIndicatorChart";
import { Reveal } from "./Reveal";
import { TransformIndicatorChart } from "./TransformIndicatorChart";

function SectionEyebrow({ index, label }: { index: string; label: string }) {
  return (
    <p className="type-small mb-2 font-medium text-muted uppercase">
      {index} — {label}
    </p>
  );
}

export function FutureDetailPage() {
  const { slug } = useParams();
  const future = getFutureBySlug(slug ?? "");

  if (!future) return <Navigate to="/four-futures" replace />;

  const Icon = future.icon;
  const accent = getFutureAccent(future.slug);

  return (
    <div className="bg-paper text-ink-deep">
      <FutureTopNav activeSlug={future.slug} />

      {/* hero */}
      <section className="pb-0 pt-14 md:border-b md:border-ink-deep/10 md:pt-20">
        <div className="container-wide grid grid-cols-1 gap-8 pb-14 md:grid-cols-12 md:gap-10 md:pb-20">
          <Reveal className="md:col-span-7">
            <h1 className="type-h1 text-ink">
              {future.heroHeadline}
            </h1>
          </Reveal>
          <Reveal delay={1} className="md:col-span-5">
            <p className="type-body leading-[1.5] text-ink">
              {future.heroIntro}
            </p>
          </Reveal>
        </div>

        <Reveal delay={2}>
          {future.heroImage ? (
            <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[21/8]">
              <img
                src={asset(future.heroImage)}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div
              className="relative flex aspect-[4/3] w-full items-end overflow-hidden md:aspect-[21/8]"
              style={{
                background: `radial-gradient(120% 140% at 15% 0%, ${future.accent}26, transparent 55%), linear-gradient(160deg, #39415a 0%, #1c2333 100%)`,
              }}
            >
              <Icon
                className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-paper/[0.06] md:h-80 md:w-80"
                strokeWidth={0.75}
              />
            </div>
          )}
        </Reveal>
      </section>

      {/* body */}
      <section className="container-wide grid grid-cols-1 gap-14 py-16 md:grid-cols-12 md:gap-10 md:py-24">
        <div className="hidden md:col-span-3 md:block">
          <FutureSidebarNav />
        </div>

        <div className="md:col-span-9 md:max-w-4xl">
          {/* 01 how it started */}
          <div id="how-it-started" className="scroll-mt-[160px] pt-12 md:border-t md:border-ink-deep/10">
            <Reveal>
              <SectionEyebrow index="01" label="How It Started" />
              <h2 className="type-h2 text-ink">
                {future.howItStartedTitle}
              </h2>
              <div className="mt-5 flex flex-col gap-4">
                {future.howItStartedBody.map((p) => (
                  <p key={p} className="type-body text-ink">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          {/* 02 what changed */}
          <div id="what-changed" className="scroll-mt-[160px] border-t border-ink-deep/10 pt-12 mt-12">
            <Reveal>
              <SectionEyebrow index="02" label="What Changed" />
              <h2 className="type-h2 text-ink">
                {future.whatChangedTitle}
              </h2>
              <div className="mt-5 flex flex-col gap-4">
                {future.whatChangedBefore.map((p) => (
                  <p key={p} className="type-body text-ink">
                    {p}
                  </p>
                ))}
              </div>

              <blockquote
                className="type-h3 my-8 border-l-2 pl-5 text-ink"
                style={{ borderColor: accent }}
              >
                {future.pullQuote}
              </blockquote>

              {future.whatChangedImage ? (
                <img
                  src={asset(future.whatChangedImage)}
                  alt=""
                  className="aspect-[16/9] w-full rounded-lg object-cover"
                />
              ) : (
                <div
                  className="aspect-[16/9] w-full rounded-lg"
                  style={{
                    backgroundImage:
                      "linear-gradient(45deg, #e6e6e6 25%, transparent 25%), linear-gradient(-45deg, #e6e6e6 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e6e6e6 75%), linear-gradient(-45deg, transparent 75%, #e6e6e6 75%)",
                    backgroundSize: "24px 24px",
                    backgroundPosition: "0 0, 0 12px, 12px -12px, -12px 0px",
                    backgroundColor: "#f7f7f7",
                  }}
                />
              )}

              <div className="mt-5 flex flex-col gap-4">
                {future.whatChangedAfter.map((p) => (
                  <p key={p} className="type-body text-ink">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          {/* 03 axis positions */}
          <div id="axis-positions" className="scroll-mt-[160px] border-t border-ink-deep/10 pt-12 mt-12">
            <Reveal>
              <SectionEyebrow index="03" label="Forces" />
              <h2 className="type-h2 text-ink">
                The architecture of {future.codename.charAt(0) + future.codename.slice(1).toLowerCase()}
              </h2>
              <p className="type-body mt-3 text-ink">{future.axisSummary}</p>
              <div className="mt-6">
                <FutureAxisTable activeSlug={future.slug} />
              </div>
            </Reveal>
          </div>

          {/* 04 future indicators */}
          <div id="future-indicators" className="scroll-mt-[160px] border-t border-ink-deep/10 pt-12 mt-12">
            <Reveal>
              <SectionEyebrow index="04" label="Future Indicators" />
              <h2 className="type-h2 text-ink">
                {future.indicatorTitle}
              </h2>
              <p className="type-body mt-3 text-ink">{future.indicatorSubtitle}</p>
              <div className="mt-6">
                {future.slug === "growth" && <GrowthIndicatorChart />}
                {future.slug === "collapse" && <CollapseIndicatorChart />}
                {future.slug === "constraint" && <ConstraintRegionsMap />}
                {future.slug === "transformation" && <TransformIndicatorChart />}
              </div>
            </Reveal>
          </div>

          {/* 05 three voices */}
          <div id="three-voices" className="scroll-mt-[160px] border-t border-ink-deep/10 pt-12 mt-12">
            <Reveal>
              <SectionEyebrow index="05" label="Three Voices" />
              <h2 className="type-h2 text-ink">
                {future.threeVoicesTitle}
              </h2>
              <div className="mt-6">
                <FutureVoices voices={future.voices} />
              </div>
            </Reveal>
          </div>

          {/* 06 emerging careers */}
          <div id="emerging-careers" className="scroll-mt-[160px] border-t border-ink-deep/10 pt-12 mt-12">
            <Reveal>
              <SectionEyebrow index="06" label="Emerging Careers" />
              <h2 className="type-h2 text-ink">
                {future.careerHandoffTitle}
              </h2>
              <p className="type-body mt-3 text-ink">
                {future.careerHandoffBody}
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {future.emergingCareers.map((career) => (
                  <div
                    key={career}
                    className="type-body rounded-lg border border-ink-deep/10 px-4 py-3 text-ink"
                  >
                    {career}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* 07 readiness implications */}
          <div id="readiness-implications" className="scroll-mt-[160px] border-t border-ink-deep/10 pt-12 mt-12">
            <Reveal>
              <SectionEyebrow index="07" label="Readiness Implications" />
              <h2 className="type-h2 text-ink">
                {future.readinessTitle}
              </h2>
              <div className="mt-5 flex flex-col gap-4">
                {future.careerReadiness.map((p) => (
                  <p key={p} className="type-body text-ink">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 08 open question — closing CTA */}
      <section id="open-question" className="scroll-mt-[160px] bg-navy py-20 md:py-28">
        <div className="container-wide">
          <Reveal>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:gap-10 md:items-center">
              <div>
                <span className="type-small inline-flex items-center justify-center rounded-[4px] bg-explorer-cyan px-4 py-2 text-center font-medium text-ink uppercase">
                  Design Question
                </span>
              </div>

              <div className="md:max-w-5xl">
                <h2 className="type-h2 text-white">
                  {future.closingHeadline}
                </h2>

                <div className="mt-6 flex flex-col gap-4">
                  {future.closingBody.map((p) => (
                    <p
                      key={p}
                      className="type-body text-white"
                    >
                      {p}
                    </p>
                  ))}
                </div>

                <p className="type-h3 mt-6 text-white">
                  {future.closingQuestion}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FuturePageFooter />
    </div>
  );
}

import { Reveal } from "./Reveal";

const STEPS = [
  {
    index: "01",
    label: "Select persona",
    body: "Step into someone else's shoes.",
  },
  {
    index: "02",
    label: "Explore futures",
    body: "Step into a new reality of your choice.",
  },
  {
    index: "03",
    label: "Bring it back",
    body: "Return with something to question, defend, or rethink.",
  },
];

/** Figma: Working designs, node 563:182 */
export function HowItWorksSection() {
  return (
    <section className="bg-paper pt-16 pb-12 text-ink lg:pt-[120px] lg:pb-[100px]">
      <div className="container-editorial">
        <div className="mx-auto flex max-w-[1152px] flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="flex flex-col gap-2 lg:w-[380px] lg:shrink-0">
            <Reveal>
              <p className="type-small font-medium text-muted uppercase">How it works</p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="type-h2 lg:pb-4">
                The future looks different from where you stand
              </h2>
            </Reveal>
          </div>
          <div className="flex max-w-[600px] flex-col gap-10 lg:w-[600px] lg:shrink">
            <Reveal delay={2}>
              <p className="type-body">
                Each future is shaped by the same seven forces: what drives
                change, who decides what makes someone qualified, how quickly
                work changes, what humans and AI are each valuable at, where
                learning and formation happen, what higher education is
                ultimately for, and who bears the risk. Your persona shows how
                those changes might be experienced from a particular learner in
                the system.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-[repeat(2,minmax(0,280px))] sm:justify-between">
                {STEPS.map((step) => (
                  <div key={step.index} className="flex flex-col gap-1.5 border-t-2 border-explorer-cyan pt-3">
                    <p className="type-small font-medium text-muted uppercase">
                      {step.index} — {step.label}
                    </p>
                    <p className="type-body">{step.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

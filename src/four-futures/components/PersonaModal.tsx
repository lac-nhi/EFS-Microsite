import { AnimatePresence, motion } from "framer-motion";
import { Download } from "lucide-react";
import { useEffect, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { asset } from "../lib/asset";
import type { Persona } from "../data/types";

interface PersonaModalProps {
  persona: Persona | null;
  onClose: () => void;
}

export function PersonaModal({ persona, onClose }: PersonaModalProps) {
  useEffect(() => {
    if (!persona) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [persona, onClose]);

  return createPortal(
    <AnimatePresence>
      {persona && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-deep/70 p-4 backdrop-blur-xs md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl bg-paper shadow-2xl"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex shrink-0 items-center justify-end gap-2 bg-navy px-4 py-3">
              <a
                href={asset(`personas-cards/${persona.id}.png`)}
                download={`${persona.id}-persona-card.png`}
                aria-label="Download persona card as PNG"
                className="flex h-10 items-center gap-2 rounded-full border border-paper/30 px-4 text-paper transition-colors duration-300 hover:border-paper"
              >
                <Download className="h-4 w-4" strokeWidth={1.75} />
                <span className="type-small hidden font-medium sm:inline">Download PNG</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="flex size-10 items-center justify-center rounded-full border border-paper/30 text-paper transition-colors duration-300 hover:border-paper"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="flex min-h-0 flex-1 flex-col overflow-hidden md:flex-row">
              {/* front */}
              <div
                className="flex min-h-0 shrink-0 flex-col justify-between overflow-y-auto bg-navy p-6 md:w-[38%] md:p-10"
                style={{ "--pcolor": persona.color } as CSSProperties}
              >
                <div className="flex items-center gap-4 md:hidden">
                  <img
                    src={asset(persona.photo)}
                    alt={persona.name}
                    className="aspect-square w-16 shrink-0 rounded-xl object-cover"
                  />
                  <div className="min-w-0">
                    <div className="type-h3 text-white">{persona.name}</div>
                    <div className="type-body mt-1 inline-block text-ink-deep">
                      <span className="text-paper">The </span>
                      <span
                        className={`bg-[var(--pcolor)] px-1.5 ${persona.archetypeTextColor === "paper" ? "text-paper" : ""}`}
                      >
                        {persona.archetype.replace(/^The /, "")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 md:mt-0">
                  <div className="type-body flex items-center justify-between font-medium text-white">
                    <span>
                      {persona.age}, {persona.aiRelationship}
                    </span>
                  </div>
                  <span className="mt-3 block h-px w-full bg-[var(--pcolor)]" />
                </div>

                <img
                  src={asset(persona.photo)}
                  alt={persona.name}
                  className="hidden aspect-square w-full rounded-xl object-cover md:my-8 md:block"
                />

                <div className="hidden md:block">
                  <div className="type-h2 text-white">{persona.name}</div>
                  <div className="type-h3 mt-2 inline-block text-ink-deep">
                    <span className="text-paper">The </span>
                    <span
                      className={`bg-[var(--pcolor)] px-1.5 ${persona.archetypeTextColor === "paper" ? "text-paper" : ""}`}
                    >
                      {persona.archetype.replace(/^The /, "")}
                    </span>
                  </div>
                </div>
              </div>

              {/* back */}
              <div className="min-h-0 flex-1 overflow-y-auto bg-paper p-8 md:p-10">
                <dl className="flex flex-col gap-6">
                  <div>
                    <dt className="type-body font-medium text-[#3a4057]">Background</dt>
                    <dd className="type-body mt-1.5 text-ink">{persona.background}</dd>
                  </div>
                  <div>
                    <dt className="type-body font-medium text-[#3a4057]">Finances</dt>
                    <dd className="type-body mt-1.5 text-ink">{persona.finances}</dd>
                  </div>
                  <div>
                    <dt className="type-body font-medium text-[#3a4057]">Worldview</dt>
                    <dd className="type-body mt-1.5 text-ink">{persona.worldview}</dd>
                  </div>
                  <div>
                    <dt className="type-body font-medium text-[#3a4057]">Strengths</dt>
                    <dd className="type-body mt-1.5 text-ink">
                      {persona.strengths.join(", ")}
                    </dd>
                  </div>
                  <div>
                    <dt className="type-body font-medium text-[#3a4057]">Biggest fear</dt>
                    <dd className="type-body mt-1.5 text-ink">{persona.biggestFear}</dd>
                  </div>
                  <div>
                    <dt className="type-body font-medium text-[#3a4057]">Success looks like</dt>
                    <dd className="type-body mt-1.5 text-ink">{persona.successLooksLike}</dd>
                  </div>
                </dl>

                <span className="mt-8 block h-1 w-full" style={{ background: persona.color }} />

                <div className="mt-8">
                  <p className="type-body font-medium text-[#3a4057]">In their shoes</p>
                  <p className="type-body mt-1.5 text-ink">{persona.inTheirShoes}</p>
                </div>

                <div className="-mx-8 mt-10 -mb-8 flex flex-col gap-3 bg-[#3b4159] px-8 py-10 text-white md:-mx-10 md:-mb-10 md:px-10">
                  <span aria-hidden="true" className="font-heading text-[64px] leading-[0.6] font-bold" style={{ color: persona.color }}>
                    &ldquo;
                  </span>
                  <p className="type-body">{persona.quote}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

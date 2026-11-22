import { useState, type CSSProperties } from "react";
import type { Persona } from "../data/types";
import { asset } from "../lib/asset";
import { PersonaModal } from "./PersonaModal";

/** Persona cards (Figma: Working designs, node 563:209) */
export function PersonaPicker({ personas }: { personas: Persona[] }) {
  const [selected, setSelected] = useState<Persona | null>(null);

  return (
    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-[42px] xl:grid-cols-[repeat(3,330px)] xl:justify-between xl:gap-x-0">
      {personas.map((persona) => {
        const accent = { "--pcolor": persona.color } as CSSProperties;
        // Figma's tighter head-and-shoulders crop of the same photo
        const thumb = `personas-thumbs/${persona.photo.split("/").pop()}`;

        return (
          <button
            key={persona.id}
            type="button"
            onClick={() => setSelected(persona)}
            style={accent}
            className="group flex min-h-[320px] w-full flex-col justify-between rounded-[8px] border-t-6 border-[var(--pcolor)] bg-navy px-8 pt-8 pb-[52px] text-left text-white transition-colors duration-300 hover:bg-navy-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pcolor)] lg:h-[350px]"
          >
            <span className="flex w-full justify-end">
              <img
                src={asset("icons/arrow-circle-up-right.svg")}
                alt=""
                width={42}
                height={42}
                className="size-[42px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>

            <span className="flex w-full flex-col gap-6">
              <img
                src={asset(thumb)}
                alt={persona.name}
                width={132}
                height={132}
                className="size-[132px] shrink-0 rounded-full object-cover"
              />
              <span className="flex w-full flex-col gap-3">
                <span className="block border-b-3 border-[var(--pcolor)] py-2.5 pr-2.5 pl-2 text-[clamp(1.25rem,1.05rem+0.5vw,1.5rem)] leading-[1.1] font-bold">
                  {persona.name}, {persona.age}
                </span>
                <span className="type-body block pl-2 leading-[1.1]">{persona.archetype}</span>
              </span>
            </span>
          </button>
        );
      })}

      <PersonaModal persona={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

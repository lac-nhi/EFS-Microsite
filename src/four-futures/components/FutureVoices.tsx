import type { FutureVoice } from "../data/types";
import { asset } from "../lib/asset";

const ROLE_ICONS: Record<string, string> = {
  Faculty: "icons/faculty.png",
  "Institutional Leader": "icons/institutional-leader.png",
  Employer: "icons/employer.png",
};

export function FutureVoices({ voices }: { voices: FutureVoice[] }) {
  return (
    <div className="flex flex-col gap-10">
      {voices.map((voice) => (
        <div key={voice.role} className="border-t border-ink-deep/10 pt-8">
          <h3 className="type-h3 mb-3 text-ink">
            {voice.role}
          </h3>
          <p className="type-body border-l-2 border-ink-deep/20 pl-5 text-ink">
            &ldquo;{voice.quote}&rdquo;
          </p>
          <div className="mt-5 flex items-center gap-3">
            <img
              src={asset(ROLE_ICONS[voice.role])}
              alt=""
              className="h-12 w-12 shrink-0"
            />
            <p className="type-small text-ink">
              <span className="font-medium text-ink">{voice.name}</span>
              {" — "}
              {voice.context}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

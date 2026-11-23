import { Link } from "react-router-dom";
import { useActiveSection } from "../../hooks/useActiveSection";

export interface SidebarSection {
  id: string;
  label: string;
}

const DEFAULT_SECTIONS: SidebarSection[] = [
  { id: "how-it-started", label: "How it started" },
  { id: "what-changed", label: "What changed" },
  { id: "axis-positions", label: "Forces" },
  { id: "future-indicators", label: "Future indicators" },
  { id: "three-voices", label: "Three voices" },
  { id: "emerging-careers", label: "Emerging careers" },
  { id: "readiness-implications", label: "Readiness implications" },
  { id: "open-question", label: "Design question" },
];

interface FutureSidebarNavProps {
  title?: string;
  sections?: SidebarSection[];
}

export function FutureSidebarNav({
  title = "In This Future",
  sections = DEFAULT_SECTIONS,
}: FutureSidebarNavProps) {
  const { active: activeId, select } = useActiveSection(sections.map((s) => s.id));

  return (
    <nav className="hidden h-full md:block">
      <div className="sticky top-[164px]">
        <p className="mb-3.5 text-[15px] leading-[1.5] font-medium tracking-[0.06em] text-muted uppercase">{title}</p>
        <ul className="flex flex-col gap-1.5">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={() => select(section.id)}
                  aria-current={isActive ? "location" : undefined}
                  className={[
                    "block border-l-2 py-1 pl-3 text-[16px] leading-[1.5] transition-colors",
                    isActive
                      ? "border-accent-blue font-medium text-ink"
                      : "border-rule text-muted hover:text-ink",
                  ].join(" ")}
                >
                  {section.label}
                </a>
              </li>
            );
          })}
        </ul>
        <Link
          to="/four-futures/how-to-read"
          className="type-small mt-6 inline-block rounded-[4px] border border-ink px-4 py-2 text-ink transition-colors duration-300 hover:bg-ink/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue"
        >
          How to read the futures
        </Link>
      </div>
    </nav>
  );
}

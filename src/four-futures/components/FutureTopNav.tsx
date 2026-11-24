import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { futures } from "../data/futures";
import { InstitutionMark } from "./InstitutionMark";

interface FutureTopNavProps {
  activeSlug: string;
}

export function FutureTopNav({ activeSlug }: FutureTopNavProps) {
  const activeRef = useRef<HTMLAnchorElement>(null);

  // On narrow screens the tabs scroll sideways; keep the current one in view
  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: "nearest", inline: "center" });
  }, [activeSlug]);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-navy">
        <div className="container-wide flex h-[76px] items-center justify-between sm:h-[100px]">
          <InstitutionMark tone="light" />
        </div>
      </div>
      {/* Same style as the Big Ideas tab bar (IdeaTabs in src/pages/BigIdeaPage.tsx) */}
      <nav aria-label="The four futures" className="border-b border-tab-rule bg-white">
        <div className="container-wide overflow-x-auto pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ul className="flex gap-2 lg:gap-6">
            {futures.map((future) => {
              const isActive = future.slug === activeSlug;
              return (
                <li key={future.id} className="shrink-0">
                  <Link
                    to={`/four-futures/futures/${future.slug}`}
                    ref={isActive ? activeRef : undefined}
                    aria-current={isActive ? "page" : undefined}
                    className={`-mb-px flex items-center border-b-3 px-4 py-2.5 text-[16px] leading-[1.1] font-medium whitespace-nowrap transition-colors sm:px-6 ${
                      isActive ? "border-accent-blue text-ink" : "border-transparent text-muted hover:text-ink"
                    }`}
                  >
                    {future.codename.charAt(0) + future.codename.slice(1).toLowerCase()}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

import { Link } from "react-router-dom";
import { futures } from "../data/futures";
import { InstitutionMark } from "./InstitutionMark";

interface FutureTopNavProps {
  activeSlug: string;
}

export function FutureTopNav({ activeSlug }: FutureTopNavProps) {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-navy">
        <div className="container-wide flex h-[76px] items-center justify-between sm:h-[100px]">
          <InstitutionMark tone="light" />
        </div>
      </div>
      {/* Styled like the main site navigation (SiteHeader): 18px text, 1.5px underline on the current page */}
      <nav aria-label="The four futures" className="border-b border-ink-deep/10 bg-paper">
        <div className="container-wide flex h-11 items-center gap-6 overflow-x-auto">
          {futures.map((future) => {
            const isActive = future.slug === activeSlug;
            return (
              <Link
                key={future.id}
                to={`/four-futures/futures/${future.slug}`}
                aria-current={isActive ? "page" : undefined}
                className={`flex h-[26px] shrink-0 items-center border-b-[1.5px] pb-[6px] text-[18px] leading-[1.1] whitespace-nowrap text-ink transition-colors ${
                  isActive ? "border-accent-blue" : "border-transparent hover:border-ink/50"
                }`}
              >
                {future.codename.charAt(0) + future.codename.slice(1).toLowerCase()}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

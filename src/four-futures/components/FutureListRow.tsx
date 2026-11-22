import { Link } from "react-router-dom";
import type { Future } from "../data/types";
import { asset } from "../lib/asset";

/** One card in "Choose your future" (Figma: Working designs, node 563:296) */
export function FutureListRow({ future }: { future: Future }) {
  const Icon = future.icon;

  return (
    <Link
      to={`/four-futures/futures/${future.slug}`}
      className="group flex items-center gap-5 rounded-[18px] bg-navy px-5 py-7 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-explorer-cyan sm:gap-8 sm:px-[42px] sm:py-10"
    >
      <div className="flex min-w-0 flex-1 flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
        <span className="flex size-[52px] shrink-0 items-center justify-center rounded-full bg-[#d9d9d9] text-navy transition-colors duration-300 group-hover:bg-explorer-cyan">
          <Icon className="h-[26px] w-auto" />
        </span>

        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <h3 className="font-heading text-[clamp(1.375rem,1.2rem+0.6vw,1.625rem)] leading-[1.3] font-normal tracking-[-0.01em]">
            {future.codename.charAt(0) + future.codename.slice(1).toLowerCase()}
          </h3>
          <div className="type-small leading-[1.5]">
            <p className="mb-1">{future.tagline}</p>
            <p className="font-medium">{future.homeQuestion}</p>
          </div>
        </div>
      </div>

      <span className="relative size-[42px] shrink-0" aria-hidden="true">
        <img src={asset("icons/arrow-circle.svg")} alt="" width={42} height={42} className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0" />
        <img src={asset("icons/arrow-circle-active.svg")} alt="" width={42} height={42} className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </span>
    </Link>
  );
}

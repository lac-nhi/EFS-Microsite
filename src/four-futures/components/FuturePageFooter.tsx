import { InstitutionMark } from "./InstitutionMark";

export function FuturePageFooter() {
  return (
    <footer className="border-t border-paper/15 bg-navy py-10">
      <div className="container-wide flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <InstitutionMark tone="light" />
        <p className="p-[2px] text-[18px] leading-[1.1] font-bold tracking-[-0.02em] text-white">Emerging Futures Studio 2026</p>
      </div>
    </footer>
  );
}

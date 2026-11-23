import { axisComparisonRows } from "../data/axisComparison";
import { getFutureAccent, hexToRgba } from "../data/futureAccents";

const COLUMNS: { slug: string; key: "growth" | "collapse" | "constraint" | "transformation"; label: string }[] = [
  { slug: "growth", key: "growth", label: "Growth" },
  { slug: "collapse", key: "collapse", label: "Collapse" },
  { slug: "constraint", key: "constraint", label: "Constraint" },
  { slug: "transformation", key: "transformation", label: "Transformation" },
];

export function FutureAxisTable({ activeSlug }: { activeSlug: string }) {
  const accent = getFutureAccent(activeSlug);

  return (
    <div className="overflow-x-auto rounded-xl border border-ink-deep/10">
      <table className="type-small w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr>
            <th className="w-[26%] bg-navy px-4 py-3 font-medium text-white">Forces</th>
            {COLUMNS.map((col) => {
              const isActive = col.slug === activeSlug;
              return (
                <th
                  key={col.slug}
                  className="px-4 py-3 font-medium text-white"
                  style={isActive ? { backgroundColor: accent } : { backgroundColor: "#272f42" }}
                >
                  {col.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {axisComparisonRows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 1 ? "bg-paper-dim/40" : undefined}>
              <td className="border-b border-ink-deep/10 px-4 py-4 text-ink">
                {row.label}
              </td>
              {COLUMNS.map((col) => {
                const isActive = col.slug === activeSlug;
                return (
                  <td
                    key={col.slug}
                    className={[
                      "border-b border-ink-deep/10 px-4 py-4",
                      isActive ? "font-medium text-ink" : "text-ink",
                    ].join(" ")}
                    style={isActive ? { backgroundColor: hexToRgba(accent, 0.14) } : undefined}
                  >
                    {row[col.key]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

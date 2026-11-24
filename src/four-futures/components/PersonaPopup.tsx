import { personas } from "../data/personas";
import { PersonaModal } from "./PersonaModal";

/**
 * The Four Futures persona card pop-up, looked up by name, for use outside /four-futures
 * (the "View persona →" links in a big idea's "A day in this future" section).
 * Loaded lazily so the main pages don't carry the pop-up's animation library until needed.
 */
export default function PersonaPopup({ name, onClose }: { name: string | null; onClose: () => void }) {
  const persona = personas.find((p) => p.name === name) ?? null;
  return <PersonaModal persona={persona} onClose={onClose} />;
}

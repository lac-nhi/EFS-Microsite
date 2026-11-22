import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

interface InstitutionMarkProps {
  /** Only the light (on navy) version is used, matching the main site header */
  tone?: "light";
}

/** Same logo lockup as the main site header: ASU UDI logo | Emerging Futures Studio */
export function InstitutionMark(_props: InstitutionMarkProps) {
  return (
    <Link to="/four-futures" className="flex items-center gap-4 text-white" aria-label="The Four Futures home">
      <Logo className="w-[150px] sm:w-[190.313px]" />
      <img
        src="/images/divider-line.svg"
        alt=""
        width={50}
        height={1.2}
        className="-mx-[25px] hidden w-[50px] -rotate-90 sm:block"
      />
      <span className="hidden p-[2px] text-[19px] leading-[1.1] font-bold tracking-[-0.02em] whitespace-nowrap sm:block">
        Emerging Futures Studio
      </span>
    </Link>
  );
}

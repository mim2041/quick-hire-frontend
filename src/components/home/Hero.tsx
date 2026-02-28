import { HeroSearch } from "./HeroSearch";
import heroImg from "@/assets/images/hero-img.svg";
import textDecorator from "@/assets/images/text-decorator.svg";
import pattern from "@/assets/images/Pattern.svg";
import Image from "next/image";

// Company logos – using inline SVG placeholders that mirror the grayscale wordmark style
const companies = [
  {
    name: "Vodafone",
    logo: (
      <div className="flex items-center gap-1.5">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" stroke="#9ca3af" strokeWidth="2" />
          <path
            d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4"
            stroke="#9ca3af"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-sm font-semibold text-[#9ca3af] tracking-wide">
          vodafone
        </span>
      </div>
    ),
  },
  {
    name: "Intel",
    logo: (
      <span className="text-sm font-bold text-[#9ca3af] tracking-widest">
        intel.
      </span>
    ),
  },
  {
    name: "Tesla",
    logo: (
      <span className="text-sm font-semibold text-[#9ca3af] tracking-[0.3em]">
        TESLA
      </span>
    ),
  },
  {
    name: "AMD",
    logo: (
      <span className="text-sm font-bold text-[#9ca3af] tracking-wider">
        AMD
        <span className="inline-block rotate-[15deg] origin-bottom-left">
          ⌐
        </span>
      </span>
    ),
  },
  {
    name: "Talkit",
    logo: <span className="text-sm font-bold text-[#9ca3af]">Talkit</span>,
  },
];

export function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-visible px-4 pb-12 pt-4 sm:px-6 lg:px-8 lg:pt-8">
        {/* Pattern background — bleeds into/behind navbar on desktop */}
        <div
          className="pointer-events-none absolute right-0 top-[-80px] hidden lg:block"
          style={{ width: "60%", height: "calc(100% + 80px)", zIndex: 0 }}
          aria-hidden
        >
          <Image
            src={pattern}
            alt=""
            fill
            className="object-contain object-right-top opacity-70"
          />
        </div>

        {/* Mobile pattern — subtle, behind content */}
        <div
          className="pointer-events-none absolute right-0 top-0 lg:hidden"
          style={{ width: "80%", height: "100%", zIndex: 0 }}
          aria-hidden
        >
          <Image
            src={pattern}
            alt=""
            fill
            className="object-contain object-right-top opacity-40"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            {/* Left: Text + Search */}
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-[#1e2d4f] sm:text-[48px] lg:text-[72px] leading-tight">
                Discover
                <br />
                more than
                <br />
                <span className="relative text-[#26A4FF]">
                  5000+ Jobs
                  {/* Blue brush underline */}
                  <span
                    className="absolute left-0 block w-full"
                    aria-hidden
                  >
                    <Image
                      src={textDecorator}
                      alt=""
                      width={260}
                      height={14}
                      className="w-full"
                    />
                  </span>
                </span>
              </h1>

              <p className="mt-8 max-w-md text-sm text-[#6b7280] sm:text-base leading-relaxed">
                Great platform for the job seeker that searching for new career
                heights and passionate about startups.
              </p>

              <div className="mt-6 sm:mt-8">
                <HeroSearch />
              </div>

              <p className="mt-3 text-xs text-[#6b7280]">
                <span className="font-medium">Popular :</span> UI Designer, UX
                Researcher, Android, Admin
              </p>
            </div>

            {/* Right: Hero image (desktop only) */}
            <div className="relative hidden lg:flex justify-end">
              <div className="relative h-[707px] w-full max-w-lg">
                <Image
                  src={heroImg}
                  alt="Job seeker smiling"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="relative z-10 bg-white/60 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm text-[#6b7280]">
            Companies we helped grow
          </p>

          {/* Desktop: single row */}
          <div className="hidden sm:flex items-center gap-8 lg:gap-12 flex-wrap">
            {companies.map((c) => (
              <div
                key={c.name}
                className="flex items-center opacity-60 hover:opacity-100 transition-opacity"
              >
                {c.logo}
              </div>
            ))}
          </div>

          {/* Mobile: 2-column grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:hidden">
            {companies.map((c) => (
              <div key={c.name} className="flex items-center opacity-60">
                {c.logo}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

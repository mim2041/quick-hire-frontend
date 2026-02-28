import { HeroSearch } from "./HeroSearch";
import heroImg from "@/assets/images/hero-img.svg";
import textDecorator from "@/assets/images/text-decorator.svg";
import pattern from "@/assets/images/Pattern.svg";
import Image from "next/image";
import vodaphone from "@/assets/logos/vodafone.svg";
import intel from "@/assets/logos/intel.svg";
import tesla from "@/assets/logos/tesla.svg";
import amd from "@/assets/logos/amd.svg";
import talkit from "@/assets/logos/talkit.svg";

const companies = [
  { logo: vodaphone, name: "Vodafone" },
  { logo: intel, name: "Intel" },
  { logo: tesla, name: "Tesla" },
  { logo: amd, name: "AMD" },
  { logo: talkit, name: "Talkit" },
];

export function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-b-hidden  px-4  pt-4 sm:px-6 lg:px-8 lg:pt-8">
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
                  <span className="absolute left-0 block w-full" aria-hidden>
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

              <p className="mt-12 max-w-md text-sm text-[#515B6F] sm:text-base leading-relaxed font-epilogue">
                Great platform for the job seeker that searching for new career
                heights and passionate about startups.
              </p>

              <div className="mt-6 sm:mt-8">
                <HeroSearch />
              </div>
            </div>

            {/* Right: Hero image (desktop only) */}
            <div className="relative hidden lg:flex justify-end z-1">
              <div className="relative h-[600px] w-full max-w-lg">
                <Image
                  src={heroImg}
                  alt="Job seeker smiling"
                  fill
                  className="object-contain object-center"
                  priority
                />

                <div className="absolute -bottom-20 -right-4 w-68 rotate-[-30deg] h-40 bg-white "></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="relative z-10 bg-white/60 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm text-gray-400 font-epilogue ">
            Companies we helped grow
          </p>

          {/* Desktop: single row */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12 flex-wrap w-full justify-between">
            {companies.map((c, i) => (
              <div
                key={i}
                className="flex items-center opacity-60 hover:opacity-100 transition-opacity"
              >
                <Image src={c.logo} alt={c.name} width={100} height={100} />
              </div>
            ))}
          </div>

          {/* Mobile: 2-column grid */}
          <div className="md:hidden grid grid-cols-2 gap-x-6 gap-y-5">
            {companies.map((c, i) => (
              <div key={i} className="flex items-center opacity-60">
                <Image src={c.logo} alt={c.name} width={100} height={100} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

// ─── Types ───────────────────────────────────────────────────────────────────
interface Tag {
  label: string;
  color: "marketing" | "design" | "business" | "technology";
}

interface Job {
  id: number;
  logo: string; // path to company logo
  logoAlt: string;
  type: string; // e.g. "Full Time"
  title: string;
  company: string;
  location: string;
  description: string;
  tags: Tag[];
}

// ─── Tag color map ────────────────────────────────────────────────────────────
const tagStyles: Record<Tag["color"], string> = {
  marketing: "bg-[#fff0f0] text-[#f26b6b]",
  design: "bg-[#f0f4ff] text-[#5a56e9]",
  business: "bg-[#f0fdf4] text-[#22c55e]",
  technology: "bg-[#fdf4ff] text-[#a855f7]",
};

// ─── Sample data (replace with real data / props / API) ──────────────────────
const jobs: Job[] = [
  {
    id: 1,
    logo: "/logos/revolut.png",
    logoAlt: "Revolut",
    type: "Full Time",
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    description: "Revolut is looking for Email Marketing to help team ma …",
    tags: [
      { label: "Marketing", color: "marketing" },
      { label: "Design", color: "design" },
    ],
  },
  {
    id: 2,
    logo: "/logos/dropbox.png",
    logoAlt: "Dropbox",
    type: "Full Time",
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, US",
    description: "Dropbox is looking for Brand Designer to help the team t …",
    tags: [
      { label: "Design", color: "design" },
      { label: "Business", color: "business" },
    ],
  },
  {
    id: 3,
    logo: "/logos/pitch.png",
    logoAlt: "Pitch",
    type: "Full Time",
    title: "Email Marketing",
    company: "Pitch",
    location: "Berlin, Germany",
    description: "Pitch is looking for Customer Manager to join marketing t …",
    tags: [{ label: "Marketing", color: "marketing" }],
  },
  {
    id: 4,
    logo: "/logos/blinklist.png",
    logoAlt: "Blinklist",
    type: "Full Time",
    title: "Visual Designer",
    company: "Blinklist",
    location: "Granada, Spain",
    description: "Blinklist is looking for Visual Designer to help team desi …",
    tags: [{ label: "Design", color: "design" }],
  },
  {
    id: 5,
    logo: "/logos/classpass.png",
    logoAlt: "ClassPass",
    type: "Full Time",
    title: "Product Designer",
    company: "ClassPass",
    location: "Manchester, UK",
    description: "ClassPass is looking for Product Designer to help us …",
    tags: [
      { label: "Marketing", color: "marketing" },
      { label: "Design", color: "design" },
    ],
  },
  {
    id: 6,
    logo: "/logos/canva.png",
    logoAlt: "Canva",
    type: "Full Time",
    title: "Lead Designer",
    company: "Canva",
    location: "Ontario, Canada",
    description: "Canva is looking for Lead Engineer to help develop n …",
    tags: [
      { label: "Design", color: "design" },
      { label: "Business", color: "business" },
    ],
  },
  {
    id: 7,
    logo: "/logos/godaddy.png",
    logoAlt: "GoDaddy",
    type: "Full Time",
    title: "Brand Strategist",
    company: "GoDaddy",
    location: "Marseille, France",
    description: "GoDaddy is looking for Brand Strategist to join the team…",
    tags: [{ label: "Marketing", color: "marketing" }],
  },
  {
    id: 8,
    logo: "/logos/twitter.png",
    logoAlt: "Twitter",
    type: "Full Time",
    title: "Data Analyst",
    company: "Twitter",
    location: "San Diego, US",
    description: "Twitter is looking for Data Analyst to help team desi …",
    tags: [{ label: "Technology", color: "technology" }],
  },
];

// ─── Single Job Card ─────────────────────────────────────────────────────────
function JobCard({ job }: { job: Job }) {
  return (
    <article
      className="flex flex-col gap-3 rounded-2xl border border-[#e5e7eb] bg-white p-5
      hover:shadow-md hover:border-[#5a56e9]/30 transition-all duration-200 cursor-pointer
      /* mobile: fixed width so cards peek */ min-w-[260px] sm:min-w-0 w-[260px] sm:w-auto flex-shrink-0 sm:flex-shrink"
    >
      {/* Top row: logo + badge */}
      <div className="flex items-center justify-between">
        <div className="relative h-10 w-10 rounded-lg overflow-hidden border border-[#e5e7eb] bg-[#f9fafb] flex items-center justify-center">
          {/* Fallback letter if no logo */}
          <span className="text-lg font-bold text-[#5a56e9]">
            {job.company[0]}
          </span>
          {/* Uncomment when you have real logos:
          <Image src={job.logo} alt={job.logoAlt} fill className="object-contain p-1" />
          */}
        </div>
        <span className="rounded-full border border-[#5a56e9]/40 bg-[#f0f4ff] px-3 py-1 text-xs font-medium text-[#5a56e9]">
          {job.type}
        </span>
      </div>

      {/* Job info */}
      <div>
        <h3 className="text-base font-bold text-[#1e2d4f]">{job.title}</h3>
        <p className="mt-0.5 text-xs text-[#6b7280]">
          {job.company} <span className="mx-1">·</span> {job.location}
        </p>
      </div>

      <p className="text-xs text-[#6b7280] leading-relaxed line-clamp-2">
        {job.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto pt-1">
        {job.tags.map((tag) => (
          <span
            key={tag.label}
            className={`rounded-full px-3 py-1 text-xs font-medium ${tagStyles[tag.color]}`}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </article>
  );
}

// ─── Featured Jobs Section ────────────────────────────────────────────────────
export function FeaturedJobs() {
  return (
    <section className="w-full bg-white py-10 sm:py-14">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e2d4f]">
            Featured <span className="text-[#5a56e9]">jobs</span>
          </h2>
          {/* Show all jobs — hidden on mobile, shown in footer area instead */}
          <Link
            href="/jobs"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[#1e2d4f] hover:text-[#5a56e9] transition-colors"
          >
            Show all jobs
            <GoArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* ── Mobile: horizontal scroll / swiper ── */}
      <div
        className="sm:hidden px-4 overflow-x-auto scrollbar-none"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="flex gap-4 pb-2" style={{ width: "max-content" }}>
          {jobs.map((job) => (
            <div key={job.id} style={{ scrollSnapAlign: "start" }}>
              <JobCard job={job} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Desktop: 4-column grid in 2 rows ── */}
      <div className="hidden sm:block mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>

      {/* Mobile: Show all jobs link at the bottom */}
      <div className="sm:hidden mt-6 px-4">
        <Link
          href="/jobs"
          className="flex items-center gap-1.5 text-sm font-semibold text-[#1e2d4f] hover:text-[#5a56e9] transition-colors"
        >
          Show all jobs
          <GoArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

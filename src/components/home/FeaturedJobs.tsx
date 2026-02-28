"use client";

import Link from "next/link";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import JobCard from "./JobCard";

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
    description:
      "GoDaddy is looking for Brand Strategist to join the team… Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
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

export function FeaturedJobs() {
  return (
    <section className="w-full bg-white py-10 sm:py-14">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-[32px] lg:text-[48px] font-semibold">
            Featured <span className="text-[#26A4FF]">Jobs</span>
          </h2>
          {/* Show all jobs — hidden on mobile, shown in footer area instead */}
          <Link href="/jobs" className="hidden md:block">
            <span className="flex items-center justify-between gap-3 text-[#4640DE] font-semibold font-epilogue">
              Show all jobs
              <GoArrowRight />
            </span>
          </Link>
        </div>
      </div>

      {/* ── Mobile: horizontal scroll / swiper ── */}
      <div
        className="sm:hidden px-4 ml-4 overflow-x-auto scrollbar-none"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="flex gap-4 pb-2 " style={{ width: "max-content" }}>
          {jobs.map((job) => (
            <div key={job.id} style={{ scrollSnapAlign: "start" }}>
              <JobCard job={job} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Desktop: 4-column grid in 2 rows ── */}
      <div className="hidden sm:block mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-5 ">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>

      {/* Mobile: Show all jobs link at the bottom */}
      <div className="sm:hidden mt-2 px-4">
        <Link
          href="/jobs"
          className="flex items-center gap-1.5 text-sm font-semibold text-[#4640DE] hover:text-[#5a56e9] transition-colors"
        >
          Show all jobs
          <GoArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

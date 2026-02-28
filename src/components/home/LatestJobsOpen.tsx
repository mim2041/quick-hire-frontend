"use client";

import Link from "next/link";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import JobRow from "./JobRow";

// ─── Types ──────────────────────────────────────────────────────────────────

interface Job {
  id: number;
  logo: string;
  logoAlt: string;
  logoBg: string;
  title: string;
  company: string;
  location: string;
  tags: Tag[];
  sponsored?: boolean;
  sponsorLogo?: string;
}

const tagStyles: Record<Tag["color"], string> = {
  "full-time": "border border-[#22c55e] text-[#22c55e] bg-transparent",
  marketing: "border border-[#f59e0b] text-[#f59e0b] bg-transparent",
  design: "border border-[#5a56e9] text-[#5a56e9] bg-transparent",
  developer: "border border-[#06b6d4] text-[#06b6d4] bg-transparent",
  management: "border border-[#f59e0b] text-[#f59e0b] bg-transparent",
};

const jobs: Job[] = [
  {
    id: 1,
    logo: "/logos/nomad.png",
    logoAlt: "Nomad",
    logoBg: "bg-[#f0fdf4]",
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    tags: [
      { label: "Full-Time", color: "full-time" },
      { label: "Marketing", color: "marketing" },
      { label: "Design", color: "design" },
    ],
  },
  {
    id: 2,
    logo: "/logos/netlify.png",
    logoAlt: "Netlify",
    logoBg: "bg-[#f0fdfa]",
    title: "Social Media Assistant",
    company: "Netlify",
    location: "Paris, France",
    tags: [
      { label: "Full-Time", color: "full-time" },
      { label: "Marketing", color: "marketing" },
      { label: "Design", color: "design" },
    ],
  },
  {
    id: 3,
    logo: "/logos/dropbox.png",
    logoAlt: "Dropbox",
    logoBg: "bg-[#eff6ff]",
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Fransisco, USA",
    tags: [
      { label: "Full-Time", color: "full-time" },
      { label: "Marketing", color: "marketing" },
      { label: "Design", color: "design" },
    ],
    sponsored: true,
    sponsorLogo: "/logos/semanik.png",
  },
  {
    id: 4,
    logo: "/logos/maze.png",
    logoAlt: "Maze",
    logoBg: "bg-[#fff1f2]",
    title: "Brand Designer",
    company: "Maze",
    location: "San Fransisco, USA",
    tags: [
      { label: "Full-Time", color: "full-time" },
      { label: "Marketing", color: "marketing" },
      { label: "Design", color: "design" },
    ],
  },
  {
    id: 5,
    logo: "/logos/terraform.png",
    logoAlt: "Terraform",
    logoBg: "bg-[#f0fdfa]",
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    tags: [
      { label: "Full-Time", color: "full-time" },
      { label: "Marketing", color: "marketing" },
      { label: "Design", color: "design" },
    ],
  },
  {
    id: 6,
    logo: "/logos/udacity.png",
    logoAlt: "Udacity",
    logoBg: "bg-[#eff6ff]",
    title: "Interactive Developer",
    company: "Udacity",
    location: "Hamburg, Germany",
    tags: [
      { label: "Full-Time", color: "full-time" },
      { label: "Marketing", color: "marketing" },
      { label: "Design", color: "design" },
    ],
  },
  {
    id: 7,
    logo: "/logos/packer.png",
    logoAlt: "Packer",
    logoBg: "bg-[#fff7ed]",
    title: "HR Manager",
    company: "Packer",
    location: "Lucern, Switzerland",
    tags: [
      { label: "Full-Time", color: "full-time" },
      { label: "Marketing", color: "marketing" },
      { label: "Design", color: "design" },
    ],
  },
  {
    id: 8,
    logo: "/logos/webflow.png",
    logoAlt: "Webflow",
    logoBg: "bg-[#eff6ff]",
    title: "HR Manager",
    company: "Webflow",
    location: "Lucern, Switzerland",
    tags: [
      { label: "Full-Time", color: "full-time" },
      { label: "Marketing", color: "marketing" },
      { label: "Design", color: "design" },
    ],
  },
];


export function LatestJobsOpen() {
  // Split into two columns for desktop
  const left = jobs.filter((_, i) => i % 2 === 0);
  const right = jobs.filter((_, i) => i % 2 !== 0);

  return (
    <section className="relative w-full py-10 sm:py-14 overflow-hidden bg-[#F8F8FD]">
      {/* Diagonal white cut at the bottom */}
      <div className="absolute -top-10 -left-5 w-32 h-16 bg-white rotate-[-25deg]" />
      <div className="absolute -bottom-7 -right-6 w-40 h-16 bg-white rotate-[-25deg]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        {/* Header */}
        <div className="">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="text-[32px] lg:text-[48px] font-semibold">
              Featured <span className="text-[#26A4FF]">Jobs Open</span>
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

        {/* Desktop: 2 columns */}
        <div className="hidden sm:grid sm:grid-cols-2 sm:gap-x-10 md:gap-x-6 divide-y-0 gap-y-4">
          <div className="divide-y divide-[#f1f1f1]">
            {left.map((job) => (
              <JobRow key={job.id} job={job} />
            ))}
          </div>
          <div className="divide-y divide-[#f1f1f1]">
            {right.map((job) => (
              <JobRow key={job.id} job={job} />
            ))}
          </div>
        </div>

        {/* Mobile: single column */}
        <div className="sm:hidden divide-y divide-[#f1f1f1]">
          {jobs.map((job) => (
            <JobRow key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

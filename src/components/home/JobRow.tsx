"use client";

import { Link } from "@/i18n/navigation";

export interface Tag {
  label: string;
  color: "full-time" | "marketing" | "design" | "developer" | "management";
}

export interface Job {
  id: string;
  logo?: string;
  logoAlt?: string;
  logoBg?: string;
  title: string;
  company: string;
  location: string;
  tags: Tag[];
  sponsored?: boolean;
  sponsorLogo?: string;
}

// ─── Tag color map ────────────────────────────────────────────────────────────
const tagStyles: Record<Tag["color"], string> = {
  "full-time": " bg-[#22c55e]/10 text-[#22c55e]",
  marketing: "bg-[#f59e0b]/10 text-[#f59e0b]",
  design: "bg-[#5a56e9]/10 text-[#5a56e9]",
  developer: "bg-[#06b6d4]/10 text-[#06b6d4]",
  management: "bg-[#f59e0b]/10 text-[#f59e0b]",
};

// ─── Single Job Row ───────────────────────────────────────────────────────────
export default function JobRow({ job }: { job: Job }) {
  return (
    <Link href={`/jobs/${job.id}`}>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 py-6 px-4 border-b border-[#f1f1f1] last:border-0 transition-colors cursor-pointer group bg-white gap-y-4 my-4">
      {/* Logo */}
      <div
        className={`relative shrink-0 h-12 md:h-16 w-12 md:w-16 rounded-xl  flex items-center justify-center overflow-hidden`}
      >
        <span className="text-xl font-extrabold text-[#5a56e9]">
          {job.company[0]}
        </span>
        {/* Swap above span for real logo:
        <Image src={job.logo} alt={job.logoAlt} fill className="object-contain p-2" />
        */}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-[20px] font-semibold group-hover:text-[#5a56e9] transition-colors">
            {job.title}
          </h3>

          {job.sponsored && (
            <div className="shrink-0 h-6 w-16 relative">
              <span className="text-[10px] font-bold text-[#ef4444] border border-[#ef4444] rounded px-1">
                semanik
              </span>
            </div>
          )}
        </div>

        <p className=" text-[#515B6F] ">
          {job.company} <span className="mx-1">•</span> {job.location}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-2">
          {job.tags.map((tag) => (
            <span
              key={tag.label}
              className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${tagStyles[tag.color]}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
      </div>
    </Link>
  );
}

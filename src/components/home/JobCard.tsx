"use client";

export interface Tag {
  label: string;
  color: "marketing" | "design" | "business" | "technology";
}

export interface FeaturedJob {
  id: number;
  logo: string;
  logoAlt: string;
  type: string;
  title: string;
  company: string;
  location: string;
  description: string;
  tags: Tag[];
}

const tagStyles: Record<Tag["color"], string> = {
  marketing: "bg-[#fff0f0] text-[#f26b6b]",
  design: "bg-[#f0f4ff] text-[#5a56e9]",
  business: "bg-[#f0fdf4] text-[#22c55e]",
  technology: "bg-[#fdf4ff] text-[#a855f7]",
};

function JobCard({ job }: { job: FeaturedJob }) {
  return (
    <article className="flex flex-col gap-3 border border-[#D6DDEB] p-5 hover:shadow-md transition-all duration-200 cursor-pointer min-w-[260px] sm:min-w-0 w-[260px] sm:w-auto flex-shrink-0 sm:flex-shrink ">
      {/* Top row: logo + badge */}
      <div className="flex items-center justify-between">
        <div className="relative h-10 w-10  flex items-center justify-center">
          {/* Fallback letter if no logo */}
          <span className="text-lg font-bold text-[#5a56e9]">
            {job.company[0]}
          </span>
          {/* Uncomment when you have real logos:
          <Image src={job.logo} alt={job.logoAlt} fill className="object-contain p-1" />
          */}
        </div>
        <span className=" border border-[#4640DE]/40 hover:bg-[#4640DE] px-3 py-1 text-xs font-medium text-[#4640DE] hover:text-white">
          {job.type}
        </span>
      </div>

      {/* Job info */}
      <div>
        <h3 className="text-[18px] font-semibold ">{job.title}</h3>
        <p className=" text-[#515B6F]">
          {job.company} <span className="mx-1">·</span> {job.location}
        </p>
      </div>

      <p className="text-xs text-[#7C8493] leading-relaxed line-clamp-2">
        {job.description.slice(0, 200)}...
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

export default JobCard;

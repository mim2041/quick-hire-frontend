"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { GoArrowRight } from "react-icons/go";
import JobCard, { type FeaturedJob } from "./JobCard";
import { jobsApi } from "@/core/api";
import type { ApiJob } from "@/core/api";
import { stripHtml } from "@/utils/utils";
import Loading from "@/components/common/Loading";

const CATEGORY_COLORS: Record<string, FeaturedJob["tags"][0]["color"]> = {
  Engineering: "technology",
  Design: "design",
  Marketing: "marketing",
  Business: "business",
  Technology: "technology",
  Administration: "business",
};

function mapApiJobToFeatured(job: ApiJob): FeaturedJob {
  const plainDesc = stripHtml(job.description);
  return {
    id: job._id,
    type: "Full Time",
    title: job.title,
    company: job.company,
    location: job.location,
    description:
      plainDesc.length > 200 ? `${plainDesc.slice(0, 200)}...` : plainDesc,
    tags: [
      { label: job.category, color: CATEGORY_COLORS[job.category] ?? "design" },
    ],
  };
}

export function FeaturedJobs() {
  const [jobs, setJobs] = useState<FeaturedJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    jobsApi
      .list({ limit: 8 })
      .then((res) => {
        if (cancelled) return;
        setJobs((res.data ?? []).map(mapApiJobToFeatured));
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err?.message ?? "Failed to load jobs");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <section className="w-full bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-7xl ">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="text-[32px] lg:text-[48px] font-semibold">
              Featured <span className="text-[#26A4FF]">Jobs</span>
            </h2>
          </div>
          <div className="flex justify-center py-12">
            <Loading />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-7xl ">
          <h2 className="text-[32px] lg:text-[48px] font-semibold mb-6">
            Featured <span className="text-[#26A4FF]">Jobs</span>
          </h2>
          <p className="text-[#6b7280]">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl ">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-[32px] lg:text-[48px] font-semibold">
            Featured <span className="text-[#26A4FF]">Jobs</span>
          </h2>
          <Link href="/jobs" className="hidden md:block">
            <span className="flex items-center justify-between gap-3 text-[#4640DE] font-semibold font-epilogue">
              Show all jobs
              <GoArrowRight />
            </span>
          </Link>
        </div>
      </div>

      {jobs.length === 0 ? (
        <div className="mx-auto max-w-7xl ">
          <p className="text-[#6b7280]">No featured jobs at the moment.</p>
        </div>
      ) : (
        <>
          <div
            className="sm:hidden px-4 ml-4 overflow-x-auto scrollbar-none"
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

          <div className="hidden sm:block mx-auto max-w-7xl ">
            <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-5">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </>
      )}

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

"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { GoArrowRight } from "react-icons/go";
import JobRow, { type Job } from "./JobRow";
import { jobsApi } from "@/core/api";
import type { ApiJob } from "@/core/api";
import Loading from "@/components/common/Loading";

const CATEGORY_COLORS: Record<string, Job["tags"][0]["color"]> = {
  Engineering: "developer",
  Design: "design",
  Marketing: "marketing",
  Business: "management",
  Technology: "developer",
  Administration: "management",
};

function mapApiJobToRow(job: ApiJob): Job {
  return {
    id: job._id,
    title: job.title,
    company: job.company,
    location: job.location,
    tags: [
      { label: "Full-Time", color: "full-time" },
      { label: job.category, color: CATEGORY_COLORS[job.category] ?? "design" },
    ],
  };
}

export function LatestJobsOpen() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    jobsApi
      .list({ limit: 8 })
      .then((res) => {
        if (cancelled) return;
        setJobs((res.data ?? []).map(mapApiJobToRow));
        console.log(res.data);
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
      <section className="relative w-full py-10 sm:py-14 overflow-hidden bg-[#F8F8FD]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
          <h2 className="text-[32px] lg:text-[48px] font-semibold mb-6 sm:mb-8">
            Featured <span className="text-[#26A4FF]">Jobs Open</span>
          </h2>
          <div className="flex justify-center py-12">
            <Loading />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative w-full py-10 sm:py-14 overflow-hidden bg-[#F8F8FD]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
          <h2 className="text-[32px] lg:text-[48px] font-semibold mb-6">
            Featured <span className="text-[#26A4FF]">Jobs Open</span>
          </h2>
          <p className="text-[#6b7280]">{error}</p>
        </div>
      </section>
    );
  }

  const left = jobs.filter((_, i) => i % 2 === 0);
  const right = jobs.filter((_, i) => i % 2 !== 0);

  return (
    <section className="relative w-full py-10 sm:py-14 overflow-hidden bg-[#F8F8FD]">
      <div className="absolute -top-10 -left-5 w-32 h-16 bg-white rotate-[-25deg]" />
      {/* <div className="absolute -bottom-7 -right-6 w-40 h-16 bg-white rotate-[-25deg]" /> */}
      <div className="hidden lg:block absolute -top-28 right-20 w-[400px] h-[192px] bg-transparent border-1 border-[#CCCCF5] rotate-[-25deg]" />
      <div className="hidden lg:block absolute -bottom-28 right-20 w-[770px] h-[319px] bg-transparent border-1 border-[#CCCCF5] rotate-[-25deg]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-[32px] lg:text-[48px] font-semibold">
            Latest <span className="text-[#26A4FF]">Jobs Open</span>
          </h2>
          <Link href="/jobs" className="hidden md:block">
            <span className="flex items-center justify-between gap-3 text-[#4640DE] font-semibold font-epilogue">
              Show all jobs
              <GoArrowRight />
            </span>
          </Link>
        </div>

        {jobs.length === 0 ? (
          <p className="text-[#6b7280]">No jobs open at the moment.</p>
        ) : (
          <>
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

            <div className="sm:hidden divide-y divide-[#f1f1f1]">
              {jobs.map((job) => (
                <JobRow key={job.id} job={job} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

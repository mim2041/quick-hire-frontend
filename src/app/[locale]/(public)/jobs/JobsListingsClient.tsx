"use client";

import { useState, useEffect, useCallback } from "react";
import { Link } from "@/i18n/navigation";
import { CiSearch } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { jobsApi } from "@/core/api";
import type { ApiJob } from "@/core/api";
import { cn } from "@/utils/utils";
import Loading from "@/components/common/Loading";

const CATEGORY_OPTIONS = [
  "All",
  "Engineering",
  "Design",
  "Administration",
  "Marketing",
  "Technology",
  "Business",
];
const LOCATION_OPTIONS = ["All"];

function getPlainTextDescription(description?: string) {
  if (!description) return "";

  return description
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function JobListingCard({ job }: { job: ApiJob }) {
  const plainDescription = getPlainTextDescription(job.description);

  return (
    <Link href={`/jobs/${job._id}`}>
      <article className="flex flex-col gap-3 border border-[#D6DDEB] p-5 rounded-lg hover:shadow-md transition-all duration-200 cursor-pointer bg-white">
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-[#5a56e9] w-10 h-10 flex items-center justify-center bg-[#f0f4ff] rounded">
            {job.company[0]}
          </span>
          <span className="border border-[#4640DE]/40 px-3 py-1 text-xs font-medium text-[#4640DE] rounded">
            {job.category}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#2e3a59]">{job.title}</h3>
          <p className="text-[#515B6F] text-sm">
            {job.company} <span className="mx-1">·</span> {job.location}
          </p>
        </div>
        <p className="text-sm text-[#7C8493] leading-relaxed line-clamp-2">
          {plainDescription || "No description available."}
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full px-3 py-1 text-xs font-medium bg-[#f0f4ff] text-[#5a56e9]">
            {job.category}
          </span>
        </div>
      </article>
    </Link>
  );
}

export function JobsListingsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  const [jobs, setJobs] = useState<ApiJob[]>([]);
  const [meta, setMeta] = useState<{
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const limit = 12;

  const fetchJobs = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await jobsApi.list({
        searchTerm: searchQuery || undefined,
        category: categoryFilter === "All" ? undefined : categoryFilter,
        location: locationFilter === "All" ? undefined : locationFilter,
        page,
        limit,
      });
      setJobs(res.data ?? []);
      setMeta(res.meta ?? null);
    } catch (err: unknown) {
      const message =
        err && typeof err === "object" && "message" in err
          ? String((err as { message: unknown }).message)
          : "Failed to load jobs";
      setError(message);
      setJobs([]);
    } finally {
      setLoading(false);
    }
  }, [searchQuery, categoryFilter, locationFilter, page, limit]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const total = meta?.total ?? 0;
  const totalPage = meta?.totalPage ?? 1;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#2e3a59] mb-2">
          Job Listings
        </h1>
        <p className="text-[#6b7280]">
          Find your dream job from our curated listings
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border border-[#D6DDEB] rounded-lg p-4 md:p-6 shadow-sm">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setPage(1);
            fetchJobs();
          }}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex flex-1 items-center gap-2 rounded-lg border border-[#D6DDEB] px-4 py-3 focus-within:ring-2 focus-within:ring-[#5a56e9] focus-within:border-transparent">
              <CiSearch className="h-5 w-5 shrink-0 text-[#6b7280]" />
              <input
                type="text"
                placeholder="Job title or keyword"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-[#2e3a59] placeholder:text-[#9ca3af] focus:outline-none text-sm md:text-base"
              />
            </div>
            <div className="relative flex-1">
              <button
                type="button"
                onClick={() => {
                  setShowCategoryDropdown(!showCategoryDropdown);
                  setShowLocationDropdown(false);
                }}
                className="w-full flex items-center justify-between gap-2 rounded-lg border border-[#D6DDEB] px-4 py-3 text-left text-[#2e3a59] hover:border-[#5a56e9] transition-colors"
              >
                <span className="text-sm md:text-base truncate">
                  {categoryFilter}
                </span>
                <MdKeyboardArrowDown
                  className={cn(
                    "h-5 w-5 text-[#6b7280] transition-transform",
                    showCategoryDropdown && "rotate-180",
                  )}
                />
              </button>
              {showCategoryDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#D6DDEB] rounded-lg shadow-lg z-10 py-2 max-h-48 overflow-y-auto">
                  {CATEGORY_OPTIONS.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setCategoryFilter(cat);
                        setShowCategoryDropdown(false);
                        setPage(1);
                      }}
                      className={cn(
                        "w-full px-4 py-2 text-left text-sm hover:bg-[#f5f7fa]",
                        categoryFilter === cat &&
                          "bg-[#f0f4ff] text-[#4640DE] font-medium",
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="relative flex-1">
              <button
                type="button"
                onClick={() => {
                  setShowLocationDropdown(!showLocationDropdown);
                  setShowCategoryDropdown(false);
                }}
                className="w-full flex items-center justify-between gap-2 rounded-lg border border-[#D6DDEB] px-4 py-3 text-left text-[#2e3a59] hover:border-[#5a56e9] transition-colors"
              >
                <LuMapPin className="h-5 w-5 shrink-0 text-[#6b7280]" />
                <span className="flex-1 text-sm md:text-base truncate text-left">
                  {locationFilter}
                </span>
                <MdKeyboardArrowDown
                  className={cn(
                    "h-5 w-5 text-[#6b7280] transition-transform shrink-0",
                    showLocationDropdown && "rotate-180",
                  )}
                />
              </button>
              {showLocationDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#D6DDEB] rounded-lg shadow-lg z-10 py-2 max-h-48 overflow-y-auto">
                  {LOCATION_OPTIONS.map((loc) => (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => {
                        setLocationFilter(loc);
                        setShowLocationDropdown(false);
                        setPage(1);
                      }}
                      className={cn(
                        "w-full px-4 py-2 text-left text-sm hover:bg-[#f5f7fa]",
                        locationFilter === loc &&
                          "bg-[#f0f4ff] text-[#4640DE] font-medium",
                      )}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-[#4640DE] text-white font-semibold hover:bg-[#4844c7] transition-colors text-sm"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Results */}
      <div>
        {loading ? (
          <Loading />
        ) : error ? (
          <div className="text-center py-16 bg-red-50 rounded-lg border border-red-200">
            <p className="text-red-700 font-medium">{error}</p>
            <p className="text-sm text-red-600 mt-2">
              Check that the API is running at{" "}
              {process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:9001"}
            </p>
            <button
              type="button"
              onClick={() => fetchJobs()}
              className="mt-4 px-4 py-2 bg-[#4640DE] text-white rounded-lg hover:bg-[#4844c7]"
            >
              Retry
            </button>
          </div>
        ) : (
          <>
            <p className="text-sm text-[#6b7280] mb-4">
              {total} job{total !== 1 ? "s" : ""} found
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => (
                <JobListingCard key={job._id} job={job} />
              ))}
            </div>
            {jobs.length === 0 && (
              <div className="text-center py-16 bg-[#f5f7fa] rounded-lg">
                <p className="text-[#6b7280] text-lg">
                  No jobs match your filters.
                </p>
                <p className="text-sm text-[#9ca3af] mt-2">
                  Try adjusting your search or filters.
                </p>
              </div>
            )}
            {totalPage > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                <button
                  type="button"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="px-4 py-2 rounded-lg border border-[#D6DDEB] disabled:opacity-50 hover:bg-[#f5f7fa]"
                >
                  Previous
                </button>
                <span className="px-4 py-2 text-[#6b7280]">
                  Page {page} of {totalPage}
                </span>
                <button
                  type="button"
                  disabled={page >= totalPage}
                  onClick={() => setPage((p) => p + 1)}
                  className="px-4 py-2 rounded-lg border border-[#D6DDEB] disabled:opacity-50 hover:bg-[#f5f7fa]"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

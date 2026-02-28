"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function HeroSearch() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("Florence, Italy");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (keyword) params.set("q", keyword);
    if (location) params.set("location", location);
    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="flex flex-col gap-3 rounded-xl bg-white p-3 shadow-sm sm:flex-row sm:items-center sm:gap-2 sm:p-2">
        <div className="flex flex-1 items-center gap-2 rounded-lg border border-[#e5e7eb] bg-white px-4 py-3 sm:border-0 sm:bg-transparent sm:py-2">
          <svg className="h-5 w-5 shrink-0 text-[#6b7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Job title or keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="min-w-0 flex-1 bg-transparent text-[#2e3a59] placeholder:text-[#9ca3af] focus:outline-none"
          />
        </div>
        <div className="flex flex-1 items-center gap-2 rounded-lg border border-[#e5e7eb] bg-white px-4 py-3 sm:border-0 sm:bg-transparent sm:py-2">
          <svg className="h-5 w-5 shrink-0 text-[#6b7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="min-w-0 flex-1 bg-transparent text-[#2e3a59] placeholder:text-[#9ca3af] focus:outline-none"
          />
          <svg className="h-4 w-4 shrink-0 text-[#6b7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-[#5a56e9] px-6 py-3 font-medium text-white hover:bg-[#4844c7] transition-colors sm:w-auto"
        >
          Search my job
        </button>
      </div>
      <p className="mt-3 text-sm text-[#6b7280]">
        Popular:{" "}
        <span className="text-[#2e3a59]">
          UI Designer, UX Researcher, Android, Admin
        </span>
      </p>
    </form>
  );
}

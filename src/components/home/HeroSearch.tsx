"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";

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
      <div className="flex flex-col gap-3 w-full bg-white  sm:flex-row sm:items-center sm:gap-2 sm:p-2 z-10">
        <div className="flex flex-1 items-center gap-2 rounded-lg  bg-white px-4 py-3 sm:border-0 sm:bg-transparent sm:py-2">
          <CiSearch className="h-5 w-5 shrink-0 font-semibold" />
          <input
            type="text"
            placeholder="Job title or keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="border-b border-[#D6DDEB] py-3 flex-1 bg-transparent text-[#2e3a59] placeholder:text-[#D6DDEB] focus:outline-none"
          />
        </div>
        <div className="flex flex-1 items-center gap-2 rounded-lg bg-white px-4 py-3 sm:border-0 sm:bg-transparent sm:py-2">
          <LuMapPin />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="min-w-0 border-b border-[#D6DDEB] py-3 flex-1 bg-transparent text-[#25324B] placeholder:text-[#9ca3af] focus:outline-none"
          />
          <MdKeyboardArrowDown className="text-[#25324B] font-bold text-2xl" />
        </div>
        <button
          type="submit"
          className="w-full bg-[#5a56e9] px-6 py-3 font-medium text-white hover:bg-[#4844c7] transition-colors sm:w-auto truncate"
        >
          Search my job
        </button>
      </div>
      <p className="mt-3 font-epilogue text-[#6b7280]">
        Popular: <br className="md:hidden" />
        <span className="text-[#2e3a59]">
          UI Designer, UX Researcher, Android, Admin
        </span>
      </p>
    </form>
  );
}

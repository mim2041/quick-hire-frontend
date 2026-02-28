"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import logo from "@/assets/logos/Logo.svg";

const navLinks = [
  { href: "/jobs", labelKey: "navJobs" },
  { href: "/companies", labelKey: "navCompanies" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky w-full top-0 z-50 bg-transparent">
      <nav className="mx-auto flex max-w-7xl items-center justify-between  py-4 ">
        <div className="flex items-center gap-12">
          <Link href="/">
            <Image src={logo} alt="QuickHire" width={120} height={120} />
          </Link>
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#4640DE] font-medium text-[#515B6F] hover:text-[#5a56e9] transition-colors"
              >
                {link.href === "/jobs" ? "Find Jobs" : "Browse Companies"}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex md:items-center md:gap-4">
          <Link
            href="/login"
            className="text-[#4640DE] font-semibold hover:underline px-4"
          >
            Login
          </Link>
          <hr className="h-10 w-px bg-[#E5E7EB]" />
          <Link
            href="/signup"
            className="bg-[#4640DE] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#4844c7] transition-colors rounded"
          >
            Sign Up
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden rounded-lg p-2 text-[#2e3a59] hover:bg-white/50 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative h-5 w-6 flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full rounded bg-[#2e3a59] transition-all duration-300 origin-center ${
                mobileMenuOpen ? "rotate-45 translate-y-[9px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full rounded bg-[#2e3a59] transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full rounded bg-[#2e3a59] transition-all duration-300 origin-center ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[11px]" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      <div
        className={`md:hidden fixed inset-0 top-[64px] bg-black/30 transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`md:hidden fixed top-[64px] right-0 h-[calc(100vh-64px)] w-[60%] bg-[#f5f7fa] shadow-2xl transition-transform duration-300 ease-in-out z-50 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-1 text-base text-[#515B6F] font-medium hover:text-[#5a56e9] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.href === "/jobs" ? "Find Jobs" : "Browse Companies"}
            </Link>
          ))}
          <div className="flex gap-3 pt-6">
            <Link
              href="/login"
              className="text-center py-2.5 px-3 text-[#4640DE] font-semibold border border-[#5a56e9] hover:bg-[#5a56e9] w-full hover:text-white transition-colors rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="text-center bg-[#4640DE] px-3 w-full py-2.5 font-semibold text-white hover:bg-[#4844c7] transition-colors rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

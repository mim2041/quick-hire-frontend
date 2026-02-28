"use client";

import { useState } from "react";
import Link from "next/link";

// Social icon components (inline SVG)
function FacebookIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
    </svg>
  );
}
function GlobeIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  );
}

const socialLinks = [
  { icon: <FacebookIcon />, href: "#", label: "Facebook" },
  { icon: <InstagramIcon />, href: "#", label: "Instagram" },
  { icon: <GlobeIcon />, href: "#", label: "Website" },
  { icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
  { icon: <TwitterIcon />, href: "#", label: "Twitter" },
];

const aboutLinks = [
  { label: "Companies", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Advice", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const resourceLinks = [
  { label: "Help Docs", href: "#" },
  { label: "Guide", href: "#" },
  { label: "Updates", href: "#" },
  { label: "Contact Us", href: "#" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="w-full bg-[#202430] text-white">
      {/* Main footer content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-[#5a56e9] flex items-center justify-center">
                <svg
                  className="h-4 w-4 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <span className="text-base font-extrabold tracking-tight">
                QuickHire
              </span>
            </div>
            <p className="text-sm text-[#9ca3af] leading-relaxed max-w-[200px]">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

          {/* Col 2: About */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">About</h4>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9ca3af] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9ca3af] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-sm font-bold text-white mb-2">
              Get job notifications
            </h4>
            <p className="text-sm text-[#9ca3af] mb-4 leading-relaxed">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            {/* Email input + button */}
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-lg bg-white px-3 py-2.5 text-sm text-[#1e2d4f] placeholder:text-[#9ca3af] outline-none focus:ring-2 focus:ring-[#5a56e9]"
              />
              <button
                type="button"
                className="rounded-lg bg-[#5a56e9] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#4844c7] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#2e3347]" />

      {/* Bottom bar */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#6b7280] order-2 sm:order-1">
          2021 © QuickHire. All rights reserved.
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-3 order-1 sm:order-2">
          {socialLinks.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="h-8 w-8 rounded-full bg-[#2e3347] flex items-center justify-center text-[#9ca3af] hover:bg-[#5a56e9] hover:text-white transition-all duration-200"
            >
              {s.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import logo from "@/assets/logos/Logo 2.svg";
import { RiFacebookLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { LuGlobe } from "react-icons/lu";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const socialLinks = [
  { icon: <RiFacebookLine />, href: "#", label: "Facebook" },
  { icon: <IoLogoInstagram />, href: "#", label: "Instagram" },
  { icon: <LuGlobe />, href: "#", label: "Website" },
  { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
  { icon: <FaTwitter />, href: "#", label: "Twitter" },
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row items-start gap-10 justify-between">
          <div className="w-full lg:w-1/3">
            <div className="flex items-center gap-2 mb-4">
              <Image src={logo} alt="QuickHire" width={120} height={120} />
            </div>
            <p className="text-sm text-[#9ca3af] leading-relaxed max-w-[280px]">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

          <div className="flex items-start justify-between lg:justify-around w-full lg:w-1/3">
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
          </div>

          <div className="w-full lg:w-1/3">
            <h4 className="text-sm font-bold text-white mb-2">
              Get job notifications
            </h4>
            <p className="text-sm text-[#9ca3af] mb-4 leading-relaxed">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white px-3 py-2.5 text-sm text-[#1e2d4f] placeholder:text-[#9ca3af] outline-none focus:ring-2 focus:ring-[#5a56e9] rounded"
              />
              <button
                type="button"
                className="bg-[#4640DE] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#4844c7] transition-colors whitespace-nowrap max-w-[150px] rounded"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#2e3347]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#6b7280] order-2 sm:order-1">
          2021 © QuickHire. All rights reserved.
        </p>
        <div className="flex items-center gap-3 order-1 sm:order-2">
          {socialLinks.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="h-8 w-8 rounded-full bg-[#2e3347] flex items-center justify-center text-[#9ca3af] hover:bg-[#5a56e9] hover:text-white transition-all duration-200 text-white"
            >
              {s.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

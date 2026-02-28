"use client";

import Image from "next/image";
import dashboardImg from "@/assets/images/dashboard.svg";

export function PostJobsBanner() {
  return (
    <section className="w-full bg-[#4640DE] relative overflow-hidden max-w-7xl mx-auto p-0 md:p-8 lg:p-12">
      {/* Diagonal white cut at the bottom */}
      <div className="absolute -top-10 -left-5 w-32 h-16 bg-white rotate-[-25deg]" />
      <div className="absolute -bottom-7 -right-6 w-40 h-16 bg-white rotate-[-25deg]" />

      <div className=" md:px-8 py-16 md:py-6 flex flex-col lg:flex-row items-center gap-6 lg:gap-12 relative z-10">
        {/* Left: Text */}
        <div className="w-full lg:w-[38%] text-white flex-shrink-0 px-4 md:px-0">
          <h2 className=" text-[32px] lg:text-[48px] font-extrabold leading-tight text-center md:text-start">
            Start posting <br className="hidden md:block" />
            jobs today
          </h2>
          <p className="mt-3 text-blue-200 text-center md:text-start">
            Start posting jobs for only $10.
          </p>
          <button className="mt-5 inline-block border border-[#4640DE] border-white text-[#4640DE] font-bold px-6 py-2.5 bg-white hover:text-white hover:border-2 transition-colors duration-200 hover:bg-[#4640DE] w-full">
            Sign Up For Free
          </button>
        </div>

        {/* Right: Dashboard image */}
        <div className="w-full lg:flex-1 flex justify-center lg:justify-end relative ml-8 md:ml-0">
          <div className="md:absolute -top-28 -right-2 w-full max-w-[540px] aspect-[15/10] md:aspect-[20/12] overflow-hidden shadow-2xl ml-4 md:pr-0">
            <Image
              src={dashboardImg}
              alt="QuickHire Dashboard"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

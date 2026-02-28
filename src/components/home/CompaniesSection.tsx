const companies = [
  { name: "Vodafone", logo: "/companies/vodafone.svg" },
  { name: "Intel", logo: "/companies/intel.svg" },
  { name: "Tesla", logo: "/companies/tesla.svg" },
  { name: "AMD", logo: "/companies/amd.svg" },
  { name: "Talkit", logo: "/companies/talkit.svg" },
];

export function CompaniesSection() {
  return (
    <section className="border-t border-[#e5e7eb] bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm font-medium text-[#9ca3af]">
          Companies we helped grow
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex h-10 items-center justify-center text-[#9ca3af] font-semibold text-lg"
              title={company.name}
            >
              {company.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

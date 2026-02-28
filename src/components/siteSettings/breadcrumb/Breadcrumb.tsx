"use client";

import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { Paragraph } from "@/components/ui";
import { cn } from "@/utils/utils";

export interface BreadcrumbDirection {
  label: string;
  link: string;
}

interface BreadcrumbProps {
  directions: BreadcrumbDirection[];
}

export default function Breadcrumb({ directions }: BreadcrumbProps) {
  const pathname = usePathname();
  const normalizedPath = pathname !== "/" ? pathname.replace(/\/$/, "") : "/";
  const pathWithoutQuery = normalizedPath.split("?")[0];

  let activeIndex = -1;
  directions.forEach((dir, index) => {
    const normalizedLink =
      dir.link !== "/" ? dir.link.replace(/\/$/, "").split("?")[0] : "/";
    if (
      pathWithoutQuery === normalizedLink ||
      pathWithoutQuery.startsWith(normalizedLink + "/")
    ) {
      activeIndex = index;
    }
  });

  return (
    <nav
      className="mb-6 flex items-center gap-2 text-[#4640DE] flex-wrap max-w-7xl mx-auto"
      aria-label="Breadcrumb"
    >
      {directions.map((dir, index) => {
        const isActive = index === activeIndex;
        return (
          <span key={index} className="inline-flex items-center gap-2">
            <Link href={dir.link}>
              <Paragraph
                size="sm"
                className={cn(
                  "inline",
                  isActive
                    ? "font-semibold text-[#4640DE]"
                    : "text-[#6b7280] hover:text-[#4640DE]",
                )}
              >
                {dir.label}
              </Paragraph>
            </Link>
            {index < directions.length - 1 && (
              <span className="text-[#9ca3af] select-none" aria-hidden>
                /
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}

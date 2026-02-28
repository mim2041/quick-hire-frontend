import React from "react";
import { cn } from "@/utils/utils";

export interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  spacing?: "none" | "sm" | "md" | "lg";
  background?: "white" | "gray" | "transparent";
  border?: boolean;
}

export default function SectionWrapper({
  children,
  className,
  spacing = "md",
  background = "white",
  border = false,
}: SectionWrapperProps) {
  const spacingClasses = {
    none: "",
    sm: "my-4 lg:my-6",
    md: "my-6 lg:my-10",
    lg: "my-8 lg:my-12",
  };

  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-[#F8F8FD]",
    transparent: "bg-transparent",
  };

  return (
    <section
      className={cn(
        spacingClasses[spacing],
        backgroundClasses[background],
        border && "border border-[#E5E7EB]",
        className,
      )}
    >
      {children}
    </section>
  );
}

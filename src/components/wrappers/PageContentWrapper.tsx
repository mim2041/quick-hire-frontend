import React from "react";
import { cn } from "@/utils/utils";
import Breadcrumb from "../siteSettings/breadcrumb/Breadcrumb";

export interface BreadcrumbDirection {
  label: string;
  link: string;
}

export interface PageContentWrapperProps {
  children: React.ReactNode;
  directions?: BreadcrumbDirection[];
  className?: string;
  spacing?: "none" | "sm" | "md" | "lg";
}

export default function PageContentWrapper({
  children,
  directions,
  className,
  spacing = "none",
}: PageContentWrapperProps) {
  const spacingClasses = {
    none: "",
    sm: "mt-10",
    md: "mt-20",
    lg: "mt-24",
  };

  return (
    <div className={cn(spacingClasses[spacing], className)}>
      {directions && directions.length > 0 && (
        <Breadcrumb directions={directions} />
      )}
      {children}
    </div>
  );
}

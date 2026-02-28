import React from "react";
import { cn } from "@/utils/utils";

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "xs" | "sm" | "base" | "lg";
  weight?: "normal" | "medium" | "semibold";
  color?: "default" | "muted" | "light";
}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  (
    {
      size = "base",
      weight = "normal",
      color = "default",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const sizeClasses = {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
    };

    const weightClasses = {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
    };

    const colorClasses = {
      default: "text-[#2e3a59]",
      muted: "text-[#6b7280]",
      light: "text-[#9ca3af]",
    };

    return (
      <p
        ref={ref}
        className={cn(
          sizeClasses[size],
          weightClasses[weight],
          colorClasses[color],
          "leading-relaxed",
          className,
        )}
        {...props}
      >
        {children}
      </p>
    );
  },
);

Paragraph.displayName = "Paragraph";

export default Paragraph;

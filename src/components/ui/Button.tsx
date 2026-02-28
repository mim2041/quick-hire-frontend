import React from "react";
import { cn } from "@/utils/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5a56e9] disabled:opacity-50 disabled:pointer-events-none rounded";

    const variantClasses = {
      primary:
        "bg-[#4640DE] text-white hover:bg-[#4844c7] border border-[#4640DE]",
      secondary: "bg-white text-[#4640DE] border border-[#4640DE] hover:bg-[#f5f7fa]",
      outline:
        "border border-[#D6DDEB] bg-transparent text-[#2e3a59] hover:border-[#5a56e9] hover:text-[#5a56e9]",
      ghost: "bg-transparent text-[#515B6F] hover:bg-[#f5f7fa]",
    };

    const sizeClasses = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-5 py-2.5 text-sm",
      lg: "px-6 py-3 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && "w-full",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;

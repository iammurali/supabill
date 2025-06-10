"use client";

import { cn } from "~/lib/utils";
import type { HTMLAttributes } from "react";
import { forwardRef } from "react";

interface ShineBorderProps extends HTMLAttributes<HTMLDivElement> {
  color?: string;
  duration?: number;
  borderWidth?: number;
  className?: string;
  children: React.ReactNode;
}

export const ShineBorder = forwardRef<HTMLDivElement, ShineBorderProps>(
  (
    {
      color = "#9333ea",
      duration = 3,
      borderWidth = 2,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-xl p-[3px]",
          className
        )}
        style={{
          background: `linear-gradient(90deg, ${color} 0%, #ec4899 25%, ${color} 50%, #ec4899 75%, ${color} 100%)`,
          backgroundSize: "200% auto",
          animation: `shine ${duration}s linear infinite`,
          boxShadow: `0 0 20px ${color}33`,
        }}
        {...props}
      >
        <div className="z-9999">
          {children}
        </div>
        <style jsx global>
          {`
            @keyframes shine {
              to {
                background-position: 200% center;
              }
            }
          `}
        </style>
      </div>
    );
  }
);

ShineBorder.displayName = "ShineBorder";

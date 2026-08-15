import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  outerColor?: string;
  innerColor?: string;
}

export function HumNikahLogo({
  className = "",
  size = 40,
  outerColor = "currentColor",
  innerColor = "currentColor",
}: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Outer Heart */}
      <path
        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
        stroke={outerColor}
      />
      {/* Inner Small Heart - Perfectly Centered */}
      <path
        d="M12 7.2a2 2 0 0 1 4 0c0 1.4-1.8 3-4 5.2-2.2-2.2-4-3.8-4-5.2a2 2 0 0 1 4 0Z"
        stroke={innerColor}
        fill="none"
         transform="translate(0 2.5)"
      />
    </svg>
  );
}

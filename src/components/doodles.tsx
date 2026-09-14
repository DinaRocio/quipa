import React from "react";

interface DoodleProps {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

export const UnderlineDoodle = ({ className, color = "currentColor", width = 130, height = 14 }: DoodleProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 130 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M2 9.5C24 4 88 2 128 8.5"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const CircleDoodle = ({ className, color = "currentColor", width = 64, height = 48 }: DoodleProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 64 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M33 3C15 2 3 12 4 24c1 13 18 21 33 19 15-2 25-13 22-23C56 10 43 4 30 5"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

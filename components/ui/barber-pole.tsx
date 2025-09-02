import React from "react"

type Props = React.SVGProps<SVGSVGElement> & { className?: string }

export default function BarberPole({ className, ...props }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="9" y="2" width="6" height="20" rx="3" />
      <g>
        <path d="M10 3l4 2" stroke="#e11d48" />
        <path d="M10 6l4 2" stroke="#06b6d4" />
        <path d="M10 9l4 2" stroke="#e11d48" />
        <path d="M10 12l4 2" stroke="#06b6d4" />
        <path d="M10 15l4 2" stroke="#e11d48" />
        <path d="M10 18l4 2" stroke="#06b6d4" />
      </g>
    </svg>
  )
}

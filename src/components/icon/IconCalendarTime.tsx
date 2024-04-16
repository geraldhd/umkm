// icon:calendar-time | Tabler Icons https://tablericons.com/ | Csaba Kissi
import * as React from "react";

function IconCalendarTime(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="20px"
      width="20px"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M11.795 21H5a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v4" />
      <path d="M22 18 A4 4 0 0 1 18 22 A4 4 0 0 1 14 18 A4 4 0 0 1 22 18 z" />
      <path d="M15 3v4M7 3v4M3 11h16M18 16.496V18l1 1" />
    </svg>
  );
}

export default IconCalendarTime;

import { HTMLAttributes } from 'react';

export const ArrowDown = ({ className }: HTMLAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M15.8307 7.08398L9.9974 12.9173L4.16406 7.08398"
        stroke="#667085"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

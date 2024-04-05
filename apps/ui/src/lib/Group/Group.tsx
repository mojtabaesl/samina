import type { HTMLAttributes } from 'react';

interface GroupProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Group = ({ children, className }: GroupProps) => {
  return <div className={`flex flex-row ${className}`}>{children}</div>;
};

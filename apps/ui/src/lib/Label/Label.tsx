import { HTMLAttributes } from 'react';

interface LabelProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const Label = ({ children, className }: LabelProps) => {
  return (
    <p className={`text-sm font-semibold text-secondary ${className}`}>
      {children}
    </p>
  );
};

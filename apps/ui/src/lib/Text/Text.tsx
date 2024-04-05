import { HTMLAttributes } from 'react';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const Text = ({ children, className }: TextProps) => {
  return <p className={`text-base ${className}`}>{children}</p>;
};

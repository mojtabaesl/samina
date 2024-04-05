import type { ReactNode } from 'react';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Stack = ({ className, children, ...rest }: StackProps) => {
  return (
    <div className={`flex flex-col ${className}`} {...rest}>
      {children}
    </div>
  );
};

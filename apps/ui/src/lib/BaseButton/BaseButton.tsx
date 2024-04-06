import { HTMLAttributes } from 'react';

export interface BaseButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const BaseButton = ({
  variant = 'primary',
  className,
  ...rest
}: BaseButtonProps) => {
  return (
    <button
      className={`
      ${
        variant === 'primary'
          ? 'bg-brand-600 hover:bg-brand-700 text-base-white'
          : 'border border-gray-300 hover:bg-gray-50 text-gray-500'
      }
       flex max-w-max rounded-lg transition duration-200 gap-2 text-sm items-center
       ${className}`}
      {...rest}
    />
  );
};

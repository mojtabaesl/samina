import React from 'react';

import { merge } from '../../utils';
import { FormFieldError, FormFieldLabel } from '../FormFieldUtils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  withAsterisk?: boolean;
  id: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, label, id, withAsterisk, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label ? (
          <FormFieldLabel htmlFor={id} withAsterisk={withAsterisk}>
            {label}
          </FormFieldLabel>
        ) : null}

        <input
          className={merge(
            'flex h-10 w-full rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-brand-200 focus-visible:ring focus-visible:ring-ring ring-brand-100 disabled:cursor-not-allowed disabled:opacity-50',
            error ? 'focus-visible:ring-red-500 border-red-400' : null,
            className
          )}
          ref={ref}
          {...props}
        />
        {error ? <FormFieldError>{error}</FormFieldError> : null}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };

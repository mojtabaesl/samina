import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

import { merge } from '../../utils';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={merge(
      'peer h-5 w-5 shrink-0 rounded-[4px] border border-gray-300 ring-offset-background focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-ring focus-visible:border-brand-600 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-brand-100 data-[state=checked]:border-brand-600 data-[state=checked]:text-primary-foreground',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={merge('flex items-center justify-center text-brand-600')}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };

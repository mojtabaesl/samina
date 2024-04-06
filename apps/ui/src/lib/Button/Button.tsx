import { BaseButton, BaseButtonProps } from '../BaseButton';

type ButtonProps = BaseButtonProps;

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <BaseButton className="px-3 py-2" {...rest}>
      {children}
    </BaseButton>
  );
};

import { BaseButton, BaseButtonProps } from '../BaseButton';

type IconButtonProps = BaseButtonProps;

export const IconButton = ({ children, ...rest }: IconButtonProps) => {
  return (
    <BaseButton className="p-[10px] grow-0" {...rest}>
      {children}
    </BaseButton>
  );
};

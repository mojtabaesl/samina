import { merge } from '../../utils';
import { BaseButton, BaseButtonProps } from '../BaseButton';

type IconButtonProps = BaseButtonProps;

export const IconButton = ({
  children,
  className,
  ...rest
}: IconButtonProps) => {
  return (
    <BaseButton className={merge('p-[10px] grow-0', className)} {...rest}>
      {children}
    </BaseButton>
  );
};

import { Text } from '../Text';
import { merge } from '../../utils';

interface TableCellDataProps {
  children: React.ReactNode;
  maxWidth?: number;
}

export const TableCellData = ({ maxWidth, children }: TableCellDataProps) => {
  return (
    <Text
      className={merge(
        maxWidth ? `w-[${maxWidth}px]` : '',
        'truncate text-secondary font-normal'
      )}
    >
      {children}
    </Text>
  );
};

import { NavLink as Link } from 'react-router-dom';
import { Group } from '../Group';
import { ArrowDown } from '../Icons';
import { Text } from '../Text';
import type { SubLinkProps } from './SubLink';
import { SubLinks } from './SubLinks';

export interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  children?: SubLinkProps[];
  showIsOpenIndicator?: boolean;
  leftContent?: React.ReactNode;
}

export const NavLink = ({
  to,
  icon,
  label,
  children,
  isActive = false,
  showIsOpenIndicator = true,
  leftContent,
}: NavLinkProps) => {
  return (
    <li className="list-none">
      <Link
        to={to}
        className="flex px-3 py-2 justify-between rounded-lg hover:bg-gray-50 cursor-pointer transition ease-in-out duration-150"
      >
        <Group className="gap-3 justify-between">
          {icon}
          <Text className="text-label font-semibold">{label}</Text>
        </Group>

        {leftContent ? (
          leftContent
        ) : showIsOpenIndicator ? (
          <ArrowDown
            className={
              isActive ? 'rotate-180 transition ease-in-out duration-150' : ''
            }
          />
        ) : null}
      </Link>
      <SubLinks isOpen={isActive} children={children} />
    </li>
  );
};

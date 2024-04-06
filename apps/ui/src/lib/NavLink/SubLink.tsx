import { NavLink } from 'react-router-dom';
import { Text } from '../Text';

export interface SubLinkProps {
  to: string;
  label: string;
}

export const SubLink = ({ to, label }: SubLinkProps) => {
  return (
    <li className="list-none">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex pr-6 pl-9 py-2 justify-between cursor-pointer ${
            isActive ? 'text-brand-600' : ''
          }`
        }
      >
        <Text className="font-semibold">{label}</Text>
      </NavLink>
    </li>
  );
};

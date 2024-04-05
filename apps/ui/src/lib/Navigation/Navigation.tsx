import { useLocation } from 'react-router-dom';
import { NavLink } from '../NavLink';
import type { NavLinkProps } from '../NavLink';
import { Stack } from '../Stack';

export interface NavigationProps {
  links: Omit<NavLinkProps, 'isActive'>[];
}

export const Navigation = ({ links }: NavigationProps) => {
  const { pathname } = useLocation();
  return (
    <nav>
      <Stack className="gap-1">
        {links.map(({ to, label, ...rest }) => (
          <NavLink
            isActive={to ? pathname.startsWith(to) : false}
            to={to}
            label={label}
            key={to + '-' + label}
            {...rest}
          />
        ))}
      </Stack>
    </nav>
  );
};

import { Stack } from '../Stack';
import { SubLink, SubLinkProps } from './SubLink';

interface SubLinksProps {
  isOpen: boolean;
  children?: SubLinkProps[];
}

export const SubLinks = ({ children, isOpen = false }: SubLinksProps) => {
  return (
    <ul>
      <Stack
        className={`transition-all duration-75 overflow-hidden ${
          isOpen ? 'h-full' : 'h-0'
        }`}
      >
        {children?.map(({ to, label }) => {
          return <SubLink to={to} label={label} key={to + label} />;
        })}
      </Stack>
    </ul>
  );
};

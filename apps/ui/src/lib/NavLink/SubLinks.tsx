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
        className={`overflow-hidden gap-1 border-r border-gray-200 mr-6 ${
          isOpen ? 'animate-open' : 'animate-close'
        }`}
      >
        {children?.map(({ to, label }) => {
          return <SubLink to={to} label={label} key={to + label} />;
        })}
      </Stack>
    </ul>
  );
};

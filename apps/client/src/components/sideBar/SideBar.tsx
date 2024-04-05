import { BaseSideBar, Group, Heading, Logo } from '@samina/ui';

export const SideBar = () => {
  return (
    <BaseSideBar>
      <Group className="gap-3">
        <Heading level={5}>ثمینا</Heading>
        <Logo />
      </Group>
    </BaseSideBar>
  );
};

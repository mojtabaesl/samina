import { BaseSideBar, Group, Heading, Logo, Stack } from '@samina/ui';
import { SwitchCompany } from '../SwitchCompany';

export const SideBar = () => {
  return (
    <BaseSideBar>
      <Stack className="gap-6">
        <Group className="gap-3 items-center">
          <Logo />
          <Heading level={5}>ثمینا</Heading>
        </Group>
        <SwitchCompany />
      </Stack>
    </BaseSideBar>
  );
};

import { Text, AppleLogo, BankCardSwap, Group } from '@samina/ui';

export const SwitchCompany = () => {
  return (
    <Group className="py-3 pr-3 pl-[22px] bg-gray-50 items-center rounded-lg justify-between cursor-pointer">
      <Group className="gap-3 items-center">
        <AppleLogo />
        <Text className="font-semibold ">شرکت اپل</Text>
      </Group>
      <BankCardSwap />
    </Group>
  );
};

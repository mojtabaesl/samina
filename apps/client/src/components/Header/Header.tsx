import {
  Text,
  Clock,
  Group,
  Calendar,
  Calendar2,
  ArrowDown,
  SmartPhone,
  Ringtone,
  Avatar,
  Stack,
} from '@samina/ui';
import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs';

export const Header = () => {
  return (
    <Stack className="gap-3">
      <Group className="h-[110px] items-center justify-between border-b border-gray-200 px-8">
        <Group className="gap-2">
          <Group className="gap-3 px-3 py-2">
            <Clock />
            <Text className="font-semibold text-label">ساعت ۱۳:۳۱</Text>
          </Group>
          <Group className="gap-3 px-3 py-2">
            <Calendar />
            <Text className="font-semibold text-label">
              پنجشنبه، ۲۷ مرداد ۱۴۰۲
            </Text>
          </Group>
        </Group>
        <Group className="gap-8">
          <Group className="gap-3 px-2 py-3 bg-gray-50 rounded-lg items-center font-semibold cursor-pointer">
            <Calendar2 />
            <Text>سالی مالی ۱۴۰۲</Text>
            <ArrowDown />
          </Group>
          <Group className="gap-4 items-center">
            <SmartPhone />
            <Ringtone />
            <Avatar />
          </Group>
        </Group>
      </Group>
      <div className="px-8">
        <BreadCrumbs />
      </div>
    </Stack>
  );
};

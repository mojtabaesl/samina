import {
  BaseSideBar,
  Buy,
  Calculate,
  Category,
  Coins,
  DeliveryBox,
  Group,
  Heading,
  Help,
  Logo,
  Navigation,
  Setting,
  Stack,
  Support,
  Users,
  WareHouse,
  Text,
} from '@samina/ui';
import { SwitchCompany } from '../SwitchCompany';

interface SubLink {
  to: string;
  label: string;
}

export interface NavLink {
  to: string;
  icon: React.ReactNode;
  label: string;
  children?: SubLink[];
  showIsOpenIndicator?: boolean;
  leftContent?: React.ReactNode;
}

const links: NavLink[] = [
  { to: '/dashboard', icon: <Category />, label: 'داشبورد' },
  { to: '/users', icon: <Users />, label: 'طرف حساب' },
  { to: '/products', icon: <DeliveryBox />, label: 'کالا و خدمات' },
  { to: '/warehouse', icon: <WareHouse />, label: 'انبارداری' },
  { to: '/sells', icon: <Buy />, label: 'فروش' },
  {
    to: '/treasury',
    icon: <Coins />,
    label: 'خزانه داری',
    children: [
      { to: '/treasury/newBankAccount', label: 'تعریف حساب بانکی' },
      { to: '/treasury/option2', label: 'آپشن ۲' },
      { to: '/treasury/option3', label: 'آپشن ۳' },
    ],
  },
  { to: '/accounting', icon: <Calculate />, label: 'حسابداری' },
  { to: '/settings', icon: <Setting />, label: 'تنظیمات' },
];

const supportLinks: NavLink[] = [
  { to: '/help', icon: <Help />, label: 'راهنما', showIsOpenIndicator: false },
  {
    to: '/support',
    icon: <Support />,
    label: 'پشتیبانی',
    leftContent: <Text className="text-gray-500">ورژن ۱.۰.۴</Text>,
  },
];

export const SideBar = () => {
  return (
    <BaseSideBar>
      <Stack className="gap-6">
        <Group className="mr-4 gap-3 items-center">
          <Logo />
          <Heading level={5}>ثمینا</Heading>
        </Group>
        <SwitchCompany />
        <Navigation links={links} />
      </Stack>
      <Stack className="gap-4">
        <hr className="border-gray-200" />
        <Navigation links={supportLinks} />
      </Stack>
    </BaseSideBar>
  );
};

import { BaseBreadCrumbs } from '@samina/ui';
import { useLocation } from 'react-router-dom';

interface BreadCrumbsItem {
  path: string;
  name: string;
}

interface GenerateBreadcrumbItemsProps {
  breadCrumbsPaths: string[];
  breadCrumbsList: BreadCrumbsItem[];
}

const breadCrumbsList: BreadCrumbsItem[] = [
  { path: '/dashboard', name: 'داشبورد' },
  { path: '/users', name: 'طرف حساب' },
  { path: '/products', name: 'کالا و خدمات' },
  { path: '/warehouse', name: 'انبارداری' },
  { path: '/sells', name: 'فروش' },
  { path: '/treasury', name: 'خزانه داری' },
  { path: '/treasury/newBankAccount', name: 'تعریف حساب بانکی' },
  { path: '/treasury/option2', name: 'آپشن ۲' },
  { path: '/treasury/option3', name: 'آپشن ۳' },
  { path: '/accounting', name: 'حسابداری' },
  { path: '/settings', name: 'تنظیمات' },
  { path: '/help', name: 'راهنما' },
  { path: '/support', name: 'پشتیبانی' },
];

function generateBreadcrumbPaths(pathNames: string[]): string[] {
  const breadcrumbItems: string[] = [];
  let path = '';

  for (let i = 0; i < pathNames.length; i++) {
    path += `/${pathNames[i]}`;
    breadcrumbItems.push(path);
  }

  return breadcrumbItems;
}

function generateBreadcrumbItems({
  breadCrumbsPaths,
  breadCrumbsList,
}: GenerateBreadcrumbItemsProps): BreadCrumbsItem[] {
  return breadCrumbsPaths.map((path) => {
    return {
      path,
      name: breadCrumbsList.find((li) => li.path === path)?.name ?? '',
    };
  });
}

export const BreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => Boolean(x));
  const breadCrumbsPaths = generateBreadcrumbPaths(pathnames);
  const items = generateBreadcrumbItems({ breadCrumbsPaths, breadCrumbsList });
  return <BaseBreadCrumbs items={items} />;
};

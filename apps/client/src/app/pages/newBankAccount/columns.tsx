import { Text, Group, Delete, Edit, Checkbox, Resize } from '@samina/ui';
import type { ColumnDef } from '@tanstack/react-table';
import { BankAccount } from './NewBankAccount';
import { formatCardNumber, formatIBAN } from '../../../utils';

export const columns: ColumnDef<BankAccount>[] = [
  {
    header: '',
    accessorKey: 'actions',
    cell: () => (
      <Group className="gap-4 cursor-pointer">
        <Resize />
        <Edit />
        <Delete />
      </Group>
    ),
    enablePinning: true,
  },
  {
    accessorKey: 'bankBranchCode',
    header: 'کد شعبه بانک',
    cell: ({ row }) => (
      <Text className={'text-secondary font-normal'}>
        {row.getValue('bankBranchCode')}
      </Text>
    ),
  },
  {
    accessorKey: 'bankBranchTitle',
    header: 'عنوان شعبه بانک',
    cell: ({ row }) => (
      <Text className={'text-secondary font-normal'}>
        {row.getValue('bankBranchTitle')}
      </Text>
    ),
  },
  {
    accessorKey: 'cardNumber',
    header: 'شماره کارت',
    cell: ({ row }) => (
      <Text className={'w-[22ch] truncate text-secondary font-normal'}>
        {formatCardNumber(row.getValue('cardNumber'))}
      </Text>
    ),
  },
  {
    accessorKey: 'iBANNumber',
    header: 'شماره شبا',
    cell: ({ row }) => (
      <Text className={'w-[27ch] truncate text-secondary font-normal'}>
        {formatIBAN(row.getValue('iBANNumber'))}
      </Text>
    ),
  },
  {
    accessorKey: 'accountNumber',
    header: 'شماره حساب',
    cell: ({ row }) => (
      <Text className={'w-[27ch] truncate text-secondary font-normal'}>
        {row.getValue('accountNumber')}
      </Text>
    ),
  },
  {
    accessorKey: 'accountCode',
    header: 'کد حساب',
    cell: ({ row }) => (
      <Text className={'text-secondary font-normal'}>
        {row.getValue('accountCode')}
      </Text>
    ),
  },
  {
    accessorKey: 'accountTitle',
    header: 'عنوان حساب',
    cell: ({ row }) => (
      <Text className={'w-[23ch] truncate text-secondary font-normal'}>
        {row.getValue('accountTitle')}
      </Text>
    ),
  },
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) =>
          table.toggleAllPageRowsSelected(Boolean(value))
        }
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(Boolean(value))}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
];

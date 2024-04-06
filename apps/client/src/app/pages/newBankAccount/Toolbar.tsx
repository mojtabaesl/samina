import type { ChangeEvent } from 'react';
import { useDataTable } from '../../../components/DataTable';
import {
  Input,
  IconButton,
  Group,
  Delete,
  Excel,
  Filter,
  Printer,
  Button,
  Plus,
} from '@samina/ui';

export function DataTableToolbar() {
  const { table } = useDataTable();
  console.log();

  return (
    <Group className="grow justify-between">
      <Group className="gap-2 items-center">
        <Input
          id="filter"
          placeholder="جستجو"
          value={
            (table.getColumn('accountTitle')?.getFilterValue() as string) ?? ''
          }
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            table.getColumn('accountTitle')?.setFilterValue(e.target.value)
          }
          className="h-10 max-w-[250px]"
        />
        <IconButton variant="secondary">
          <Filter />
        </IconButton>
      </Group>
      <Group className="gap-2">
        <IconButton variant="secondary">
          <Printer />
        </IconButton>
        <IconButton variant="secondary">
          <Excel />
        </IconButton>
        {}
        <IconButton
          variant="secondary"
          className={
            table.getIsSomePageRowsSelected() ||
            table.getIsAllPageRowsSelected()
              ? 'text-red-500 border-red-500 bg-red-100'
              : ''
          }
        >
          <Delete />
        </IconButton>
        <Button>
          <Plus />
          حساب جدید
        </Button>
      </Group>
    </Group>
  );
}

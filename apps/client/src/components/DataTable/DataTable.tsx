import {
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table';

import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  Table,
  VisibilityState,
} from '@tanstack/react-table';

import { createContext, useState, type ReactNode, useContext } from 'react';
import { BaseDataTable } from './BaseDataTable';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  children: ReactNode;
}

//TODO: please wipe this type mess
interface TableContext<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  table: Table<TData>;
}

const Context = createContext({});

export function DataTable<TData, TValue>({
  columns,
  data,
  children,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    initialState: {
      pagination: {
        pageSize: 10,
      },
      columnPinning: {
        left: ['actions'],
      },
    },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="flex flex-col gap-4 grow">
      <Context.Provider
        value={{ table, columns } satisfies TableContext<TData, TValue>}
      >
        {children}
      </Context.Provider>
    </div>
  );
}

export function useDataTable() {
  const context = useContext(Context);
  if (!context) throw new Error('This should be inside a dataTable component');
  return context as TableContext<unknown, unknown>;
}

DataTable.Table = BaseDataTable;

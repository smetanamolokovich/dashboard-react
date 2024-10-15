"use client";

import * as React from "react";
import {
  Cross1Icon,
  DotsVerticalIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data: Damage[] = [
  {
    rz: "MUJT3ST",
    client: "Firma klienta",
    date: "31.01.2024 18:10 Strakonice",
    ppuk: false,
    smp: false,
    pp: false,
    reservationId: 0,
    recieveDate: "10.08.2023 10:23",
  },
  {
    rz: "3AD 8387",
    client: "ABC Data, s.r.o",
    date: null,
    ppuk: true,
    smp: false,
    pp: false,
    reservationId: 1,
    recieveDate: "10.08.2023 10:23",
  },
  {
    rz: "4BC 1234",
    client: "XYZ Logistics",
    date: "12.02.2024 09:15 Prague",
    ppuk: true,
    smp: true,
    pp: true,
    reservationId: 2,
    recieveDate: "11.08.2023 14:45",
  },
  {
    rz: "5DE 5678",
    client: "Transport Co.",
    date: "05.03.2024 15:30 Brno",
    ppuk: false,
    smp: true,
    pp: false,
    reservationId: 3,
    recieveDate: "12.08.2023 09:30",
  },
  {
    rz: "6FG 9101",
    client: "Logistics Solutions",
    date: "15.01.2024 12:00 Plzeň",
    ppuk: true,
    smp: false,
    pp: true,
    reservationId: 4,
    recieveDate: "13.08.2023 08:15",
  },
  {
    rz: "7HI 1121",
    client: "Delivery Experts",
    date: null,
    ppuk: false,
    smp: false,
    pp: false,
    reservationId: 5,
    recieveDate: "14.08.2023 16:00",
  },
  {
    rz: "8JK 1314",
    client: "Freight Forwarders Inc.",
    date: "28.02.2024 11:45 Liberec",
    ppuk: true,
    smp: true,
    pp: true,
    reservationId: 6,
    recieveDate: "15.08.2023 10:30",
  },
  {
    rz: "9LM 1516",
    client: "Cargo Services",
    date: "20.03.2024 13:20 Hradec Králové",
    ppuk: false,
    smp: true,
    pp: false,
    reservationId: 7,
    recieveDate: "16.08.2023 14:10",
  },
  {
    rz: "10NO 1718",
    client: "Transport & Logistics",
    date: "30.04.2024 08:50 Olomouc",
    ppuk: true,
    smp: false,
    pp: true,
    reservationId: 8,
    recieveDate: "17.08.2023 17:45",
  },
  {
    rz: "11PQ 1920",
    client: "Quick Transport",
    date: "18.05.2024 10:30 Zlin",
    ppuk: true,
    smp: false,
    pp: true,
    reservationId: 9,
    recieveDate: "18.08.2023 11:00",
  },
  {
    rz: "12RS 2122",
    client: "Global Freight",
    date: "22.06.2024 14:00 Karlovy Vary",
    ppuk: false,
    smp: true,
    pp: false,
    reservationId: 10,
    recieveDate: "19.08.2023 12:15",
  },
  {
    rz: "13ST 2324",
    client: "Eco Logistics",
    date: null,
    ppuk: true,
    smp: true,
    pp: true,
    reservationId: 11,
    recieveDate: "20.08.2023 09:45",
  },
  {
    rz: "14UV 2526",
    client: "Reliable Carriers",
    date: "25.07.2024 16:30 Pilsen",
    ppuk: false,
    smp: false,
    pp: true,
    reservationId: 12,
    recieveDate: "21.08.2023 15:30",
  },
  {
    rz: "15WX 2728",
    client: "Express Delivery",
    date: "30.08.2024 08:00 Brno",
    ppuk: true,
    smp: false,
    pp: false,
    reservationId: 13,
    recieveDate: "22.08.2023 10:00",
  },
];

export type Damage = {
  rz: string;
  client: string;
  date: string | null;
  ppuk: boolean;
  smp: boolean;
  pp: boolean;
  reservationId: number;
  recieveDate: string;
};

export const columns: ColumnDef<Damage>[] = [
  {
    accessorKey: "rz",
    header: "RZ",
    cell: ({ row }) => <div className="capitalize">{row.getValue("rz")}</div>,
  },
  {
    accessorKey: "client",
    header: "Klient",
    cell: ({ row }) => <div>{row.getValue("client")}</div>,
  },
  {
    accessorKey: "date",
    header: () => <div className="text-center">Datum převozu</div>,
    cell: ({ row }) => {
      const dateValue = row.getValue("date");
      return (
        <div className="flex justify-center align-center">
          {dateValue ? String(dateValue) : <Cross1Icon />}
        </div>
      );
    },
  },
  {
    accessorKey: "ppuk",
    header: () => <div className="text-center">PPuK</div>,
    cell: ({ row }) => {
      return (
        <div className="flex align-center justify-center">
          <Checkbox
            checked={row.getValue("ppuk")}
            onCheckedChange={(value: unknown) => (value = !value)}
            aria-label="Select row"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "smp",
    header: () => <div className="text-center">SMP</div>,
    cell: ({ row }) => {
      return (
        <div className="flex align-center justify-center">
          <Checkbox
            checked={row.getValue("smp")}
            onCheckedChange={(value: unknown) => (value = !value)}
            aria-label="Select row"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "pp",
    header: () => <div className="text-center">PP</div>,
    cell: ({ row }) => {
      return (
        <div className="flex align-center justify-center">
          <Checkbox
            checked={row.getValue("pp")}
            onCheckedChange={(value: unknown) => (value = !value)}
            aria-label="Select row"
          />
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return (
        <div className="flex align-center justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <DotsVerticalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Akce</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Editovat poskozeni
              </DropdownMenuItem>
              <DropdownMenuItem>Export PDF</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

export default function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Vyhledávání..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Prázdný seznam dat.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ArrowLeftIcon />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

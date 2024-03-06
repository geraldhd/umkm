import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    Pagination,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[],
    data: TData[]
}

export function DataTable<TData, TValue>({ data, columns }: DataTableProps<TData, TValue>) {

    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const table = useReactTable({
        data,
        columns,
        initialState: {
            pagination: {
                "pageIndex": 0,
                "pageSize": 10
            }
        },
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            columnFilters
        },
    })

    return (
        <div className="w-full">
            <div className="flex flex-row items-center justify-between py-4">
                
                <Input
                    placeholder="Cari Nama Brand..."
                    value={(table.getColumn("namaBrand")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("namaBrand")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                
                <div>
                <Button
                  type="button"
                  className="bg-[#CF7E1A] mx-5 px-4 py-2 text-white rounded-lg 
              font-semibold text-sm w-fit mt-3 cursor-pointer mb-3"
                  onClick={() => {
                    "setDataState();"
                  }}
                >
                  + Eksport Data
                </Button>
                <Button
                  type="button"
                  className="bg-[#CF7E1A] mx-5 px-4 py-2 text-white rounded-lg 
              font-semibold text-sm w-fit mt-3 cursor-pointer mb-3"
                  onClick={() => {
                    "setDataState();"
                  }}
                >
                  + Import Data
                </Button>
                </div>
             
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
                                    )
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
                                    className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    Page {table.getState().pagination.pageIndex + 1} of{" "}
                    {table.getPageCount()}
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}>Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}>Next</Button>
                </div>
            </div>
        </div>
    )
}

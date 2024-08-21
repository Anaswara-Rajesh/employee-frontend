import {
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import React from "react";

export const PrimaryTable =({ data, columns, onRowClick }) => {
  const { getHeaderGroups, getRowModel } = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleRowClick = (row) => {
    if (onRowClick) {
      onRowClick(row.original);
    }
  };

  const outerContainerClassName = classNames(
    "overflow-x-auto relative overflow-x-auto"
  );

  return (
    <Paper
      elevation={2}
      style={{ padding: "1rem 0px" }}
      className={outerContainerClassName}
    >
      <MuiTable className="w-full h-full text-center">
        <TableHead>
          {getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableCell
                  key={header.id}
                  className="!font-semibold !text-base"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              onClick={() => handleRowClick(row)}
              className="cursor-pointer capitalize"
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </Paper>
  );
};

export default PrimaryTable;

import { Chip } from "@mui/material";

export const Columns = [
  {
    accessorKey: "",
    header: "",
  },
  {
    accessorKey: "",
    header: "",
  },
  {
    accessorKey: "",
    header: "",
  },
  {
    accessorKey: "",
    header: "",
    cell: (row) => {
      return (
        <Chip
          label={row.getValue()}
          size="small"
          color={row.getValue() === "active" ? "primary" : "default"}
        />
      );
    },
  },
];

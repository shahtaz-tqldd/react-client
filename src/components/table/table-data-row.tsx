import React from "react";
import { TableCell, TableRow } from "../ui/table";

interface Column {
  title: string;
  field: string;
}

interface TableDataRowProps {
  item: { [key: string]: any };
  columns: Column[];
  index: number;
}

const TableDataRow: React.FC<TableDataRowProps> = ({
  item,
  columns,
  index,
}) => {
  return (
    <TableRow className={index % 2 !== 0 ? "bg-accent" : ""}>
      {columns?.map((column, index) => (
        <TableCell
          key={index}
          className={
            index === 0
              ? "text-left pl-5"
              : index + 1 === columns.length
              ? "text-right pr-6"
              : "text-center hidden md:table-cell"
          }
        >
          {item[column.field]}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default TableDataRow;

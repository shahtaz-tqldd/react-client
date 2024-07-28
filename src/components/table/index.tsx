import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import AlgoPagination from "../pagination";
import TableDataRow from "./table-data-row";

interface DataRow {
  customer: string;
  email: string;
  type: string;
  status: string;
  statusVariant: string;
  date: string;
  amount: string;
}

interface Column {
  title: string;
  field: string;
}

interface AlgoTableProps {
  data: DataRow[];
  columns: Column[];
  totalDataCount: number;
  page: number;
  setPage: (page: number) => void;
}

export default function AlgoTable({
  data,
  columns,
  totalDataCount,
  page,
  setPage,
}: AlgoTableProps) {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow className="bg-secondary hover:bg-secondary">
            {columns?.map((column, index) => (
              <TableHead
                key={index}
                className={`text-white ${
                  index === 0
                    ? "text-left pl-5"
                    : index + 1 === columns.length
                    ? "text-right pr-6"
                    : "text-center hidden md:table-cell"
                }`}
              >
                {column.title}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((row, index) => (
            <TableDataRow
              key={index}
              index={index}
              item={row}
              columns={columns}
            />
          ))}
        </TableBody>
      </Table>
      {totalDataCount > 10 && (
        <AlgoPagination
          page={page}
          setPage={setPage}
          total={totalDataCount}
          className="mt-12"
        />
      )}
    </>
  );
}

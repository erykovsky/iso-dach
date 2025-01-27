import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PricingData {
  thickness: string;
  price: string;
}

interface PricingTableProps {
  data: PricingData[];
}

export function PricingTable({ data }: PricingTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/2">Grubość izolacji</TableHead>
          <TableHead className="w-1/2">Stawka za m2</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{item.thickness}</TableCell>
            <TableCell>{item.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

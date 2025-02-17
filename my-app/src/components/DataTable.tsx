import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function DataTable() {
  return (
    <Table className="min-w-full text-sm text-gray-700 shadow-md rounded-lg overflow-x-auto">
      <TableCaption className="text-xl font-semibold text-gray-800 mb-4"></TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-left py-3 px-4 border-b">Cities</TableHead>
          <TableHead className="text-left py-3 px-4 border-b">
            Impressions
          </TableHead>
          <TableHead className="text-left py-3 px-4 border-b">Reach</TableHead>
          <TableHead className="text-right py-3 px-4 border-b">CTR</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="border-b hover:bg-gray-50">
          <TableCell className="py-4 px-4">New York</TableCell>
          <TableCell className="py-4 px-4">1,500</TableCell>
          <TableCell className="py-4 px-4">2,300</TableCell>
          <TableCell className="text-right py-4 px-4">$250.00</TableCell>
        </TableRow>
        <TableRow className="border-b hover:bg-gray-50">
          <TableCell className="py-4 px-4">Los Angeles</TableCell>
          <TableCell className="py-4 px-4">2,000</TableCell>
          <TableCell className="py-4 px-4">2,800</TableCell>
          <TableCell className="text-right py-4 px-4">$350.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

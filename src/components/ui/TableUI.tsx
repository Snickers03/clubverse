import { tdMembers, thMembers } from "@/mocks/memberTableData";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function TableUI() {
  return (
    <Table>
      <TableCaption>All members of your organisation</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>{thMembers.id}</TableHead>
          <TableHead>{thMembers.name}</TableHead>
          <TableHead>{thMembers.memberSince}</TableHead>
          <TableHead className='text-right'>{thMembers.role}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tdMembers.map((dataRow) => (
          <TableRow key={dataRow.id}>
            <TableCell className='font-medium'>{dataRow.id}</TableCell>
            <TableCell>{dataRow.name}</TableCell>
            <TableCell>{dataRow.memberSince}</TableCell>
            <TableCell className='text-right'>{dataRow.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

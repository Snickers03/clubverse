import { useOrganisationStore } from "@/store/organisation-store";
import { User } from "@prisma/client";

import { Button } from "@/components/ui/button";
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

const OrganisationMember = () => {
  const organisation = useOrganisationStore((state) => state.organisation);

  const members = organisation?.users || [];

  return (
    <div>
      <div className='mt-3 flex justify-between'>
        <p className='text-xl font-medium'>Members</p>
        <Button size={"sm"}>Add Member</Button>
      </div>

      <Table>
        <TableCaption>A list of all organisation members.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Id</TableHead>
            <TableHead>OrganisationId</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member: User) => (
            <TableRow key={member.id}>
              <TableCell className='font-medium'>{member.id}</TableCell>
              <TableCell>{member.organisationId}</TableCell>
              <TableCell>{member.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Users</TableCell>
            <TableCell className='text-right'>{members.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default OrganisationMember;

"use client";

import { useRouter } from "next/navigation";
import { formatDate } from "@/lib/utils";
import { useOrganisationStore } from "@/store/organisation-store";
import { User } from "@prisma/client";

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

import { AddMemberDialog } from "./AddMemberDialog";

const OrganisationMember = () => {
  const organisation = useOrganisationStore((state) => state.organisation);

  const members = organisation?.users || [];
  const router = useRouter();

  return (
    <div>
      <div className='flex items-center justify-between'>
        <p className='text-xl font-medium'>Mitglieder</p>
        <AddMemberDialog />
      </div>

      <Table className='mt-3 rounded-md bg-white'>
        <TableCaption>Eine Liste aller Organisationsmitglieder.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Mitglied seit</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className=''>
          {members.map((member: User, index) => {
            // TODO: BUG - Total screen moves some pixels to the left bc of the TableCells

            return (
              <TableRow
                key={member.id}
                className='transition-all duration-200 ease-in-out hover:cursor-pointer hover:bg-gray-100'
                onClick={() => router.push(`/main/members/${member.id}`)}
              >
                <TableCell className='font-medium'>{index + 1}</TableCell>
                <TableCell>
                  {member.firstName + " " + member.lastName}
                </TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>{formatDate(member.joinDate)}</TableCell>
                <TableCell>{member.role}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Mitglieder gesamt</TableCell>
            <TableCell className='text-right'>{members.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default OrganisationMember;

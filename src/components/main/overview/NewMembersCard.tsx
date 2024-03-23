import Link from "next/link";
import { timeFromNow } from "@/lib/utils";
import { useOrganisationStore } from "@/store/organisation-store";
import { ArrowRight } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const NewMembersCard = () => {
  const organisation = useOrganisationStore((state) => state.organisation);

  return (
    <div>
      <div className='flex justify-between'>
        <p className='text-lg font-semibold'>Neue Mitglieder</p>
        <Link href='/main/members'>
          <ArrowRight
            className='text-slate-700 hover:cursor-pointer hover:text-black'
            size={24}
          />
        </Link>
      </div>
      <Table className='mt-3 rounded-md bg-white'>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>MNR</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Beigetreten</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {organisation?.users?.slice(0, 3).map((member) => {
            return (
              <TableRow
                key={member.id}
                className='transition-all duration-200 ease-in-out hover:cursor-pointer hover:bg-gray-100'
              >
                <TableCell className='font-medium'>{member.mnr}</TableCell>
                <TableCell>
                  {member.firstName + " " + member.lastName}
                </TableCell>

                <TableCell>{timeFromNow(member.joinDate)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default NewMembersCard;

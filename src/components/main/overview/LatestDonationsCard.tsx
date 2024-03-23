import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const LatestDonationsCard = () => {
  // TODO: Fetch latest donations from API
  const donations = [
    {
      id: 1,
      firstName: "Max",
      lastName: "Mustermann",
      amount: 100,
    },
    {
      id: 2,
      firstName: "Peter",
      lastName: "Maier",
      amount: 100,
    },
    {
      id: 3,
      firstName: "Klaus",
      lastName: "Kirchberg",
      amount: 100,
    },
  ];

  return (
    <div>
      <div className='flex justify-between'>
        <p className='text-lg font-semibold'>Letzte Spenden</p>
        <Link href='/main/donations'>
          <ArrowRight
            className='text-slate-700 hover:cursor-pointer hover:text-black'
            size={24}
          />
        </Link>
      </div>
      <Table className='mt-3 rounded-md bg-white'>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Betrag</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {donations.map((donation) => (
            <TableRow
              key={donation.id}
              className='transition-all duration-200 ease-in-out hover:cursor-pointer hover:bg-gray-100'
            >
              <TableCell className='font-medium'>{donation.id}</TableCell>
              <TableCell>
                {donation.firstName + " " + donation.lastName}
              </TableCell>

              <TableCell>{donation.amount} €</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LatestDonationsCard;

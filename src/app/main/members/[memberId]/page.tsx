"use client";

import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { useOrganisationStore } from "@/store/organisation-store";
import { UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Page({ params }: { params: { memberId: string } }) {
  const organisation = useOrganisationStore((state) => state.organisation);

  const selectedMember = organisation?.users?.find(
    (user) => user.id === params.memberId,
  );

  const memberDetails = [
    { label: "Email", value: selectedMember?.email },

    { label: "Adresse", value: selectedMember?.address || "N/A" },
    { label: "Telefonnummer", value: selectedMember?.phoneNumber || "N/A" },
    {
      label: "Geburtsdatum",
      value: selectedMember?.birthDate
        ? formatDate(selectedMember.birthDate)
        : "N/A",
    },
    {
      label: "Mitglied seit",
      value: selectedMember?.joinDate
        ? formatDate(selectedMember.joinDate)
        : "N/A",
    },
  ];

  return (
    <div>
      <Button asChild variant={"link"}>
        <Link href='/main/members'>&larr; Zurück</Link>
      </Button>

      <div>
        <UserRound size={48} className='mx-auto mt-8 text-gray-600' />
        <p className='mt-2 text-center text-xl font-medium text-gray-600'>{`${selectedMember?.firstName} ${selectedMember?.lastName}`}</p>
      </div>

      <div className='mt-4 grid grid-cols-3 gap-8'>
        {memberDetails.map(({ label, value }) => (
          <div className='text-center' key={label}>
            <p className='pb-2 text-gray-600'>{label}</p>
            <p>{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

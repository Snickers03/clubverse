"use client";

import Image from "next/image";
import { useOrganisationStore } from "@/store/organisation-store";
import { UserButton } from "@clerk/nextjs";

const OrganisationHeader = () => {
  const organisation = useOrganisationStore((state) => state.organisation);

  // TODO: Way better loading state -> skeleton loader

  return (
    <div className='flex justify-between'>
      <div className='flex items-center space-x-2'>
        <Image
          src={organisation?.logoUrl ?? "/organisation-logo.png"}
          width={40}
          height={40}
          alt='ClubVerse Logo'
        />
        <h1 className='text-left text-3xl font-bold'>{organisation?.name}</h1>
      </div>
      <div className='flex items-center space-x-2'>
        <UserButton afterSignOutUrl='/' />
        {/* <SettingsDropdown /> */}
      </div>
    </div>
  );
};

export default OrganisationHeader;

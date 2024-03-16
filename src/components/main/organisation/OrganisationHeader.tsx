"use client";

import Image from "next/image";
import { useOrganisationStore } from "@/store/organisation-store";

import SettingsDropdown from "../settings/SettingsDropdown";

const OrganisationHeader = () => {
  const organisation = useOrganisationStore((state) => state.organisation);

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
      <SettingsDropdown />
    </div>
  );
};

export default OrganisationHeader;

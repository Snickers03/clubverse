"use client";

import { useOrganisationStore } from "@/store/organisation-store";

const DonationSetup = () => {
  const organisation = useOrganisationStore((state) => state.organisation);
  return (
    <div>
      <p className='w-2/3 pt-2 text-gray-600'>
        Um eine individuelle Spendenseite zu erstellen musst du sie hier
        individal erstellen und live schalten. Die Seite wird unter{" "}
        <span className='font-bold'>
          https://clubverse.org/donate/{organisation?.name.replace(" ", "-")}
        </span>{" "}
        erreichbar sein
      </p>
    </div>
  );
};

export default DonationSetup;

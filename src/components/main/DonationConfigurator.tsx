"use client";

import { useOrganisationStore } from "@/store/organisation-store";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const DonationConfigurator = () => {
  const organisation = useOrganisationStore((state) => state.organisation);
  return (
    <div>
      <div className='flex items-center space-x-2'>
        <Switch id='donation-mode' />
        <Label htmlFor='airplane-mode'>Aktivieren</Label>
      </div>
      <p className='w-1/3 pt-2 text-sm text-gray-600'>
        Um eine individuelle Spendenseite zu erstellen musst du sie hier
        individal erstellen und live schalten. <br />
        Die Seite wird unter{" "}
        <span className='font-bold'>
          https://clubverse.org/{organisation?.name.replaceAll(" ", "-")}
        </span>{" "}
        erreichbar sein
      </p>
    </div>
  );
};

export default DonationConfigurator;

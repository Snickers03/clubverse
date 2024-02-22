import { useOrganisationStore } from "@/store/organisation-store";

import SettingsDropdown from "../settings/SettingsDropdown";

const OrganisationHeader = () => {
  const organisation = useOrganisationStore((state) => state.organisation);

  return (
    <div className='flex justify-between'>
      <h1 className='text-left text-3xl font-bold'>{organisation?.name}</h1>
      <SettingsDropdown />
    </div>
  );
};

export default OrganisationHeader;

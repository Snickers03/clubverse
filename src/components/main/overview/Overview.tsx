import { useOrganisationStore } from "@/store/organisation-store";

import LatestDonationsCard from "./LatestDonationsCard";
import NewMembersCard from "./NewMembersCard";

const Overview = () => {
  const organisation = useOrganisationStore((state) => state.organisation);
  const totalMembers = organisation?.users?.length;
  // TODO: outsource + get total donations
  const totalDonations = 300;
  return (
    <div className='mt-4'>
      <div className='grid grid-cols-2 gap-4'>
        <div className='rounded-md border-2 border-gray-400 p-4 text-center'>
          <p className='text-4xl font-medium'>{totalMembers}</p>
          <p className='text-md text-gray-500'>Mitglieder</p>
        </div>
        <div className='rounded-md border-2 border-gray-400 p-4 text-center'>
          <p className='text-4xl font-medium'>{totalDonations} €</p>
          <p className='text-md text-gray-500'>Spenden</p>
        </div>
      </div>
      <div className='mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2'>
        <NewMembersCard />
        <LatestDonationsCard />
      </div>
    </div>
  );
};

export default Overview;

import { useOrganisationStore } from "@/store/organisation-store";

const Overview = () => {
  const organisation = useOrganisationStore((state) => state.organisation);
  const totalMembers = organisation?.users?.length;
  const totalDonations = 0;
  return (
    <div className='grid grid-cols-2 gap-4 md:w-1/2'>
      <div className='rounded-md border-2 border-gray-400 p-4 text-center'>
        <p className='text-4xl font-medium'>{totalMembers}</p>
        <p className='text-md text-gray-500'>Mitglieder</p>
      </div>
      <div className='rounded-md border-2 border-gray-400 p-4 text-center'>
        <p className='text-4xl font-medium'>{totalDonations}</p>
        <p className='text-md text-gray-500'>Spenden</p>
      </div>
    </div>
  );
};

export default Overview;

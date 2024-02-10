"use client";

import { useOrganisationStore } from "@/store/organisation-store";

import JoinOrganisation from "./organisation/JoinOrganisation";
import Organisation from "./organisation/Organisation";

const Dashboard = () => {
  const organisation = useOrganisationStore((state) => state.organisation);

  return (
    <div>
      {organisation && <Organisation />}
      {!organisation && <JoinOrganisation />}

      {/* <div className='grid grid-cols-2 gap-2'>
        <DashboardCard
          label='Mitglieder verwalten'
          icon={<Users />}
          href='/members'
        />
        <DashboardCard label='Inventar' icon={<Warehouse />} />
        <DashboardCard label='Termine' icon={<Calendar />} />
        <DashboardCard label='Spendenbelege' icon={<HandCoins />} />
      </div> */}
    </div>
  );
};

export default Dashboard;

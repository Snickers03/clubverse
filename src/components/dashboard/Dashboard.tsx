"use client";

import { useOrganisationStore } from "@/store/organisation-store";

import { Button } from "../ui/button";
import JoinOrganisationProcess from "./organisation/JoinOrganisationProcess";

const Dashboard = () => {
  const organisation = useOrganisationStore((state) => state.organisation);
  const leaveOrganisation = useOrganisationStore(
    (state) => state.leaveOrganisation,
  );

  return (
    <div>
      {organisation && (
        <div className='flex justify-between'>
          <h1 className='text-left text-3xl font-bold'>{organisation.name}</h1>
          <Button
            onClick={leaveOrganisation}
            size={"sm"}
            variant={"destructive"}
          >
            Organisation verlassen
          </Button>
        </div>
      )}

      {!organisation && <JoinOrganisationProcess />}

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

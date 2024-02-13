"use client";

import { useOrganisationStore } from "@/store/organisation-store";

import EnterOrganisation from "./noorganisation/EnterOrganisation";
import Organisation from "./organisation/Organisation";

const Dashboard = () => {
  const organisation = useOrganisationStore((state) => state.organisation);

  return (
    <>
      {organisation && <Organisation />}
      {!organisation && <EnterOrganisation />}
    </>
  );
};

export default Dashboard;

"use client";

import { useUserStore } from "@/store/user-store";
import { Calendar, HandCoins, Users, Warehouse } from "lucide-react";

import DashboardCard from "./DashboardCard";

const Dashboard = () => {
  const user = useUserStore((state) => state.user);
  return (
    <div>
      <h1 className='mb-3 text-left text-3xl font-bold'>Dashboard</h1>

      <div className='grid grid-cols-2 gap-2'>
        <DashboardCard
          label='Mitglieder verwalten'
          icon={<Users />}
          href='/members'
        />
        <DashboardCard label='Inventar' icon={<Warehouse />} />
        <DashboardCard label='Termine' icon={<Calendar />} />
        <DashboardCard label='Spendenbelege' icon={<HandCoins />} />
      </div>
    </div>
  );
};

export default Dashboard;

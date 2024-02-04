import { useUserStore } from "@/store/user-store";
import { Calendar, HandCoins, Users, Warehouse } from "lucide-react";

import DashboardCard from "./DashboardCard";

const Dashboard = () => {
  const user = useUserStore((state) => state.user);
  return (
    <div>
      <h1 className='text-3xl font-bold'>Dashboard</h1>
      <p className='py-2 text-lg'>Willkommen {user?.name}!</p>

      <div className='grid grid-cols-2 gap-2'>
        <DashboardCard label='Mitglieder verwalten' icon={<Users />} />
        <DashboardCard label='Inventar' icon={<Warehouse />} />
        <DashboardCard label='Termine' icon={<Calendar />} />
        <DashboardCard label='Spendenbelege' icon={<HandCoins />} />
      </div>
    </div>
  );
};

export default Dashboard;

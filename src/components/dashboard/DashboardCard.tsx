import React, { type ReactElement } from "react";

interface DashboardCardsProps {
  label: string;
  icon: ReactElement;
}

const DashboardCard = ({ label, icon }: DashboardCardsProps) => {
  return (
    <div className='flex-row justify-center rounded-lg border-2 border-blue-400 p-6 hover:cursor-pointer hover:bg-slate-200'>
      {React.cloneElement(icon, {
        className: "mx-auto text-gray-600",
        size: 50,
      })}
      <p className='pt-3 text-center text-lg text-gray-600'>{label}</p>
    </div>
  );
};

export default DashboardCard;

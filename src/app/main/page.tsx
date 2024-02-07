import { currentUser } from "@clerk/nextjs";

import Dashboard from "@/components/dashboard/Dashboard";

export default async function Page() {
  const user = await currentUser();

  return (
    <div className='mt-20 text-center'>
      <p className='text-2xl font-medium'>Main Page / {user?.username}</p>
      <Dashboard />
    </div>
  );
}

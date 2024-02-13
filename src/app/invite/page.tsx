"use client";

import { useSearchParams } from "next/navigation";

export default function Page() {
  // read url param
  const searchParams = useSearchParams();
  const organisationId = searchParams.get("oid");

  return (
    <main className='mt-10'>
      <p className='text-center text-2xl font-medium'>Invite Page</p>
      <p className='py-3 text-center'>oid: {organisationId}</p>
    </main>
  );
}

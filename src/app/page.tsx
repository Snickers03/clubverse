"use client";

import Image from "next/image";
import { useUserStore } from "@/store/user-store";

export default function Home() {
  const user = useUserStore((state) => state.user);

  return (
    <main className='mt-20'>
      {user ? (
        <p className='text-center text-4xl'>Hey {user.name}!</p>
      ) : (
        <p className='text-center text-4xl'>Nicht angemeldet</p>
      )}
      <div className='flex items-center justify-center space-x-8'>
        <Image
          className='rounded-lg'
          src={"/landing.jpg"}
          width={600}
          height={600}
          alt='Landing'
        />
        <p className='text-6xl leading-snug'>
          Vereine verbinden,
          <br /> Zukunft gestalten
        </p>
      </div>
    </main>
  );
}

import Image from "next/image";

import Login from "@/components/Login";

export default function Home() {
  return (
    <main className='mt-20'>
      <Login />
      {/* <div className='flex items-center justify-center space-x-8'>
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
      </div> */}
    </main>
  );
}

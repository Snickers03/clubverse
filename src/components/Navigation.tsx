import React from "react";
import Image from "next/image";

const Navigation = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex items-center space-x-2'>
        <Image src={"/logo.png"} width={50} height={50} alt='ClubFlow Logo' />
        <h1 className='text-3xl font-medium'>ClubFlow</h1>
      </div>
      <button className='rounded-lg bg-blue-300 px-4 py-2 hover:bg-blue-400'>
        Jetzt Anmelden
      </button>
    </div>
  );
};

export default Navigation;

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className='flex justify-between'>
      <Link href={"/"} className='flex items-center space-x-2'>
        <Image src={"/logo.png"} width={50} height={50} alt='ClubFlow Logo' />
        <h1 className='text-3xl font-medium'>ClubVerse</h1>
      </Link>
      <div className='flex items-center rounded-lg bg-blue-300 px-6 hover:bg-blue-400'>
        <Link href={"/login"}>Jetzt Anmelden</Link>
      </div>
    </div>
  );
};

export default Navigation;

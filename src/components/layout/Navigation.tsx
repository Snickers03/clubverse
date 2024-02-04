"use client";

import Image from "next/image";
import Link from "next/link";
import { useUserStore } from "@/store/user-store";
import { LogIn, LogOut, User } from "lucide-react";

const Navigation = () => {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);

  return (
    <div className='flex justify-between'>
      <Link href={"/"} className='flex items-center space-x-2'>
        <Image src={"/logo.png"} width={50} height={50} alt='ClubVerse Logo' />
        <h1 className='text-3xl font-medium'>ClubVerse</h1>
      </Link>
      {user ? (
        <div className='flex items-center space-x-6 rounded-lg bg-blue-300 px-3'>
          <div className='flex items-center space-x-2'>
            <User size={26} />
            <p className='text-lg'>{user.name}</p>
          </div>
          <LogOut onClick={logout} className='text-red-500' size={26} />
        </div>
      ) : (
        <div className='flex items-center rounded-lg bg-blue-300 px-3 hover:bg-blue-400 md:px-6'>
          <Link className='flex items-center space-x-2' href={"/login"}>
            <LogIn size={26} />
            <span className='hidden md:block'>Jetzt Anmelden</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navigation;

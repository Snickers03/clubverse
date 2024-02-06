import Image from "next/image";
import Link from "next/link";
import { currentUser, UserButton } from "@clerk/nextjs";
import { LogIn, LogOut, User } from "lucide-react";

const Navigation = async () => {
  const user = await currentUser();

  return (
    <div className='flex justify-between'>
      <Link href={"/"} className='flex items-center space-x-2'>
        <Image src={"/logo.png"} width={50} height={50} alt='ClubVerse Logo' />
        <h1 className='text-3xl font-medium'>ClubVerse</h1>
      </Link>
      {user ? (
        <div className='flex items-center space-x-2 rounded-md bg-blue-200 px-4'>
          <UserButton afterSignOutUrl='/' />
          <p>{user.username}</p>
        </div>
      ) : (
        <div className='flex items-center rounded-lg bg-blue-300 px-3 hover:bg-blue-400 md:px-6'>
          <Link className='flex items-center space-x-2' href={"/sign-in"}>
            <LogIn size={26} />
            <span className='hidden md:block'>Jetzt Anmelden</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navigation;

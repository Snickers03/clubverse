import Link from "next/link";
import { currentUser, UserButton } from "@clerk/nextjs";
import { LogIn } from "lucide-react";

import Header from "./Header";

const Navigation = async () => {
  const user = await currentUser();

  return (
    <div className='flex justify-between'>
      <Header />
      {user ? (
        <div className='flex items-center space-x-3'>
          {/* <Notifications /> */}
          <UserButton afterSignOutUrl='/' />
        </div>
      ) : (
        <div className='flex items-center rounded-lg bg-blue-300 px-3 hover:bg-blue-400 md:px-6'>
          <Link className='flex items-center space-x-2' href={"/sign-in"}>
            <LogIn size={24} />
            <span className='hidden md:block'>Zum Login</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navigation;

import Link from "next/link";
import { currentUser, UserButton } from "@clerk/nextjs";
import { LogIn } from "lucide-react";

import { Button } from "../ui/button";
import Header from "./Header";
import Notifications from "./Notifications";

const Navigation = async () => {
  const user = await currentUser();

  return (
    <div className='flex items-center justify-between pt-4'>
      <Header />
      <div className='hidden space-x-12 md:block'>
        <Link href={"/"}>Lösungen</Link>
        <Link href={"/team"}>Über uns</Link>
        <Link href={"/faq"}>FAQ</Link>
      </div>
      {user ? (
        <div className='flex items-center space-x-3'>
          <Notifications />
          <UserButton afterSignOutUrl='/' />
        </div>
      ) : (
        <div className='flex items-center space-x-2'>
          <Button size={"sm"}>Demo testen</Button>
          <Button size={"sm"} variant={"link"} className=''>
            <Link className='flex items-center space-x-2' href={"/sign-in"}>
              <LogIn size={22} />
              <span className='hidden md:block'>Zum Login</span>
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navigation;

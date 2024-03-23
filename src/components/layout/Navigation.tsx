import Link from "next/link";
import { currentUser, UserButton } from "@clerk/nextjs";
import { LogIn } from "lucide-react";

import { Button } from "../ui/button";
import Header from "./Header";

const Navigation = async () => {
  const user = await currentUser();

  return (
    <div className='sticky top-0 z-50 flex items-center justify-between rounded-b-lg bg-[#a5ddf6] bg-opacity-90 px-6 py-4'>
      <Header />
      <div className='hidden space-x-12 md:block'>
        <Link href={"/team"}>Team</Link>
        <Link href={"/faq"}>FAQ</Link>
      </div>
      {user ? (
        <div className='flex items-center space-x-3'>
          {/* <Notifications /> */}
          <Button size={"sm"} asChild>
            <Link href={"/main"}>Dashboard</Link>
          </Button>

          <UserButton afterSignOutUrl='/' />
        </div>
      ) : (
        <div className='flex items-center space-x-2'>
          <Button size={"sm"} disabled>
            Demo testen
          </Button>
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

import Image from "next/image";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs";

import { Button } from "../ui/button";

const WelcomeCard = async () => {
  const user = await currentUser();

  return (
    <div className='mt-20'>
      <div className='space-y-4 text-center text-4xl lg:text-6xl'>
        <p>Vereine verbinden,</p>
        <p>Zukunft gestalten</p>
      </div>

      <div className='mx-auto mt-12 flex justify-center'>
        {user ? (
          <Link
            className='rounded-lg bg-blue-300 px-8 py-3 hover:bg-blue-400'
            href='/main'
          >
            Zum Dashboard
          </Link>
        ) : (
          <div>
            <Button className=' bg-blue-300 px-8 py-6 text-2xl font-normal text-black hover:bg-blue-300'>
              <Link href='/sign-up'>Jetzt Verein verwalten!</Link>
            </Button>
            <p className='py-2 text-center text-gray-500'>
              Keine Kreditkarte benötigt
            </p>
          </div>
        )}
      </div>
      <div className='my-6'>
        <Image
          className='mx-auto rounded-lg'
          src='/preview-app.png'
          alt='hero'
          width={900}
          height={800}
        />
      </div>
    </div>
  );
};

export default WelcomeCard;

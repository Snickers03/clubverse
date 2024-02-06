import Image from "next/image";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs";

const Landing = async () => {
  const user = await currentUser();

  return (
    <div className='mt-20'>
      <div className='mx-auto flex-row items-center justify-center md:flex md:space-x-8'>
        <Image
          className='mx-auto rounded-lg lg:mx-0'
          src={"/landing.jpg"}
          width={500}
          height={500}
          alt='Landing'
        />
        <div className=''>
          <p className='my-5 text-center text-4xl leading-snug md:text-left lg:text-6xl'>
            Vereine verbinden,
            <br /> Zukunft gestalten
          </p>
          <div className='flex justify-center lg:justify-start'>
            {user ? (
              <Link
                className='rounded-lg bg-blue-300 px-8 py-3 hover:bg-blue-400'
                href='/main'
              >
                Zum Dashboard
              </Link>
            ) : (
              <Link
                className='rounded-lg bg-blue-300 px-8 py-3 hover:bg-blue-400'
                href='/sign-up'
              >
                Jetzt registrieren!
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

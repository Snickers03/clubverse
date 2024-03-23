"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className='container mx-auto mt-auto'>
      <div className='py-10 md:flex md:items-center md:justify-between'>
        <div className='text-center md:text-left'>
          <p className='text-sm text-muted-foreground'>
            &copy; {new Date().getFullYear()} Alle Rechte vorbehalten
          </p>
        </div>

        <div className='mt-4 flex items-center justify-center md:mt-0'>
          <div className='flex space-x-8'>
            <Link
              href='/impressum'
              className='text-sm text-muted-foreground hover:text-gray-600'
            >
              Impressum
            </Link>
            <Link
              href='/datenschutz'
              className='text-sm text-muted-foreground hover:text-gray-600'
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

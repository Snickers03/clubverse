"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Header from "./Header";

const Footer = () => {
  const pathname = usePathname();
  const pathsToMinimize = ["/verify-email", "/sign-up", "/sign-in"];

  return (
    <footer className='mx-auto'>
      <div className='border-t border-gray-200'>
        {pathsToMinimize.includes(pathname) ? null : (
          <div className='pb-8 pt-16'>
            <div className='flex justify-center'>
              <Header />
            </div>
          </div>
        )}

        {pathsToMinimize.includes(pathname) ? null : (
          <div>
            <div className='relative flex items-center px-6 py-6 sm:py-8 lg:mt-0'>
              <div className='absolute inset-0 overflow-hidden rounded-lg'>
                <div
                  aria-hidden='true'
                  className='absolute inset-0 bg-zinc-50 bg-opacity-90 bg-gradient-to-br'
                />
              </div>

              <div className='relative mx-auto max-w-sm text-center'>
                <h3 className='font-semibold text-gray-900'>
                  Verwalte deinen Verein
                </h3>
                <p className='mt-2 text-sm text-muted-foreground'>
                  Erstelle deinen Verein und verwalte Mitglieder, Aktivitäten
                  und Spendenaktionen.{` `}
                  <Link
                    href='/sign-in'
                    className='whitespace-nowrap font-medium text-black hover:text-zinc-900'
                  >
                    Jetzt starten &rarr;
                  </Link>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className='py-10 md:flex md:items-center md:justify-between'>
        <div className='text-center md:text-left'>
          <p className='text-sm text-muted-foreground'>
            &copy; {new Date().getFullYear()} Alle Rechte vorbehalten
          </p>
        </div>

        <div className='mt-4 flex items-center justify-center md:mt-0'>
          <div className='flex space-x-8'>
            <Link
              href='#'
              className='text-sm text-muted-foreground hover:text-gray-600'
            >
              AGB
            </Link>
            <Link
              href='#'
              className='text-sm text-muted-foreground hover:text-gray-600'
            >
              Impressum
            </Link>
            <Link
              href='#'
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

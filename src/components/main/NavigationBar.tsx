"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function NavigationBar() {
  const navigationLinks = [
    { name: "Übersicht", href: "/main" },
    { name: "Mitglieder", href: "/main/members" },
    { name: "Spenden", href: "/main/donations" },
  ];

  const pathname = usePathname();

  const [activePath, setActivePath] = useState(pathname);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  return (
    <div className='py-2'>
      <div className='w-[400px]'>
        <div className='grid w-full grid-cols-3'>
          {navigationLinks.map((link, index) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "bg-white py-1 text-center ",
                  index === 0 && "rounded-bl-md rounded-tl-md",
                  index === 2 && "rounded-br-md rounded-tr-md",
                  activePath === link.href &&
                    "font-bold text-blue-400 hover:cursor-default",
                  activePath !== link.href && "hover:bg-gray-200",
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

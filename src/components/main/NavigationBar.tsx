"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Building, HandCoinsIcon, Settings, Users } from "lucide-react";

export function NavigationBar() {
  const navigationLinks = [
    { name: "Übersicht", href: "/main", icon: <Building size={24} /> },
    { name: "Mitglieder", href: "/main/members", icon: <Users size={24} /> },
    {
      name: "Spenden",
      href: "/main/donations",
      icon: <HandCoinsIcon size={24} />,
    },
  ];

  const navigationSettings = {
    name: "Einstellungen",
    href: "/main/settings",
    icon: <Settings size={24} />,
  };

  const pathname = usePathname();

  const [activePath, setActivePath] = useState(pathname);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  return (
    <div className='mt-4'>
      <div className='flex w-full justify-between rounded-md bg-white px-4 py-2'>
        <div className='flex space-x-12'>
          {navigationLinks.map((link, index) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "flex items-center space-x-2",
                  activePath === link.href && "text-black hover:cursor-default",
                  activePath !== link.href && "text-slate-400",
                )}
              >
                {link.icon}
                <span className='hidden md:block'>{link.name}</span>
              </Link>
            );
          })}
        </div>
        <Link
          href={navigationSettings.href}
          className={clsx(
            "flex items-center space-x-2",
            activePath === navigationSettings.href &&
              "text-black hover:cursor-default",
            activePath !== navigationSettings.href && "text-slate-400",
          )}
        >
          {navigationSettings.icon}
          <span>{navigationSettings.name}</span>
        </Link>
      </div>
    </div>
  );
}

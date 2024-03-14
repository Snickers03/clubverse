"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { formatDonationUrl } from "@/lib/utils";

import DonationForm from "@/components/donate/DonationForm";

type donationStepType =
  | "validate"
  | "donate"
  | "invalid organisation"
  | "success";

export default function Page() {
  const pathname = usePathname();
  const organisationName = formatDonationUrl(pathname);

  const [donationStep, setDonationStep] =
    useState<donationStepType>("validate");

  useEffect(() => {
    // TODO Manu: API Call check if organisation exists
    // setDonationStep("donate");
  }, [organisationName]);

  switch (donationStep) {
    case "validate":
      return (
        <main className='mt-10'>
          <p className='text-center text-2xl font-medium'>
            Spenden: {organisationName}
          </p>
        </main>
      );
    case "donate":
      return (
        <main className='mt-10'>
          <DonationForm />
        </main>
      );
    case "invalid organisation":
      return (
        <main className='mt-10'>
          <p className='text-center text-2xl font-medium'>
            Organisation nicht gefunden
          </p>
        </main>
      );
    case "success":
      return (
        <main className='mt-10'>
          <p className='text-center text-2xl font-medium'>
            Vielen Dank für Ihre Spende!
          </p>
        </main>
      );
  }
}

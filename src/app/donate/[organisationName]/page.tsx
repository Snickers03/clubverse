"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { formatDonationUrl } from "@/lib/utils";

import DonationForm from "@/components/donate/DonationForm";
import { checkOrganisationExists, createDonationAction, getOrganisationID } from "@/actions/donate.action";

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
  const [firstName, setFirstName] = useState<string | undefined>(undefined);
  const [lastName, setLastName] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const exist = await checkOrganisationExists(organisationName);
      if (exist) {
        setDonationStep("donate");
      } else {
        setDonationStep("invalid organisation");
      }
    };
    fetchData();
  }, [organisationName]);


  const handleDonationSuccess = (firstName: string, lastName: string) => {
    setDonationStep("success");
    setFirstName(firstName);
    setLastName(lastName);
  };

  switch (donationStep) {
    case "validate":
      return (
        <main className='mt-10'>
          <p className='text-center text-2xl font-medium'>
            Searching
          </p>
        </main>
      );
    case "donate":
      return (
        <main className='mt-10'>
          <p className='text-center text-2xl font-medium'>
            Spenden: {organisationName}
          </p>
          <DonationForm onSuccess={handleDonationSuccess} />
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
            Vielen Dank, {firstName} {lastName}, für deine Spende!
          </p>
        </main>
      );
  }
}
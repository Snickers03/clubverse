"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { formatDonationUrl } from "@/lib/utils";

import DonationForm from "@/components/donate/DonationForm";
import { checkOrganisationExists } from "@/actions/donate.action";

type DonationStepType =
  | "validate"
  | "donate"
  | "invalid organisation"
  | "success";

export default function Page() {
  const pathname = usePathname();
  const organisationName = formatDonationUrl(pathname);

  const [donationStep, setDonationStep] =
    useState<DonationStepType>("validate");
  const [fullName, setFullName] = useState<string | null>(null);

  useEffect(() => {
    const checkOrganisationExistsFunc = async () => {
      const organisationId = await checkOrganisationExists(organisationName);
      if (!organisationId) {
        setDonationStep("invalid organisation");
        return;
      }
      setDonationStep("donate");

    };
    checkOrganisationExistsFunc();
  }, [organisationName]);


  const handleDonationSuccess = (fullName: string) => {
    setDonationStep("success");
    setFullName(fullName);
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
          <DonationForm handleDonationSuccess={handleDonationSuccess} />
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
            Vielen Dank, {fullName}, für deine Spende!
          </p>
        </main>
      );
  }
}
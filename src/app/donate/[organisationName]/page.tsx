"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { formatDonationUrl } from "@/lib/utils";
import { Donation } from "@prisma/client";

import { checkOrganisationExistsAction } from "@/actions/donate.action";
import { Button } from "@/components/ui/button";
import DonationForm from "@/components/donate/DonationForm";
import LoadingAnimation from "@/components/LoadingAnimation";

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
  const [finishedDonation, setFinishedDonation] = useState<Donation | null>(
    null,
  );

  useEffect(() => {
    const checkOrganisationExistsFunc = async () => {
      const organisationId =
        await checkOrganisationExistsAction(organisationName);
      if (!organisationId) {
        setDonationStep("invalid organisation");
        return;
      }
      setDonationStep("donate");
    };
    checkOrganisationExistsFunc();
  }, [organisationName]);

  const handleDonationSuccess = (finishedDonation: Donation) => {
    setDonationStep("success");
    setFinishedDonation(finishedDonation);
  };

  switch (donationStep) {
    case "validate":
      return <LoadingAnimation />;
    case "donate":
      return (
        <main className='mx-auto w-1/3 pt-4'>
          <p className='text-center text-2xl font-bold'>{organisationName}</p>
          <p className='py-2 text-sm text-slate-800'>
            Dies ist die Spenderseite der {organisationName}. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Commodi quis excepturi rem
            sapiente at, suscipit laboriosam maiores ad aliquam temporibus
            perferendis!
          </p>
          <DonationForm handleDonationSuccess={handleDonationSuccess} />
        </main>
      );
    case "invalid organisation":
      return (
        <main className='pt-10'>
          <p className='text-center text-2xl font-medium'>
            Organisation nicht gefunden.
          </p>
          <Button className='mx-auto flex' variant={"link"}>
            <Link href='/'>Zurück zur Startseite</Link>
          </Button>
        </main>
      );
    case "success":
      return (
        <main className='mx-auto mt-10 w-1/3 text-center'>
          <p className='text-2xl font-bold'>{organisationName}</p>
          <p className='py-2 text-4xl'>{finishedDonation?.amount} €</p>
          <p className='py-2 text-center text-slate-800'>
            Vielen Dank,{" "}
            <span className='font-bold'>
              {finishedDonation?.firstName + " " + finishedDonation?.lastName}
            </span>{" "}
            für deine Spende!
          </p>
          <div className='space-y-2'>
            <Button className='w-2/3' disabled>
              Spendenbeleg herunterladen
            </Button>
            <br />
            <Button
              size={"sm"}
              onClick={() => {
                setDonationStep("donate");
                setFinishedDonation(null);
              }}
              variant={"secondary"}
              className='w-2/3'
            >
              Neue Spende
            </Button>
          </div>
        </main>
      );
  }
}

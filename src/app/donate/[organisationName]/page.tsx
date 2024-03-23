"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
  const organisationSlug = formatDonationUrl(pathname);

  const [organisationName, setOrganisationName] = useState<string>("");
  const [organisationLogoUrl, setOrganisationLogoUrl] = useState<string>("");

  const [donationStep, setDonationStep] =
    useState<DonationStepType>("validate");
  const [finishedDonation, setFinishedDonation] = useState<Donation | null>(
    null,
  );

  useEffect(() => {
    const checkOrganisationExistsFunc = async () => {
      const organisation =
        await checkOrganisationExistsAction(organisationSlug);
      setOrganisationName(organisation?.name || "");
      setOrganisationLogoUrl(organisation?.logoUrl || "");
      if (!organisation?.id) {
        setDonationStep("invalid organisation");
        return;
      }
      setDonationStep("donate");
    };
    checkOrganisationExistsFunc();
  }, [organisationSlug]);

  const handleDonationSuccess = (finishedDonation: Donation) => {
    setDonationStep("success");
    setFinishedDonation(finishedDonation);
  };

  switch (donationStep) {
    case "validate":
      return <LoadingAnimation />;
    case "donate":
      return (
        <main className='mx-auto w-full pt-4 md:w-1/2 lg:w-[44%]'>
          <div className='flex items-end justify-center space-x-2'>
            <Image
              src={organisationLogoUrl}
              width={40}
              height={40}
              alt='organisation-logo'
            />
            <p className='text-center text-2xl font-bold'>{organisationName}</p>
          </div>
          <p className='pt-4 text-justify text-base text-slate-700'>
            Der TC Messkirch setzt sich leidenschaftlich für die Förderung des
            Tennissports in unserer Gemeinde ein. Mit Ihrer Spende unterstützen
            Sie nicht nur die Instandhaltung unserer Anlagen und die Anschaffung
            neuer Ausrüstung, sondern ermöglichen auch Kindern und Jugendlichen
            aus finanziell benachteiligten Familien, am Training teilzunehmen
            und ihre Leidenschaft für Tennis zu entdecken. Helfen Sie uns, die
            Liebe zum Sport weiterzugeben und eine Gemeinschaft zu stärken, in
            der jeder die Chance hat, sein volles Potenzial zu entfalten.
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
          <p className='text-2xl font-bold'>{organisationSlug}</p>
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

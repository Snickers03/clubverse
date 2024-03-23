"use client";

import Link from "next/link";
import { useOrganisationStore } from "@/store/organisation-store";

import { Button } from "@/components/ui/button";

const YourDonationPage = () => {
  const organisation = useOrganisationStore((state) => state.organisation);
  // TODO: Logic for production and dev URL
  const donationUrl = `${process.env.NEXT_PUBLIC_DEV_URL}/donate/${organisation?.donationSlug}`;

  return (
    <div>
      <p className='mt-4 text-xl font-medium'>Deine Spendenseite</p>
      <Button variant={"link"} asChild>
        <Link href={donationUrl}>{donationUrl}</Link>
      </Button>
    </div>
  );
};

export default YourDonationPage;

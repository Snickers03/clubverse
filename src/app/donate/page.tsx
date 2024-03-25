"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function Page() {
  const orderId = useSearchParams().get("oid");

  // TODO: fetch donation by orderId
  // TODO: show name, amount, organisation name & logo

  const finishedDonation = {
    amount: 100,
    firstName: "Max",
    lastName: "Mustermann",
  };

  return (
    <div className='mx-auto mt-10 w-full text-center lg:w-1/3'>
      <p className='text-2xl font-bold'>{orderId}</p>
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
        <Button variant={"link"} asChild>
          <Link href='/'>Zurück zur Startseite</Link>
        </Button>
      </div>
    </div>
  );
}

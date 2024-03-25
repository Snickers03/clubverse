import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Page() {
  // TODO: add fehlgeschlagen page

  const finishedDonation = {
    amount: 100,
    firstName: "Max",
    lastName: "Mustermann",
  };

  return (
    <div className='mx-auto mt-10 w-full text-center lg:w-1/3'>
      <p className='text-2xl font-bold'>Spende fehlgeschlagen</p>

      <Button variant={"link"} asChild>
        <Link href='/'>Zurück zur Startseite</Link>
      </Button>
    </div>
  );
}

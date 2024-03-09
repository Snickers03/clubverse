"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useOrganisationStore } from "@/store/organisation-store";

import { Button } from "@/components/ui/button";

export default function Page() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const inviteId = searchParams.get("id");
  const [organisationName, setOrganisationName] = useState<String | null>(null);
  const validateInviteLinkStore = useOrganisationStore(
    (state) => state.validateInviteLink,
  );

  useEffect(() => {
    if (!inviteId) {
      router.push("/");
    }
    const validateInviteLink = async () => {
      const res = await validateInviteLinkStore(inviteId as string);
      console.log("res", res);
      setOrganisationName(res);
    };
    validateInviteLink();
  }, [inviteId, router, validateInviteLinkStore]);

  const handleSignInWithInviteLink = () => {
    localStorage.setItem("inviteLink", inviteId as string);
    router.push(`/sign-up`);
  };

  return (
    <main className='mt-10'>
      <div className='pb-6 text-center text-3xl font-medium'>
        {organisationName !== "INVALID_INVITE_LINK" ? (
          <div>
            <p className='mb-4'>{organisationName}</p>
            <Button
              onClick={handleSignInWithInviteLink}
              variant={"link"}
              size={"lg"}
              className='mx-auto flex bg-blue-300'
            >
              Jetzt registrieren und beitreten
            </Button>
          </div>
        ) : (
          <div>
            <p>Ungültiger Einladungslink</p>
            <Button variant={"link"} asChild size={"lg"}>
              <Link href='/'>Zurück zur Startseite</Link>
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}

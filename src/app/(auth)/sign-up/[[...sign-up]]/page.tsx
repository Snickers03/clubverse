"use client";

import { useEffect, useState } from "react";
import { SignUp } from "@clerk/nextjs";

import { CreateOrganisationForm } from "@/components/auth/CreateOrganisationForm";
import Header from "@/components/layout/Header";

export default function Page() {
  type CreateOrgaTyp = "Organisation" | "Account";

  const [currentStep, setCurrentStep] = useState<CreateOrgaTyp>("Organisation");

  useEffect(() => {
    const organisation = localStorage.getItem("organisation");
    if (organisation) {
      setCurrentStep("Account");
    }
  }, []);

  return (
    <div className='mt-20'>
      <div className='mb-6 flex justify-center'>
        <Header />
      </div>
      {currentStep === "Organisation" ? (
        <CreateOrganisationForm
          goToClerkSignUp={() => setCurrentStep("Account")}
        />
      ) : (
        <div className='flex justify-center'>
          <SignUp />
        </div>
      )}
    </div>
  );
}

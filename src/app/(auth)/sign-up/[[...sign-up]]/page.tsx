"use client";

import { useEffect, useState } from "react";
import { SignUp } from "@clerk/nextjs";

import AuthLayout from "@/components/auth/AuthLayout";
import { CreateOrganisationForm } from "@/components/auth/CreateOrganisationForm";

type CreateOrgaTyp = "CreateOrganisation" | "CreateClerkAccount";

export default function Page() {
  const [currentStep, setCurrentStep] =
    useState<CreateOrgaTyp>("CreateOrganisation");

  useEffect(() => {
    const organisation = localStorage.getItem("organisation");
    if (organisation) {
      setCurrentStep("CreateClerkAccount");
    }
    const inviteId = localStorage.getItem("inviteLink");
    if (inviteId) {
      setCurrentStep("CreateClerkAccount");
    }
  }, []);

  switch (currentStep) {
    case "CreateOrganisation":
      return (
        <AuthLayout>
          <CreateOrganisationForm
            goToClerkSignUp={() => setCurrentStep("CreateClerkAccount")}
          />
        </AuthLayout>
      );
    case "CreateClerkAccount":
      return (
        <AuthLayout>
          <SignUp />
        </AuthLayout>
      );
  }
}

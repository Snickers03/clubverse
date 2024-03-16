"use client";

import Image from "next/image";
import { useOrganisationStore } from "@/store/organisation-store";
import { UploadButton } from "@/utils/uploadthing";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ChangeOrganisationLogoDialog = () => {
  const organisation = useOrganisationStore((state) => state.organisation);
  const updateOrganisationLogo = useOrganisationStore(
    (state) => state.updateOrganisationLogo,
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className='cursor-default rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-slate-100 focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'>
          Logo ändern
        </p>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Logo ändern</DialogTitle>
          <div className='space-y-4 pt-4'>
            <Image
              className='mx-auto'
              src={organisation?.logoUrl ?? "/organisation-logo.png"}
              alt='preview'
              width={100}
              height={100}
            />
            <UploadButton
              appearance={{
                button: {
                  fontSize: "14px",
                  backgroundColor: "#18171a",
                },
                allowedContent: {
                  color: "#a1a1aa",
                },
              }}
              content={{
                button: "Aktualisieren",
                allowedContent: "(Bilder bis zu 4MB)",
              }}
              endpoint='imageUploader'
              onBeforeUploadBegin={(files) => {
                const orgaId = organisation?.id as string;

                return files.map(
                  (f) => new File([f], `${orgaId}-` + f.name, { type: f.type }),
                );
              }}
              onClientUploadComplete={async (res) => {
                const newLogoUrl = res[0].url;
                await updateOrganisationLogo(
                  organisation?.id as string,
                  newLogoUrl,
                );
              }}
              onUploadError={(error: Error) => {
                toast.error(error.message);
              }}
            />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ChangeOrganisationLogoDialog;

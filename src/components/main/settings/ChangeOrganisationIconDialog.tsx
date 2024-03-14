"use client";

import { useState } from "react";
import Image from "next/image";
import { UploadButton } from "@/utils/uploadthing";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ChangeOrganisationIconDialog = () => {
  const [newLogoUrl, setNewLogoUrl] = useState<string | null>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className='cursor-default rounded-sm px-2 py-1.5 text-sm  transition-colors hover:bg-slate-100 focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'>
          Logo ändern
        </p>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Logo ändern</DialogTitle>
          <div className='py-4 text-blue-400'>
            {newLogoUrl ? (
              <Image src={newLogoUrl} alt='preview' width={100} height={100} />
            ) : (
              <UploadButton
                appearance={{
                  button: {
                    color: "white",
                    backgroundColor: "rgb(96 165 250)",
                  },
                  allowedContent: {
                    color: "#a1a1aa",
                  },
                }}
                content={{
                  button: "Bild wählen",
                  allowedContent: "(Bilder bis zu 4MB)",
                }}
                endpoint='imageUploader'
                onClientUploadComplete={(res) => {
                  setNewLogoUrl(res[0].url);
                }}
                onUploadError={(error: Error) => {
                  // Do something with the error.
                  alert(`ERROR! ${error.message}`);
                }}
              />
            )}
          </div>
          <DialogClose asChild>
            <Button disabled={newLogoUrl === null ? true : false} type='submit'>
              Aktualisieren
            </Button>
          </DialogClose>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ChangeOrganisationIconDialog;

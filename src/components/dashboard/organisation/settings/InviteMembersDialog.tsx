import { useOrganisationStore } from "@/store/organisation-store";
import { CopyIcon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InviteMembersDialog() {
  const organisation = useOrganisationStore((state) => state.organisation);
  const url = process.env.NEXT_PUBLIC_INVITE_URL ?? "http://localhost:3000/";
  const inviteLink = url + organisation?.inviteLink || "";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className='cursor-default rounded-sm px-2 py-1.5 text-sm  transition-colors hover:bg-slate-100 focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'>
          Mitglieder einladen
        </p>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Mitglieder einladen</DialogTitle>
          <DialogDescription>
            Jeder mit diesen Link kann der Organisation beitreten.
          </DialogDescription>
        </DialogHeader>
        <div className='flex items-center space-x-2'>
          <div className='grid flex-1 gap-2'>
            <Label htmlFor='link' className='sr-only'>
              Link
            </Label>
            <Input id='link' defaultValue={inviteLink} readOnly />
          </div>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(inviteLink);
              toast.success("Link wurde kopiert!");
            }}
            type='submit'
            size='sm'
            className='px-3'
          >
            <span className='sr-only'>Copy</span>
            <CopyIcon className='h-4 w-4' />
          </Button>
        </div>
        <DialogFooter className='sm:justify-start'>
          <DialogClose asChild>
            <Button type='button' variant='secondary'>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { AddMemberForm } from "./AddMemberForm";

export function AddMemberDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"sm"}>Neues Mitglied</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Mitglied hinzufügen</DialogTitle>
          <DialogDescription>
            Füge ein neues Mitglied zu deiner Organisation hinzu.
          </DialogDescription>
        </DialogHeader>
        <AddMemberForm />
      </DialogContent>
    </Dialog>
  );
}

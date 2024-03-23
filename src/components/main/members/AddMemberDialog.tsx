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
        <Button size={"sm"}>Mitglieder hinzufügen</Button>
      </DialogTrigger>
      <DialogContent className='w-2/3'>
        <DialogHeader>
          <DialogTitle>Mitglieder hinzufügen</DialogTitle>
          <DialogDescription>
            Importiere Mitglieder in deinen Verein oder füge sie manuell hinzu.
          </DialogDescription>
        </DialogHeader>
        <div className='flex justify-center space-x-4 py-5'>
          <Button>csv Datei importieren</Button>
          <Button>exl Datei importieren</Button>
        </div>
        <p className='py-3 text-center font-bold'>oder</p>
        <AddMemberForm />
      </DialogContent>
    </Dialog>
  );
}

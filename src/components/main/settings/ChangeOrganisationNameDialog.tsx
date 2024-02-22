import { useOrganisationStore } from "@/store/organisation-store";
import { Form, Formik } from "formik";

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
import InputUI from "@/components/ui/InputUI";

export function ChangeOrganisationNameDialog() {
  const organisation = useOrganisationStore((state) => state.organisation);

  const updateOrganisationName = useOrganisationStore(
    (state) => state.updateOrganisationName,
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className='cursor-default rounded-sm px-2 py-1.5 text-sm  transition-colors hover:bg-slate-100 focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'>
          Name ändern
        </p>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Organisationsname ändern</DialogTitle>
          <DialogDescription>
            Ändere den Namen deiner Organisation.
          </DialogDescription>
        </DialogHeader>
        <Formik
          initialValues={{ name: organisation?.name ?? "" }}
          onSubmit={async (values) => {
            if (values.name === organisation?.name) return;
            await updateOrganisationName(organisation?.id ?? "", values.name);
          }}
        >
          {({ errors }) => (
            <Form>
              <div className='py-4'>
                <InputUI
                  label='Name'
                  placeholder='Organisationname'
                  fieldName='name'
                  type='text'
                  error={errors.name}
                />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type='submit'>Ändern</Button>
                </DialogClose>
              </DialogFooter>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}

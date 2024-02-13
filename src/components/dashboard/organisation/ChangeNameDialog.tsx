import { Form, Formik } from "formik";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import InputUI from "@/components/ui/InputUI";

interface ChangeOrganisatioNameDialogProps {
  currentOrganisationName: string;
}

export function ChangeNameDialog({
  currentOrganisationName,
}: ChangeOrganisatioNameDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* // TODO Dialog didnt stay open */}
        <Button>Name ändern</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Organisationsname ändern</DialogTitle>
          <DialogDescription>
            Ändere den Namen deiner Organisation.
          </DialogDescription>
        </DialogHeader>
        <Formik
          initialValues={{ name: currentOrganisationName }}
          onSubmit={() => {}}
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
                <Button type='submit'>Update</Button>
              </DialogFooter>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}

import { AddMemberSchema } from "@/schemas";
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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
        <Formik
          validationSchema={AddMemberSchema}
          initialValues={{ firstName: "", lastName: "", email: "" }}
          onSubmit={() => {}}
        >
          {({ errors }) => (
            <Form>
              <div className='mb-6 space-y-4'>
                <div className='flex space-x-4'>
                  <InputUI
                    label='Vorname'
                    placeholder='Max'
                    fieldName='firstName'
                    type='text'
                    error={errors.firstName}
                  />
                  <InputUI
                    label='Nachname'
                    placeholder='Mustermann'
                    fieldName='lastName'
                    type='text'
                    error={errors.lastName}
                  />
                </div>
                <InputUI
                  label='Email'
                  placeholder='max.mustermann@gmail.com'
                  fieldName='email'
                  type='text'
                  error={errors.email}
                />

                <div>
                  <Label>Rolle</Label>
                  <Select>
                    <SelectTrigger className='w-1/2'>
                      <SelectValue placeholder='Wähle eine Rolle' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value='ADMIN'>Admin</SelectItem>
                        <SelectItem value='USER'>USER</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type='submit'>Hinzufügen</Button>
              </DialogFooter>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}

import { CreateOrganisationSchema } from "@/schemas";
import { useOrganisationStore } from "@/store/organisation-store";
import { useUser } from "@clerk/nextjs";
import { Form, Formik } from "formik";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import InputUI from "@/components/ui/InputUI";

const CreateOrganisation = () => {
  const userId = useUser().user?.id ?? "";
  const createOrganisation = useOrganisationStore(
    (state) => state.createOrganisation,
  );

  return (
    <div>
      <p className='pb-4 text-2xl font-medium'>Organisation Erstellen</p>
      <Formik
        validationSchema={CreateOrganisationSchema}
        initialValues={{ name: "" }}
        onSubmit={(values) => {
          toast.promise(createOrganisation(userId, values.name), {
            loading: "Organisation wird erstellt...",
            success: (data) => {
              return `Organisation ${data.name} wurde erstellt`;
            },
            error: "Fehler beim Erstellen der Organisation",
          });
        }}
      >
        {({ errors }) => (
          <Form>
            <div className='mx-auto w-1/3'>
              <InputUI
                label='Name'
                placeholder='Organisationname'
                fieldName='name'
                type='text'
                error={errors.name}
              />
            </div>
            <Button type='submit' variant='outline' className='mt-3'>
              Jetzt Erstellen
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateOrganisation;

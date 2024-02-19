import { useOrganisationStore } from "@/store/organisation-store";
import { useUser } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

const CreateOrganisation = () => {
  const userId = useUser().user?.id ?? "";
  const createOrganisation = useOrganisationStore(
    (state) => state.createOrganisation,
  );

  return (
    <div>
      <Button variant={"outline"} size={"lg"} className='w-full'>
        Neue Organisation erstellen
      </Button>
      {/* <p className='pb-4 text-center text-2xl font-medium'>
        Organisation Erstellen
      </p>
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
            <Button
              type='submit'
              variant='outline'
              className='mx-auto mt-3 flex w-1/3'
            >
              Jetzt Erstellen
            </Button>
          </Form>
        )}
      </Formik> */}
    </div>
  );
};

export default CreateOrganisation;

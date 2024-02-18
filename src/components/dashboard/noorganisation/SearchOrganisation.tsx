import { useState } from "react";
import { SearchOrganisationSchema } from "@/schemas";
import { useOrganisationStore } from "@/store/organisation-store";
import { Organisation } from "@prisma/client";
import { Form, Formik } from "formik";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import InputUI from "@/components/ui/InputUI";
import { useUser } from "@clerk/nextjs";

const SearchOrganisation = () => {
  const searchOrganisation = useOrganisationStore(
    (state) => state.searchOrganisation,
  );

  const [searchResults, setSearchResults] = useState<Organisation[] | null>(
    null,
  );

  const handleOrganisationSearch = (values: { searchTerm: string }) => {
    toast.promise(searchOrganisation(values.searchTerm), {
      loading: "Organisation wird gesucht...",
      success: (data) => {
        setSearchResults(data);
        if (data.length === 0)
          throw new Error("Keine Organisationen gefunden.");
        return "Organisationen gefunden";
      },
      error: (err) => {
        return err.message;
      },
    });
  };

  const createRequest = useOrganisationStore(
    (state) => state.createRequest,
  );
  const userId = useUser().user?.id ?? "";

  return (
    <div>
      <p className='mb-2 mt-4 text-center text-2xl font-medium'>
        Organisation Suchen
      </p>
      <Formik
        validationSchema={SearchOrganisationSchema}
        initialValues={{ searchTerm: "" }}
        onSubmit={handleOrganisationSearch}
      >
        {({ errors }) => (
          <Form>
            <div className='mx-auto w-1/3'>
              <InputUI
                label='Suche'
                placeholder='Organisation suchen...'
                fieldName='searchTerm'
                type='text'
                error={errors.searchTerm}
              />
            </div>
            <Button
              type='submit'
              variant='outline'
              className='mx-auto mt-3 flex w-1/3'
            >
              Suchen
            </Button>
          </Form>
        )}
      </Formik>
      <div className='mt-4'>
        {searchResults && searchResults.length > 0 && (
          <div className='mx-auto w-1/3 space-y-2'>
            <p className='font-medium'>Ergebnisse:</p>
            {searchResults.map((organisation: Organisation) => (
              <div
                key={organisation.id}
                className='flex items-center justify-between rounded bg-white px-3 py-2'
              >
                <p className='text-lg font-semibold'>{organisation.name}</p>
                <Button onClick={() => {
                  toast.promise(createRequest(userId, organisation.id, status = "PENDING"), {
                    loading: "Beitrittsanfrage wird erstellt...",
                    success: (data) => {
                      return `Beitrittsanfrage wurde erstellt`;
                    },
                    error: "Fehler beim Erstellen der Beitrittsanfrage",
                  });
                }} size={"sm"}>
                  Anfragen
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchOrganisation;

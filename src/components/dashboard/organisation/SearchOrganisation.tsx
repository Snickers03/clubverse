import { useState } from "react";
import { SearchOrganisationSchema } from "@/schemas";
import { useOrganisationStore } from "@/store/organisation-store";
import { Organisation } from "@prisma/client";
import { Form, Formik } from "formik";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import InputUI from "@/components/ui/InputUI";

const SearchOrganisation = () => {
  const searchOrganisation = useOrganisationStore(
    (state) => state.searchOrganisation,
  );

  const [searchResults, setSearchResults] = useState<Organisation[] | null>(
    null,
  );

  const handleSearch = (values: { searchTerm: string }) => {
    toast.promise(searchOrganisation(values.searchTerm), {
      loading: "Organisation wird gesucht...",
      success: (data) => {
        setSearchResults(data);
        return "Organisationen gefunden";
      },
      error: "Fehler beim Suchen der Organisation",
    });
  };

  return (
    <div>
      <p className='mb-2 mt-4 text-2xl font-medium'>Organisation Suchen</p>
      <Formik
        validationSchema={SearchOrganisationSchema}
        initialValues={{ searchTerm: "" }}
        onSubmit={handleSearch}
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
            <Button type='submit' variant='outline' className='mt-3'>
              Suchen
            </Button>
          </Form>
        )}
      </Formik>

      <div>
        {searchResults && searchResults.length > 0 && (
          <div>
            {searchResults.map((organisation: Organisation) => {
              return (
                <div key={organisation.id}>
                  <p>{organisation.name}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchOrganisation;

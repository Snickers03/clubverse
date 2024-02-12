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
      <div className="mt-4">
        {searchResults && searchResults.length > 0 && (
          <div className="p-4 bg-gray-100 w-1/3 mx-auto">
            <div className="space-y-2">
              {searchResults.map((organisation: Organisation) => (
                <div
                  key={organisation.id}
                  className="flex items-center justify-between p-2 bg-white shadow rounded"
                >
                  <p className="text-xl font-semibold">{organisation.name}</p>
                  <Button variant="outline">Anfrage</Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchOrganisation;
import { useRef, useState } from "react";
import { SearchOrganisationSchema } from "@/schemas";
import { useOrganisationStore } from "@/store/organisation-store";
import { Organisation } from "@prisma/client";
import { Form, Formik } from "formik";
import { Search } from "lucide-react";
import { toast } from "sonner";

import { InputFormik } from "@/components/ui/inputFormik";

import SearchResults from "./SearchResults";

const SearchOrganisation = () => {
  const searchOrganisation = useOrganisationStore(
    (state) => state.searchOrganisation,
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchResults, setSearchResults] = useState<Organisation[] | null>(
    null,
  );

  return (
    <div>
      <Formik
        validationSchema={SearchOrganisationSchema}
        initialValues={{ searchTerm: "" }}
        onSubmit={(values, { resetForm }) => {
          toast.promise(searchOrganisation(values.searchTerm), {
            loading: "Organisation wird gesucht...",
            success: (data) => {
              setSearchResults(data);
              if (data.length === 0)
                throw new Error("Keine Organisationen gefundedn.");
              resetForm();

              return "Organisationen gefunden";
            },
            error: (err) => {
              return err.message;
            },
          });
          if (inputRef.current) {
            inputRef.current.blur();
          }
        }}
      >
        {({ errors }) => (
          <Form>
            <div className='relative flex w-full items-center'>
              <InputFormik
                ref={inputRef}
                max={50}
                fieldName='searchTerm'
                type='text'
                className='w-full rounded-md border border-slate-300 py-6 text-lg transition duration-150 ease-in-out focus:border-slate-500 focus:outline-none'
                placeholder='Organisation suchen...'
              />
              <button
                type='submit'
                className='absolute inset-y-0 right-0 mr-2 flex items-center justify-center px-2'
              >
                <Search />
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {searchResults && (
        <SearchResults
          searchResults={searchResults}
          resetSearchResults={() => setSearchResults(null)}
        />
      )}
    </div>
  );
};

export default SearchOrganisation;

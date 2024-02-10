import { Formik, Form } from 'formik';
import { useOrganisationStore } from '@/store/organisation-store';
import { useUser } from '@clerk/nextjs';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import InputUI from '@/components/ui/InputUI';

const SearchOrganisation = () => {
  const userId = useUser().user?.id ?? "";
  const searchOrganisation = useOrganisationStore(
    (state) => state.getOrganisation,
  );

  const handleSearch = (values: { searchTerm: string; }) => {
    toast.promise(searchOrganisation(values.searchTerm), {
      loading: 'Organisation wird gesucht...',
      success: (data) => {
        return `Organisation ${data.name} wurde gefunden`;
      },
      error: 'Fehler beim Suchen der Organisation',
    });
  };

  return (
    <div>
      <p className='mt-4 text-2xl font-medium'>Organisation Suchen</p>
      <Formik
        initialValues={{ searchTerm: '' }}
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
    </div>
  );
};

export default SearchOrganisation;
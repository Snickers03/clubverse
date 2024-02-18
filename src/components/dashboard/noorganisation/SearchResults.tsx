import { useOrganisationStore } from "@/store/organisation-store";
import { useUser } from "@clerk/nextjs";
import { Organisation } from "@prisma/client";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

interface SearchResultsProps {
  searchResults: Organisation[];
}

const SearchResults = ({ searchResults }: SearchResultsProps) => {
  const createRequest = useOrganisationStore((state) => state.createRequest);
  const userId = useUser().user?.id ?? "";

  const handleSendRequest = (organisationId: string) => async () => {
    toast.promise(createRequest(userId, organisationId), {
      loading: "Anfrage wird gesendet...",
      success: (data) => {
        // TODO: not optimal
        if (data.status === "error") {
          throw new Error(data.message);
        }
        console.log(data);
        return "Anfrage gesendet";
      },
      error: (err: Error) => {
        return err.message;
      },
    });
  };
  return (
    <>
      {searchResults?.length > 0 ? (
        <div className='mx-auto mt-4 w-1/3 space-y-2'>
          <p className='font-medium'>Ergebnisse:</p>
          {searchResults.map((organisation: Organisation) => (
            <div
              key={organisation.id}
              className='flex items-center justify-between rounded bg-white px-3 py-2'
            >
              <p className='text-lg font-semibold'>{organisation.name}</p>
              <Button onClick={handleSendRequest(organisation.id)} size={"sm"}>
                Anfragen
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <p className='py-8 text-center'>Keine Organisationen gefunden</p>
      )}
    </>
  );
};

export default SearchResults;

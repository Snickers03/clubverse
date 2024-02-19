import Image from "next/image";
import { useOrganisationStore } from "@/store/organisation-store";
import { useUser } from "@clerk/nextjs";
import { Organisation } from "@prisma/client";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

interface SearchResultsProps {
  searchResults: Organisation[];
  resetSearchResults: () => void;
}

const SearchResults = ({
  searchResults,
  resetSearchResults,
}: SearchResultsProps) => {
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
        resetSearchResults();
        return "Anfrage gesendet";
      },
      error: (err: Error) => {
        return err.message;
      },
    });
  };
  return (
    <div className='absolute w-[28%] rounded-b-md bg-white p-2'>
      {searchResults?.length > 0 ? (
        <div className='mx-auto mt-4 w-full space-y-2'>
          {searchResults.map((organisation: Organisation) => (
            <div
              key={organisation.id}
              className='flex items-center justify-between rounded-md bg-white px-3 py-2'
            >
              <div className='flex items-center space-x-3'>
                <Image
                  src={"/world.png"}
                  width={40}
                  height={40}
                  alt='Organisation Icon'
                />
                <div>
                  <p className='text-lg font-semibold'>{organisation.name}</p>
                  <p>Sportverein</p>
                </div>
              </div>
              <Button onClick={handleSendRequest(organisation.id)} size={"sm"}>
                Anfragen
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <p className='py-12 text-center'>Keine Organisationen gefunden.</p>
      )}
    </div>
  );
};

export default SearchResults;

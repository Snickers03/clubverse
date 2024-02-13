import { useOrganisationStore } from "@/store/organisation-store";
import { Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChangeNameDialog } from "./ChangeNameDialog";

const OrganisationHeader = () => {
  const organisation = useOrganisationStore((state) => state.organisation);
  const leaveOrganisation = useOrganisationStore(
    (state) => state.leaveOrganisation,
  );
  return (
    <div className='flex justify-between'>
      <h1 className='text-left text-3xl font-bold'>{organisation?.name}</h1>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline'>
              <Settings className='mr-2' /> Einstellungen
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56'>
            <DropdownMenuLabel>Organisation</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <ChangeNameDialog currentOrganisationName='Birnbacher' />
              </DropdownMenuItem>

              <DropdownMenuItem>Mitglieder einladen</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Danger Zone</DropdownMenuLabel>
            <DropdownMenuItem className='text-red-600'>
              Organisation verlassen
            </DropdownMenuItem>
            <DropdownMenuItem className='text-red-600'>
              Organisation löschen
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default OrganisationHeader;

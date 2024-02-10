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
              <Settings className='mr-2' /> Settings
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56'>
            <DropdownMenuLabel>Organisation Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Edit Details</DropdownMenuItem>
              <DropdownMenuItem>Invite Members</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Danger Zone</DropdownMenuLabel>
            <DropdownMenuItem className='text-red-600'>
              Leave Organisation
            </DropdownMenuItem>
            <DropdownMenuItem className='text-red-600'>
              Delete Organisation
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default OrganisationHeader;

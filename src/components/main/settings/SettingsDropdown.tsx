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

import ChangeOrganisationIconDialog from "./ChangeOrganisationIconDialog";
import { ChangeOrganisationNameDialog } from "./ChangeOrganisationNameDialog";
import { InviteMembersDialog } from "./InviteMembersDialog";

const SettingsDropdown = () => {
  return (
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
          <DropdownMenuItem asChild>
            <ChangeOrganisationNameDialog />
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <ChangeOrganisationIconDialog />
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <InviteMembersDialog />
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Danger Zone</DropdownMenuLabel>
        <DropdownMenuItem className='text-red-600'>
          Organisation löschen
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SettingsDropdown;

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import DonationConfigurator from "./DonationConfigurator";
import OrganisationMember from "./organisation/OrganisationMember";

export function MainTabBar() {
  return (
    <Tabs defaultValue='overview'>
      <div className='w-[400px]'>
        <TabsList className='grid w-full grid-cols-3 '>
          <TabsTrigger value='overview' className='focus:bg-black'>
            Übersicht
          </TabsTrigger>
          <TabsTrigger value='members'>Mitglieder</TabsTrigger>
          <TabsTrigger value='donations'>Spenden</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value='overview'>
        <p>Übersicht mit</p>
        <ul>
          <li>- Anzahl Mitglieder, Summe Spenden</li>
          <li>- aktuelle spendenaktion mit infos</li>
        </ul>
      </TabsContent>
      <TabsContent value='members'>
        <OrganisationMember />
      </TabsContent>
      <TabsContent value='donations'>
        <DonationConfigurator />
      </TabsContent>
    </Tabs>
  );
}

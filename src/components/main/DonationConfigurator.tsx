import { useOrganisationStore } from "@/store/organisation-store";

const DonationConfigurator = () => {
  const organisation = useOrganisationStore((state) => state.organisation);
  return (
    <div>
      <p className='w-1/2 pt-2 text-gray-600'>
        Um eine individuelle Spendenseite zu erstellen musst du sie hier
        individal erstellen und live schalten. Die Seite wird unter{" "}
        <span className='font-bold'>
          https://clubverse.org/{organisation?.name.replace(" ", "-")}
        </span>{" "}
        erreichbar sein
      </p>
    </div>
  );
};

export default DonationConfigurator;

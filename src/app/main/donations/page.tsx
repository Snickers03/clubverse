import DonationsTable from "@/components/main/donations/DonationsTable";
import YourDonationPage from "@/components/main/donations/YourDonationPage";

export default function Page() {
  return (
    <div>
      <YourDonationPage />
      {/* <DonationSetup /> */}
      <DonationsTable />
    </div>
  );
}

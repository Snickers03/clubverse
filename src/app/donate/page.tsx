import DonationForm from "@/components/donate/DonationForm";

export default function Page() {
  return (
    <main className='mt-10'>
      <p className='text-center text-2xl font-medium'>Spenden</p>
      <DonationForm />
    </main>
  );
}

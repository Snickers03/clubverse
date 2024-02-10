import Landing from "@/components/Landing";
import Navigation from "@/components/layout/Navigation";

export default function Home() {
  return (
    <>
      <div className='container mx-auto mt-4'>
        <Navigation />
      </div>
      <main className='mt-10'>
        <Landing />
      </main>
    </>
  );
}

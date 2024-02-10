import Landing from "@/components/Landing";
import Navigation from "@/components/layout/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className='mt-10'>
        <Landing />
      </main>
    </>
  );
}

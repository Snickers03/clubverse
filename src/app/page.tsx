import FeatureCard from "@/components/home/FeatureCard";
import TeamCard from "@/components/home/TeamCard";
import WelcomeCard from "@/components/home/WelcomeCard";
import Navigation from "@/components/layout/Navigation";

export default function Home() {
  return (
    <>
      <div className=' mt-4'>
        <Navigation />
      </div>
      <main className='mt-20'>
        <WelcomeCard />
        <FeatureCard />
        <TeamCard />
      </main>
    </>
  );
}

import FeatureCard from "@/components/home/FeatureCard";
import OurMissionCard from "@/components/home/OurMissionCard";
import WelcomeCard from "@/components/home/WelcomeCard";

export default function Home() {
  return (
    <main>
      <WelcomeCard />
      <FeatureCard />
      <OurMissionCard />
      {/* <TeamCard /> */}
    </main>
  );
}

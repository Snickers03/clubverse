import FeatureCard from "@/components/home/FeatureCard";
import TeamCard from "@/components/home/TeamCard";
import WelcomeCard from "@/components/home/WelcomeCard";

export default function Home() {
  return (
    <main>
      <WelcomeCard />
      <FeatureCard />
      <TeamCard />
    </main>
  );
}

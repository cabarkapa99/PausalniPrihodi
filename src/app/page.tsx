import Image from "next/image";
import LandingNavigation from "@/components/LandingNavigation/LandingNavigation";
import Hero from "@/modules/Hero/Hero";

export default function Home() {
  return (
    <>
      <LandingNavigation />
      <Hero />
    </>
  );
}

import Navbar from "@/components/navigation/Navbar";
import Finale from "@/components/finale/Finale";

import AboutHero from "@/src/features/about/AboutHero";
import AboutHouse from "@/src/features/about/AboutHouse";
import AboutPrinciples from "../AboutPrinciples";
import AboutProcess from "@/src/features/about/AboutProcess";
import AboutContinuation from "@/src/features/about/AboutContinuation";

export default function AboutPage() {
  return (
    <main className="text-white">
      <Navbar />

      <AboutHero />

      <AboutHouse />

      <AboutPrinciples />

      <AboutProcess />

      <AboutContinuation />

      <Finale />
    </main>
  );
}
import Loader from "@/components/loader/Loader";
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";
import Manifesto from "@/components/manifesto/Manifesto";
import Chapter01 from "@/src/features/chapter01/Chapter01";
import Transition from "@/src/features/transition/Transition";
import Journal from "@/components/journal/Journal";
import Residents from "@/components/residents/Residents";
import Finale from "@/components/finale/Finale";
import FeaturedProducts from "@/src/features/chapter01/FeaturedProduct";



export default function Home() {
  return (
    <main className=" text-white">
      <Loader />
      <Navbar />

      <Hero />

      <Manifesto />

      <Chapter01 />

      <Transition />

      <FeaturedProducts />

      <Journal />
      
      <Residents />
      <Finale />
    </main>
  );
}
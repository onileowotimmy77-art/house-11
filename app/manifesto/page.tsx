import ManifestoHero from "@/components/homepage/manifesto/ManifestoHero";
import ManifestoStatements from "@/components/homepage/manifesto/ManifestoStatements";
import ManifestoArrival from "@/components/homepage/manifesto/ManifestoArrival";

export default function ManifestoPage() {
  return (
    <>
      <ManifestoHero />
      <ManifestoStatements full />
      <ManifestoArrival />
    </>
  );
}
import { notFound } from "next/navigation";

import { collections } from "@/data/collections";

import CollectionHero from "@/components/homepage/collections/CollectionHero";
import CollectionStory from "@/components/homepage/collections/CollectionStory";
import CollectionQuote from "@/components/homepage/collections/CollectionQuote";
import CollectionCampaign from "@/components/homepage/collections/CollectionsCampaign";
import CollectionPieces from "@/components/homepage/collections/CollectionPieces";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CollectionPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const collection = collections.find(
    (item) => item.slug === slug
  );

  if (!collection) {
    notFound();
  }

  return (
    <>
      <CollectionHero collection={collection} />
      <CollectionCampaign collection={collection}/>
      <CollectionStory collection={collection} />
      <CollectionPieces collection={collection} />
      <CollectionQuote collection={collection} />
    </>
  );
}
"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";

import ChapterHeader from "./ChapterHeader";
import ChapterCampaign from "./ChapterCampaign";


export default function Chapter01() {
  return (
    <Section padding="py-56">
      <Container className="max-w-[1700px]">

        <ChapterHeader />

        <ChapterCampaign />

      </Container>
    </Section>
  );
}
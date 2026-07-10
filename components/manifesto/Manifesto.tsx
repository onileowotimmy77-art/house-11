"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";

import ManifestoHeader from "./ManifestoHeader";
import ManifestoIntro from "./ManifestoIntro";
import ManifestoStatements from "./ManifestoStatements";
import ManifestoClosing from "./ManifestoClosing";


export default function Manifesto() {
  
  return (
    <Section padding="py-56">
      <Container>

        <ManifestoHeader />

        <ManifestoIntro />

        <ManifestoStatements />

        <ManifestoClosing />

      </Container>
    </Section>
  );
}
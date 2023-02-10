import Head from "next/head";
import React from "react";

// Components
import {
  Header,
  HeroSection,
  MyServiceInfo,
  ProjectsSection,
  LatestProjectsSection,
  TechnologiesSection,
  ExperienceSection,
  FaQSection,
  Footer,
} from "../components";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>
          Hasnaat Iftikhar - FullStack ReactJS Developer at Visiata with strong
          focus on learning Backend development
        </title>
        <meta
          name="description"
          content="Hasnaat Iftikhar - FullStack ReactJS Developer at Visiata with strong focus on learning Backend development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <HeroSection />
        <ProjectsSection />
        <MyServiceInfo />
        <LatestProjectsSection />
        <TechnologiesSection />
        <ExperienceSection />
        <FaQSection />
        <Footer />
      </main>
    </React.Fragment>
  );
}

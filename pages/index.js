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
          Personal portfolio website template - Developed by Hasnaat Iftikhar
        </title>
        <meta
          name="description"
          content="Here is complete source code of a personal portfolio website developed by Hasnaat Iftikhar (FullStack ReactJS Developer). Checkout that website and connect with Hasnaat on LinkedIn!"
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

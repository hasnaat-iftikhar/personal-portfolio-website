import Head from "next/head";

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
    <>
      <Head>
        <title>Hasnaat Iftikhar</title>
        <meta
          name="description"
          content="Hasnaat Iftikhar - FullStack Developer and Elevating my skills in Cloud"
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
    </>
  );
}

import type { NextPage } from "next";
import Head from "next/head";
import { About } from "../components/About";
import { Footer } from "../components/Footer";
import { HomePage } from "../components/Home";
import { Projects } from "../components/Projects";
import { MySkills } from "../components/Skills";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfólio Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HomePage />
      <MySkills />
      <Projects />
      <About />
      <Footer />
    </>
  );
};

export default Home;

import type { NextPage } from "next";
import { About } from "../components/About";
import { Footer } from "../components/Footer";
import { HomePage } from "../components/Home";
import { Projects } from "../components/Projects";
import { MySkills } from "../components/Skills";

const Home: NextPage = () => {
  return (
    <>
      <HomePage />
      <MySkills />
      <Projects />
      <About />
      <Footer />
    </>
  );
};

export default Home;

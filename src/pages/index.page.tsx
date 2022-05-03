import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { About } from "./home/About";
import { Banner } from "./home/Banner";
import { Feedbacks } from "./home/Feedbacks";
import { HowItWorks } from "./home/HowItWorks";
import { UrgentWorks } from "./home/UrgentWorks";
import { Works } from "./home/Works";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DQEF</title>
      </Head>
      <Banner />
      <UrgentWorks />
      <Works />
      <HowItWorks />
      <Feedbacks />
      <About />
      <Footer />
    </div>
  );
};

export default Home;

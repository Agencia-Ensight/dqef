import { Footer } from "@/components";
import {
  About,
  Banner,
  Feedbacks,
  HowItWorks,
  UrgentWorks,
  Works,
} from "./home";

function Home() {
  return (
    <>
      <Banner />
      <UrgentWorks />
      <Works />
      <HowItWorks />
      <Feedbacks />
      <About />
      <Footer />
    </>
  );
}

export default Home;

import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Layout,
  Navbar,
  

  Footer,

  HomePeopleSlider,
} from "../components/import";

import PrivacyPolicyBody from "@/components/compound/privacyPolicyBody";
import PrivacyPolicyHero from "@/components/compound/privacyPolicyHero";
import ComplaintsProcedureHero from "@/components/compound/ComplaintsProcedure/ComplaintsProcedureHero";
import ComplaintsProcedureBody from "@/components/compound/ComplaintsProcedure/ComplaintsProcedureBody";

export default function ComplaintsProcedure() {
  return (
    <Layout>
      <Navbar />
       <ComplaintsProcedureHero/>

         <ComplaintsProcedureBody/>

         <HomePeopleSlider />
      <Footer />
    </Layout>
  );
}

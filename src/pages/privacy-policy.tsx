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

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Navbar />
       <PrivacyPolicyHero/>

         <PrivacyPolicyBody/>

         <HomePeopleSlider />
      <Footer />
    </Layout>
  );
}

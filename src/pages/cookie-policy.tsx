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
import CookiePolicyHero from "@/components/compound/cookiePolicy/cookiePolicyHero";
import CookiePolicyBody from "@/components/compound/cookiePolicy/cookiePolicyBody";

export default function CookiePolicy() {
  return (
    <Layout>
      <Navbar />
       <CookiePolicyHero/>

         <CookiePolicyBody/>

         <HomePeopleSlider />
      <Footer />
    </Layout>
  );
}

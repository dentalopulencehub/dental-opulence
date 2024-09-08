import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Layout,
  Navbar,
  

  Footer,

  HomePeopleSlider,
} from "../components/import";


import CookiePolicyHero from "@/components/compound/cookiePolicy/cookiePolicyHero";
import CookiePolicyBody from "@/components/compound/cookiePolicy/cookiePolicyBody";
import HealthSafetyHero from "@/components/compound/HealthSafety/HealthSafetyHero";
import HealthSafetyBody from "@/components/compound/HealthSafety/HealthSafetyBody";

export default function HealthSafety() {
  return (
    <Layout>
      <Navbar />
       <HealthSafetyHero/>

         <HealthSafetyBody/>

         <HomePeopleSlider />
      <Footer />
    </Layout>
  );
}

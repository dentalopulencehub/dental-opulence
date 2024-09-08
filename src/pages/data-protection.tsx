import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Layout,
  Navbar,
  

  Footer,

  HomePeopleSlider,
} from "../components/import";

import DataProtectionHero from "@/components/compound/DataProtection/DataProtectionHero";
import DataProtectionBody from "@/components/compound/DataProtection/DataProtectionBody";

export default function DataProtection() {
  return (
    <Layout>
      <Navbar />
       <DataProtectionHero/>

         <DataProtectionBody/>

         <HomePeopleSlider />
      <Footer />
    </Layout>
  );
}

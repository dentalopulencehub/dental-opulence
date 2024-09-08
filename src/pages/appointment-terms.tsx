import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Layout,
  Navbar,
  

  Footer,

  HomePeopleSlider,
} from "../components/import";


import AppointmentTermsHero from "@/components/compound/AppointmentTerms/AppointmentTermsHero";
import AppointmentTermsBody from "@/components/compound/AppointmentTerms/AppointmentTermsBody";

export default function AppointmentTerms() {
  return (
    <Layout>
      <Navbar />
       <AppointmentTermsHero/>

         <AppointmentTermsBody/>

         <HomePeopleSlider />
      <Footer />
    </Layout>
  );
}

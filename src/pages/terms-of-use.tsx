import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Layout,
  Navbar,
  CaseHero,

  Footer,
  AboutHero,
  HomePeopleSlider,
} from "../components/import";
import VideoTestimonials from "@/components/compound/videoTestimonials";
import VideoTestimonialStrokeLine from "@/components/compound/videoTestimonialStrokeLine";
import PrivacyPolicyBody from "@/components/compound/privacyPolicyBody";
import PrivacyPolicyHero from "@/components/compound/privacyPolicyHero";
import TermsUseHero from "@/components/compound/TermsUseHero";
import TermsOfUseBody from "@/components/compound/TermsOfUseBody";

export default function TermsOfUse() {
  return (
    <Layout>
      <Navbar />
        <TermsUseHero/>

         <TermsOfUseBody/>

         <HomePeopleSlider />
      <Footer />
    </Layout>
  );
}

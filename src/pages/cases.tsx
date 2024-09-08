import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Layout,
  Navbar,
  CaseHero,
  CaseSelectOptions,
  CaseSelectedImages,
  HomePeopleSlider,
  Footer,
} from "../components/import";
import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";

export default function Cases() {
  return (
    <Layout>
      <Navbar />
      <CaseHero />
      <CaseSelectOptions />
      <CaseSelectedImages />
      <HomePeopleSlider2 />
      <Footer />
    </Layout>
  );
}

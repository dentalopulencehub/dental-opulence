import { faq } from "../../constants";
import {
  Footer,
  Layout,
  ServiceHero,
  ServiceAward,
  ServiceHero2,
  ServiceHero3,
  ServiceCompositeBonding,
  ServiceElevate,
  ServiceTransform,
  CompositeBondingHowLong,
  HomeOurServices,
  TestimonyComp,
  OurProcess,
  Faq,
  HomePeopleSlider,
  Navbar,
  ServiceOurService
} from "../components/import";

export default function Services() {
  return (
    <Layout>
      <Navbar />
      <ServiceHero />
      <ServiceAward />
      {/* <ServiceHero2 />
      <ServiceHero3 />
      <ServiceCompositeBonding />
      <ServiceElevate /> */}
      <ServiceTransform />
      <CompositeBondingHowLong />
      <ServiceOurService />
      {/* <HomeOurServices /> */}
      <TestimonyComp />
      <OurProcess />
      <Faq faqList={faq} />
      <HomePeopleSlider />
      <Footer />
    </Layout>
  );
}

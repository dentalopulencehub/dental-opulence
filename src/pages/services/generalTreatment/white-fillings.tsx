import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import {
  serviceCompositeBonding_WhiteFillings,
  serviceElevet_WhiteFillings,
  serviceHero2Desc_WhiteFillings,
  whiteFillingFaq,
} from "../../../../constants";
import {
  Layout,
  Navbar,
  ServiceAward,
  ServiceHero2,
  ServiceCompositeBonding,
  ServiceElevate,
  ServiceTransform,
  CompositeBondingHowLong,
  ServiceOurService,
  TestimonyComp,
  OurProcess,
  Faq,
  HomePeopleSlider,
  Footer,
} from "../../../components/import";
import PatientWalkThrough from "../reuseable/patientWalkThrough";
import WhiteFillingHero from "./whiteFillings/whiteFillingHero";
import WhiteFillingVideo from "./whiteFillings/whiteFillingVideo";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";
import WhiteFillingOurCases from "./whiteFillings/OurCases";

export default function WhiteFillings() {
  return (
    <Layout>
      <Navbar />
      <WhiteFillingHero />
      <ServiceAward />
      <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2Desc_WhiteFillings} />
      <WhiteFillingOurCases />

      <WhiteFillingVideo />
      <ServiceCompositeBondingMain
        service_compositeBonding={serviceCompositeBonding_WhiteFillings}
      />
      <ServiceElevate service_elevate={serviceElevet_WhiteFillings} />
      <PatientWalkThrough />
      <ServiceTransform />
      {/* <CompositeBondingHowLong /> */}
      {/* <HomeOurServices /> */}
      <TestimonyComp />
      {/* <OurProcess /> */}
      <Faq faqList={whiteFillingFaq} />
      <HomePeopleSlider2 />
      <Footer />
    </Layout>
  );
}

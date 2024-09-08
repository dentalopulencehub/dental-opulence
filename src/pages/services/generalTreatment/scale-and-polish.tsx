import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { serviceCompositeBonding_ScaleAndPolish, serviceCompositeBonding_WhiteFillings, serviceElevet_ScaleAndPolish, serviceElevet_WhiteFillings, serviceHero2Desc_ScaleAndPolish, serviceHero2Desc_WhiteFillings, whiteFillingFaq } from "../../../../constants";
import { 
    Layout,
    Navbar,
    ServiceAward ,
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
import WhiteFillingVideo from "./whiteFillings/whiteFillingVideo";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";
import ScaleAndPolishHero from "./scaleAndPolish/scaleAndPolishHero";
import ScaleAndPolishVideo from "./scaleAndPolish/scaleAndPolishVideo";


  
  export default function ScaleAndPolish() {
    return (
      <Layout>
        <Navbar />
        <ScaleAndPolishHero/>
        <ServiceAward />
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2Desc_ScaleAndPolish} />
        <ScaleAndPolishVideo/>
        <ServiceCompositeBondingMain service_compositeBonding={serviceCompositeBonding_ScaleAndPolish} />
        <ServiceElevate service_elevate={serviceElevet_ScaleAndPolish}/>
        <PatientWalkThrough/>
        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        {/* <ServiceOurService /> */}
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={whiteFillingFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  
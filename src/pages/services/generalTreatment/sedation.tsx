import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { serviceCompositeBonding_ScaleAndPolish, serviceCompositeBonding_Sedation, serviceCompositeBonding_WhiteFillings, serviceElevet_ScaleAndPolish, serviceElevet_Sedation, serviceElevet_WhiteFillings, serviceHero2Desc_ScaleAndPolish, serviceHero2Desc_Sedation, serviceHero2Desc_WhiteFillings, whiteFillingFaq } from "../../../../constants";
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
import SedationHero from "./sedation/SedationHero";
import SedationVideo from "./sedation/SedationVideo";


  
  export default function Sedation() {
    return (
      <Layout>
        <Navbar />
        <SedationHero/>
        <ServiceAward />
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2Desc_Sedation} />
        <SedationVideo/>
        <ServiceCompositeBondingMain service_compositeBonding={serviceCompositeBonding_Sedation} />
        <ServiceElevate service_elevate={serviceElevet_Sedation}/>
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
  
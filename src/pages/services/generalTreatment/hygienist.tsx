import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { hygienistFaq, serviceCompositeBonding_Hygienist, serviceElevet_Hygienist, serviceHero2Desc_Hygienist } from "../../../../constants";
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
import HygienistHero from "./hygienistSection/hygienistHero";
import HygienistVideo from "./hygienistSection/hygienistVideo";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";


  
  export default function Examination() {
    return (
      <Layout>
        <Navbar />
        <HygienistHero/>
        <ServiceAward />
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2Desc_Hygienist} />
        <HygienistVideo/> 
        <ServiceCompositeBondingMain service_compositeBonding= {serviceCompositeBonding_Hygienist} />
        <ServiceElevate service_elevate={serviceElevet_Hygienist}/>
        <PatientWalkThrough/>

        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        {/* <ServiceOurService /> */}
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={hygienistFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  
import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { extractionFaq, serviceCompositeBonding_Extractions, serviceElevet_Extractions, serviceHero2DescExtyractions } from "../../../../constants";
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
import ExtractionsHero from "./extractionsSection/extractionsHero";
import ExtractionsVideo from "./extractionsSection/extractionsVideo";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";


  
  export default function Extractions() {
    return (
      <Layout>
        <Navbar />
        <ExtractionsHero/>
        <ServiceAward />
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2DescExtyractions} />
         <ExtractionsVideo/>
        <ServiceCompositeBondingMain service_compositeBonding={serviceCompositeBonding_Extractions} />
        <ServiceElevate service_elevate={serviceElevet_Extractions}/>
        <PatientWalkThrough/>

        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        {/* <ServiceOurService /> */}
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={extractionFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  
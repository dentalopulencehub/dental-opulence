import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { examinationFaq, serviceCompositeBonding_Examination, serviceElevet_Examination, serviceHero2Desc_Examination } from "../../../../constants";
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
import ExaminationHero from "./examination/examinationHero";
import ExaminationVideo from "./examination/examinationVideo";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";


  
  export default function Examination() {
    return (
      <Layout>
        <Navbar />
        <ExaminationHero/>
        <ServiceAward />
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2Desc_Examination} />
        <ExaminationVideo/>
        <ServiceCompositeBondingMain service_compositeBonding={serviceCompositeBonding_Examination} />
        <ServiceElevate service_elevate={serviceElevet_Examination}/>

        <PatientWalkThrough/>

        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        {/* <ServiceOurService /> */}
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={examinationFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  
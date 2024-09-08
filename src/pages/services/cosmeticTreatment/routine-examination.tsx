import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { dentalExaminationFaq, serviceCompositeBonding_RoutineExamination, serviceElevet_RoutineExamination, serviceHero2Desc_RoutineExamination } from "../../../../constants";
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
import CosmaticWalkThrough from "../reuseable/cosmaticWalkThrough";
import RoutineExaminationHero from "./RoutineExaminationSection/RoutineExaminationHero";
import RoutineExaminationVideo from "./RoutineExaminationSection/RoutineExaminationVideo";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";



  
  export default function RoutineExamination() {
    return (
      <Layout>
        <Navbar />
        <RoutineExaminationHero/>
        <ServiceAward />
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2Desc_RoutineExamination} />
        <RoutineExaminationVideo/>
        <ServiceCompositeBondingMain service_compositeBonding={serviceCompositeBonding_RoutineExamination} />
        <ServiceElevate service_elevate={serviceElevet_RoutineExamination}/>
        <CosmaticWalkThrough/>
        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        {/* <ServiceOurService /> */}
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={dentalExaminationFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  
import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { denturesFaq, serviceCompositeBonding_Dentures, serviceElevet_Dentures, serviceHero2DescDentures } from "../../../../constants";
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
import DentureHero from "./dentureSection/dentureHero";
import DentureVideo from "./dentureSection/dentureVideo";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";


  
  export default function Dentures() {
    return (
      <Layout>
        <Navbar />
        <DentureHero/>
        <ServiceAward />
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2DescDentures} />
        <DentureVideo/>
        <ServiceCompositeBondingMain service_compositeBonding={serviceCompositeBonding_Dentures} />
        <ServiceElevate  service_elevate={serviceElevet_Dentures}/>

        <PatientWalkThrough/>

        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        {/* <ServiceOurService /> */}
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={denturesFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  
import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { crownsFaq, serviceCompositeBonding_CrownsVeneers2, serviceElevet_CrownsVeneers2, serviceHero2Desc_crowsVeneers2 } from "../../../../constants";
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
import CrownsVeneersHero from "./CrownsVeneersSection/CrownsVeneersHero";
import CrownsVeneersVideo from "./CrownsVeneersSection/CrownsVeneersVideo";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";
import CrownVeneersOurCases from "./CrownsVeneersSection/OurCases";




  
  export default function Crowns() {
    return (
      <Layout>
        <Navbar />
        <CrownsVeneersHero/>
        <ServiceAward />
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2Desc_crowsVeneers2} />
        <CrownVeneersOurCases />
        <CrownsVeneersVideo/>
        <ServiceCompositeBondingMain service_compositeBonding={serviceCompositeBonding_CrownsVeneers2} />
        <ServiceElevate service_elevate={serviceElevet_CrownsVeneers2}/>
        <CosmaticWalkThrough/>
        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
       
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={crownsFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  
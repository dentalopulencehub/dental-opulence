import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { serviceCompositeBonding_ViveraRetainers, serviceElevet_ViveraRetainers, serviceHero2Desc_ViveraRetainers, viveraRetainersFaq } from "../../../../constants";
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
import ViveraRetainersHero from "./ViveraRetainersSection/ViveraRetainersHero";
import ViveraRetainersVideo from "./ViveraRetainersSection/ViveraRetainersVideo";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";

  
  export default function ViveraRetainers() {
    return (
      <Layout>
        <Navbar />
        <ViveraRetainersHero/>
        <ServiceAward />
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2Desc_ViveraRetainers} />
        <ViveraRetainersVideo/>
        <ServiceCompositeBondingMain service_compositeBonding={serviceCompositeBonding_ViveraRetainers} />
        <ServiceElevate service_elevate={serviceElevet_ViveraRetainers}/>
        <CosmaticWalkThrough/>
        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        {/* <ServiceOurService /> */}
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={viveraRetainersFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  
import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { fixedRetainersFaq, serviceCompositeBonding_FixedRetainers, serviceElevet_FixedRetainers, serviceHero2Desc_FixedRetainers } from "../../../../constants";
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
import FixedRetainersHero from "./FixedRetainersSection/FixedRetainersHero";
import FixedRetainersVideo from "./FixedRetainersSection/FixedRetainersVideo";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";



  
  export default function invisalign() {
    return (
      <Layout>
        <Navbar />
        <FixedRetainersHero/>
        <ServiceAward />
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2Desc_FixedRetainers} />
        <FixedRetainersVideo/> 
        <ServiceCompositeBondingMain service_compositeBonding={serviceCompositeBonding_FixedRetainers} />
        <ServiceElevate service_elevate={serviceElevet_FixedRetainers}/>
        <CosmaticWalkThrough/>
        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        {/* <ServiceOurService /> */}
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={fixedRetainersFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  
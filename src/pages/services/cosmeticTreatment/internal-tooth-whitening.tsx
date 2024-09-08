import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { internalTeethWhiteFaq, serviceCompositeBonding_InternalToothWhitening, serviceElevet_InternalToothWhitening, serviceHero2Desc_InternalToothWhitening } from "../../../../constants";
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
import InternalToothWhiteningHero from "./InternalToothWhiteningSection/InternalToothWhiteningHero";
import InternalToothWhiteningVideo from "./InternalToothWhiteningSection/InternalToothWhiteningVideo";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";



  
  export default function InternalToothWhitening() {
    return (
      <Layout>
        <Navbar />
        <InternalToothWhiteningHero/>
        <ServiceAward />
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2Desc_InternalToothWhitening} />
        <InternalToothWhiteningVideo/>
        <ServiceCompositeBondingMain service_compositeBonding={serviceCompositeBonding_InternalToothWhitening} />
        <ServiceElevate service_elevate={serviceElevet_InternalToothWhitening}/>
        <CosmaticWalkThrough/>
        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        {/* <ServiceOurService /> */}
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={internalTeethWhiteFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  
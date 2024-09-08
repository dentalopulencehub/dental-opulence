import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { compositeEdgeFaq, serviceCompositeBonding_CompositeEdgeBonding, serviceElevet_CompositeEdgeBonding, serviceHero2Desc_CompositeEdgebonding } from "../../../../constants";
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
import CompositeEdgeBondingHero from "./CompositeEdgeBondingSection/CompositeEdgeBondingHero";
import CompositeEdgeBondingVideo from "./CompositeEdgeBondingSection/CompositeEdgeBondingVideo";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";
import CompositeEdgeBondingOurCases from "./CompositeEdgeBondingSection/OurCases";



  
  export default function CompositeEdgeBonding() {
    return (
      <Layout>
        <Navbar />
        <CompositeEdgeBondingHero/>
        <ServiceAward />
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2Desc_CompositeEdgebonding}/>
        <CompositeEdgeBondingOurCases />

        <CompositeEdgeBondingVideo/>
        <ServiceCompositeBondingMain service_compositeBonding={serviceCompositeBonding_CompositeEdgeBonding} />
        <ServiceElevate service_elevate={serviceElevet_CompositeEdgeBonding}/>
        <CosmaticWalkThrough/>
        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={compositeEdgeFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  
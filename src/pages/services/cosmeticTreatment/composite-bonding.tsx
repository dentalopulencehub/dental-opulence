import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { compositeBondingFaq, serviceCompositeBonding_Compositebonding, serviceElevet_CompositeBonding, serviceHero2Desc_compositeBonding } from "../../../../constants";
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
import CompositeBondingHero from "./CompositeBondingSection/CompositeBondingHero";
import CompositeBondingVideo from "./CompositeBondingSection/CompositeBondingVideo";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";
import CompositeBondingOurCases from "./CompositeBondingSection/OurCases";



  
  export default function CompositeBonding() {
    return (
      <Layout>
        <Navbar />
        <CompositeBondingHero/> 
        <ServiceAward />
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2Desc_compositeBonding} />
        <CompositeBondingOurCases />

        <CompositeBondingVideo/>
        <ServiceCompositeBondingMain service_compositeBonding={serviceCompositeBonding_Compositebonding} />
        <ServiceElevate service_elevate={serviceElevet_CompositeBonding}/>

        <CosmaticWalkThrough/>

        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={compositeBondingFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  
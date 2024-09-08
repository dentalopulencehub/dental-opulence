import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { invisalignFaq, serviceCompositeBonding_Invisalign, serviceElevet_Invisalign, serviceHero2Desc_Invisalign } from "../../../../constants";
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
import InvisalignHero from "./invisalignSection/invisalignHero";
import InvisalignVideo from "./invisalignSection/invisalignVideo";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";
import InvisalignOurCases from "./invisalignSection/OurCases";


  
  export default function invisalign() {
    return (
      <Layout>
        <Navbar />
        <InvisalignHero/>
        <ServiceAward />
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2Desc_Invisalign} />
        <InvisalignOurCases />

        <InvisalignVideo/>
        <ServiceCompositeBondingMain service_compositeBonding={serviceCompositeBonding_Invisalign} />
        <ServiceElevate service_elevate={serviceElevet_Invisalign}/>
        <CosmaticWalkThrough/>
        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        <InvisalignOurCases />
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={invisalignFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  
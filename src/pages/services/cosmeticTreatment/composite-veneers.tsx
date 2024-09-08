import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { compositeVeneerFaq, serviceCompositeBonding_CompositeVeneers, serviceElevet_CompositeVeneers, serviceHero2Desc_CompositeVeneers } from "../../../../constants";
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
import CompositeVeneersHero from "./CompositeVeneersSection/CompositeVeneersHero";
import CompositeVeneersVideo from "./CompositeVeneersSection/CompositeVeneersVideo";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";
import CompositeVeneersOurCases from "./CompositeVeneersSection/OurCases";



  
  export default function CompositeVeneers() {
    return (
      <Layout>
        <Navbar />
        <CompositeVeneersHero/>
        <ServiceAward />
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2Desc_CompositeVeneers} />
        <CompositeVeneersOurCases />
        <CompositeVeneersVideo/>
        <ServiceCompositeBondingMain service_compositeBonding={serviceCompositeBonding_CompositeVeneers} />
        <ServiceElevate service_elevate={serviceElevet_CompositeVeneers}/>
        <CosmaticWalkThrough/>
        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
     
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={compositeVeneerFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  
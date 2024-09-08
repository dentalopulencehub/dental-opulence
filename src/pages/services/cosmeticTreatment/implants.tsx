import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { invisalignFaq, serviceCompositeBonding_Implants, serviceCompositeBonding_Invisalign, serviceElevet_Implants, serviceElevet_Invisalign, serviceHero2Desc_Implants, serviceHero2Desc_Invisalign } from "../../../../constants";
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
import ImplantsHero from "./Implants/ImplantsHero";
import ImplantsVideo from "./Implants/ImplantsVideo";


  
  export default function Implants() {
    return (
      <Layout>
        <Navbar />
        <ImplantsHero/>
        <ServiceAward />
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2Desc_Implants} />
        <ImplantsVideo/>
        <ServiceCompositeBondingMain service_compositeBonding={serviceCompositeBonding_Implants} />
        <ServiceElevate service_elevate={serviceElevet_Implants}/>
        <CosmaticWalkThrough/>
        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        {/* <ServiceOurService /> */}
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={invisalignFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  
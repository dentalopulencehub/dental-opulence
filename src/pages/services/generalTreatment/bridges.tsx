import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { bridgesFaq, serviceCompositeBonding_Bridges, serviceElevetBridges, serviceHero2DescBridge } from "../../../../constants";
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
import BridgeVideo from "./bridgesSection/bridgeVideo";
import BridgesHeroSection from "./bridgesSection/bridgesHeroSection";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";


  
  export default function Bridges() {
    return (
      <Layout>
        <Navbar />
        <BridgesHeroSection/>
        <ServiceAward />
        
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2DescBridge} />
        
        <BridgeVideo/>

        <ServiceCompositeBondingMain service_compositeBonding={serviceCompositeBonding_Bridges}/>
        
        <ServiceElevate service_elevate={serviceElevetBridges}/>
        

        <PatientWalkThrough/>

        <ServiceTransform />
        
        {/* <CompositeBondingHowLong /> */}

        {/* <ServiceOurService /> */}
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={bridgesFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  
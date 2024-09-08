import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { rootFaq, serviceCompositeBonding_RootCanalTreatments, serviceElevet_RootCanalTreatments, serviceHero2Desc_RootCanalTreatments } from "../../../../constants";
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
import RootCanalTreatmentsHero from "./rootCanalTreatmentsSection/rootCanalTreatmentsHero";
import RootCanalTreatmentsVideo from "./rootCanalTreatmentsSection/rootCanalTreatmentsVideo";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";



  
  export default function Examination() {
    return (
      <Layout>
        <Navbar />
        <RootCanalTreatmentsHero/>
        <ServiceAward />
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2Desc_RootCanalTreatments} />
        <RootCanalTreatmentsVideo/>
        <ServiceCompositeBondingMain service_compositeBonding={serviceCompositeBonding_RootCanalTreatments} />
        <ServiceElevate service_elevate={serviceElevet_RootCanalTreatments}/>

        <PatientWalkThrough/>

        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        {/* <ServiceOurService /> */}
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={rootFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  
import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Layout,
  Navbar,
  CaseHero,
  CaseSelectOptions,
  CaseSelectedImages,
  HomePeopleSlider,
  Footer,
} from "../components/import";
import VideoTestimonials from "@/components/compound/videoTestimonials";
import VideoTestimonialStrokeLine from "@/components/compound/videoTestimonialStrokeLine";
import VideoTestHero from "@/components/compound/videoTestHero";
import VideoTestimonialSelectOption from "@/components/compound/videoTestimonialSelectOption";
import VideoGallary from "@/components/compound/VideoGallary";
import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";

export default function Cases() {
  return (
    <Layout>
      <Navbar />
      <VideoTestHero />
      {/* <VideoTestimonialSelectOption/> */}
     {/* <VideoTestimonialStrokeLine/>   */}
      
     {/* <VideoTestimonials/> */}
    <VideoGallary/>

  
    
      {/* <CaseSelectOptions /> */}
      {/* <CaseSelectedImages />
      <HomePeopleSlider /> */}
        <HomePeopleSlider2 />
      <Footer />
    </Layout>
  );
}

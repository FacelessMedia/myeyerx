import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import TrustBanner from "@/components/TrustBanner";
import Testimonials from "@/components/Testimonials";
import WhoQualifies from "@/components/WhoQualifies";
import WhyChoose from "@/components/WhyChoose";
import AboutUs from "@/components/AboutUs";
import GoogleReviews from "@/components/GoogleReviews";
import StateSelector from "@/components/StateSelector";
import FAQ from "@/components/FAQ";
import Articles from "@/components/Articles";
import DecisionCTA from "@/components/DecisionCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Steps />
      <TrustBanner />
      <Testimonials />
      <WhoQualifies />
      <WhyChoose />
      <AboutUs />
      <GoogleReviews />
      <StateSelector />
      <FAQ />
      <Articles />
      <DecisionCTA />
    </>
  );
}

import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import TrustBanner from "@/components/TrustBanner";
import GoogleReviews from "@/components/GoogleReviews";
import WhoQualifies from "@/components/WhoQualifies";
import WhyChoose from "@/components/WhyChoose";
import AboutUs from "@/components/AboutUs";
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
      <GoogleReviews />
      <WhoQualifies />
      <WhyChoose />
      <AboutUs />
      <StateSelector />
      <FAQ />
      <Articles />
      <DecisionCTA />
    </>
  );
}

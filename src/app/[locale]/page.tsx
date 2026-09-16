import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Credentials from "@/components/Credentials";
import Services from "@/components/Services";
import CareerPath from "@/components/CareerPath";
import Schedule from "@/components/Schedule";
import Publications from "@/components/Publications";
import BlogPreview from "@/components/BlogPreview";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import HashScrollHandler from "@/components/HashScrollHandler";

export default function HomePage() {
  return (
    <>
      <HashScrollHandler />
      <Hero />
      <TrustBar />
      <About />
      <Credentials />
      <Services />
      <CareerPath />
      <Schedule />
      <Publications />
      <BlogPreview />
      <Testimonials />
      <Faq />
      <Booking />
      <Contact />
    </>
  );
}

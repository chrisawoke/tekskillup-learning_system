// import Header from "@/components/Header";
// import Hero from "@/components/Hero/Hero";
import Categories from "@/components/Categories/Categories"
import Courses from "@/components/Fea-Courses/Courses"
import Testimonial from "@/components/Testimonials/testimonial"
import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";

import About from "@/components/About";
import BrandsLogo from "@/components/BrandsLogo";
import Header from "@/components/Header";
import Hero from "@/components/Hero/Hero";
import ServiceStats from "@/components/ServiceStats";
import Feature from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Hero />
      <BrandsLogo />
      <ServiceStats />
      <About />
      <Feature />
      <Categories />
      <Courses/>
      <Testimonial />
      <Faq />
      <Footer />
    </main>
  );
}

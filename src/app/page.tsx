import { ParallaxSection } from "./components/ParallaxSection";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Industries from "./components/Industries";
import ImageBanner from "./components/ImageBanner";
import WhyUs from "./components/WhyUs";
import Values from "./components/Values";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      <ParallaxSection />

      <Industries />

      <ImageBanner
        src="/businessman-and-secretary-work-at-container-cargo-2025-03-15-20-52-57-utc.jpg"
        alt="Meeting between two individuals"
        title={["Building wealth,", "creating futures."]}
      />

      <WhyUs
        title="Trusted experts with years of experience and industry accreditations"
        paragraphs={[
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam doloremque ut perferendis, eveniet nobis dicta totam exercitationem. Veritatis ratione natus, quasi aut, voluptates odit est deserunt labore officiis reprehenderit perferendis.",
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni nisi neque autem consequuntur in nostrum at aspernatur provident ex odio.",
        ]}
      />

      <Values />

      <Carousel />

      <ImageBanner
        src="/multicultural-business-team-headed-by-boss-posing-2024-12-08-01-10-26-utc.jpg"
        alt="Meeting between two individuals"
        tagline="Team"
        title={[
          "Get to know the,",
          "incredible individuals",
          "behind our company",
        ]}
        buttons={[
          {
            title: "Our people",
            size: "lg",
          },
          {
            title: "Become part of our team",
            size: "lg",
            variant: "underline",
            className: "text-white",
          },
        ]}
      />
    </div>
  );
}

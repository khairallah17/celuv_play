import Image from "next/image";
import Hero from "@/components/aboutus/hero";
import ThemePark from "@/components/aboutus/themePark";
import Team from "@/components/aboutus/team";
import RoadMap from "@/components/aboutus/roadmap";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero/>
      <ThemePark/>
      <Team/>
      <RoadMap/>
      <Footer/>
    </>
  );
}

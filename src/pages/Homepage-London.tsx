import Apartments from "@/components/Homepage/Apartments";
import Hero from "@/components/Homepage/Hero";
import Maps from "@/components/Homepage/Maps";
import Explore from "@/components/Homepage/Explore";
import SubHero from "@/components/Homepage/SubHero";

const HomepageLondon = () => {
  return (
    <section className=" bg-primaryBg">
      <Hero />
      <SubHero />
      <Apartments />
      <Maps />
      <Explore />
    </section>
  );
};

export default HomepageLondon;

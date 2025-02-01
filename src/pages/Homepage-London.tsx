import Apartments from "@/components/Homepage/Apartments";
import Hero from "@/components/Homepage/Hero";
import Maps from "@/components/Homepage/Maps";
import SubHero from "@/components/Homepage/SubHero";

const HomepageLondon = () => {
  return (
    <section className=" bg-primaryBg">
      <Hero />
      <SubHero />
      <Apartments />
      <Maps />
    </section>
  );
};

export default HomepageLondon;

import Apartments from "@/components/Homepage/Apartments";
import Hero from "@/components/Homepage/Hero";
import SubHero from "@/components/Homepage/SubHero";

const HomepageLondon = () => {
  return (
    <section className=" bg-primaryBg">
      <Hero />
      <SubHero />
      <Apartments />
    </section>
  );
};

export default HomepageLondon;

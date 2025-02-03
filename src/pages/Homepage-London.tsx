import Apartments from "@/components/Homepage/Apartments";
import Hero from "@/components/Homepage/Hero";
import Maps from "@/components/Homepage/Maps";
import Explore from "@/components/Homepage/Explore";
import SubHero from "@/components/Homepage/SubHero";
import JoinUs from "@/components/Homepage/JoinUs";
import SisterBrand from "@/components/Homepage/SisterBrand";
import Banner from "@/components/Homepage/Banner";

const HomepageLondon = () => {
  return (
    <section className=" bg-primaryBg overflow-hidden">
      <Hero />
      <SubHero />
      <Apartments />
      <Maps />
      <Explore />
      <JoinUs />
      <SisterBrand />
      <Banner />
    </section>
  );
};

export default HomepageLondon;
